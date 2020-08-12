package api

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/acceptor"
	"github.com/wolfplus2048/mcbeam-plus/agent"
	"github.com/wolfplus2048/mcbeam-plus/conn/message"
	"github.com/wolfplus2048/mcbeam-plus/conn/packet"
	"github.com/wolfplus2048/mcbeam-plus/constants"
	gateproto "github.com/wolfplus2048/mcbeam-plus/protos"
	"github.com/wolfplus2048/mcbeam-plus/route"
	"github.com/wolfplus2048/mcbeam-plus/session"
	"github.com/wolfplus2048/mcbeam-plus/util"
)

type tcpHandler struct {
	opts Options
	exit chan bool
}

func newTcpHandler(exit chan bool,
	opts Options,
) *tcpHandler {
	return &tcpHandler{
		exit: exit,
		opts: opts,
	}
}

// Handle handles messages from a conn
func (t *tcpHandler) Handle(conn acceptor.PlayerConn) {
	// create a client agent and startup write goroutine
	a := agent.NewAgent(conn, t.opts.PacketDecoder, t.opts.PacketEncoder, t.opts.Serializer, t.opts.HeartbeatTime, t.opts.MessagesBufferSize, t.exit, t.opts.MessageEncoder)

	// startup agent goroutine
	go a.Handle()

	logger.Debugf("New session established: %s", a.String())

	// guarantee agent related resource is destroyed
	defer func() {
		a.Session.Close()
		logger.Debugf("Session read goroutine exit, SessionID=%d, UID=%d", a.Session.ID(), a.Session.UID())
	}()

	for {
		msg, err := conn.GetNextMessage()

		if err != nil {
			logger.Errorf("Error reading next available message: %s", err.Error())
			return
		}

		packets, err := t.opts.PacketDecoder.Decode(msg)
		if err != nil {
			logger.Errorf("Failed to decode message: %s", err.Error())
			return
		}

		if len(packets) < 1 {
			logger.Warnf("Read no packets, data: %v", msg)
			continue
		}

		// process all packet
		for i := range packets {
			if err := t.processPacket(a, packets[i]); err != nil {
				logger.Errorf("Failed to process packet: %s", err.Error())
				return
			}
		}
	}
}

func (t *tcpHandler) processPacket(a *agent.Agent, p *packet.Packet) error {
	switch p.Type {
	case packet.Handshake:
		logger.Debug("Received handshake packet")
		if err := a.SendHandshakeResponse(); err != nil {
			logger.Errorf("Error sending handshake response: %s", err.Error())
			return err
		}
		logger.Debugf("Session handshake Id=%d, Remote=%s", a.Session.ID(), a.RemoteAddr())

		// Parse the json sent with the handshake by the client
		handshakeData := &session.HandshakeData{}
		err := json.Unmarshal(p.Data, handshakeData)
		if err != nil {
			a.SetStatus(constants.StatusClosed)
			return fmt.Errorf("Invalid handshake data. Id=%d", a.Session.ID())
		}

		a.Session.SetHandshakeData(handshakeData)
		a.SetStatus(constants.StatusHandshake)
		err = a.Session.Set(constants.IPVersionKey, a.IPVersion())
		if err != nil {
			logger.Warnf("failed to save ip version on session: %q\n", err)
		}

		logger.Debug("Successfully saved handshake data")

	case packet.HandshakeAck:
		a.SetStatus(constants.StatusWorking)
		logger.Debugf("Receive handshake ACK Id=%d, Remote=%s", a.Session.ID(), a.RemoteAddr())

	case packet.Data:
		if a.GetStatus() < constants.StatusWorking {
			return fmt.Errorf("receive data on tcp which is not yet ACK, session will be closed immediately, remote=%s",
				a.RemoteAddr().String())
		}

		msg, err := message.Decode(p.Data)
		if err != nil {
			return err
		}
		t.processMessage(a, msg)

	case packet.Heartbeat:
		// expected
	}

	a.SetLastAt()
	return nil
}

func (t *tcpHandler) processMessage(a *agent.Agent, msg *message.Message) {
	ctx := context.Background()
	route, err := route.Decode(msg.Route)
	if err != nil {
		logger.Errorf("Failed to decode route: %s", err.Error())
		a.AnswerWithError(ctx, msg.ID, err)
		return
	}
	var mid uint
	switch msg.Type {
	case message.Request:
		mid = msg.ID
	case message.Notify:
		mid = 0
	}
	r, _ := util.BuildRequest(ctx, gateproto.RPCType_User, route, a.Session, msg, t.opts.Service.Options().Server.Options().Id)

	rsp, err := t.opts.rpcClient.Call(ctx, r)
	if msg.Type != message.Notify {
		if err != nil {
			logger.Errorf("Failed to process remote message: %s", err.Error())
			a.AnswerWithError(ctx, mid, err)
		} else {
			a.Session.ResponseMID(ctx, mid, rsp.Data)
		}
	}
}
