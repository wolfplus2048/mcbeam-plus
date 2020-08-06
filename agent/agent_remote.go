// Copyright (c) nano Author and TFG Co. All Rights Reserved.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

package agent

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/conn/codec"
	"github.com/wolfplus2048/mcbeam-plus/conn/message"
	"github.com/wolfplus2048/mcbeam-plus/conn/packet"
	"github.com/wolfplus2048/mcbeam-plus/constants"
	mcbeamproto "github.com/wolfplus2048/mcbeam-plus/protos"
	"github.com/wolfplus2048/mcbeam-plus/route"
	"github.com/wolfplus2048/mcbeam-plus/serialize"
	"github.com/wolfplus2048/mcbeam-plus/session"
	"github.com/wolfplus2048/mcbeam-plus/util"
	"net"
	"reflect"

	"github.com/golang/protobuf/proto"
)

// Remote corresponding to another server
type Remote struct {
	Session        *session.Session // session
	chDie          chan struct{}    // wait for close
	messageEncoder message.Encoder
	encoder        codec.PacketEncoder  // binary encoder
	frontendID     string               // the frontend that sent the request
	reply          string               // nats reply topic
	rpcClient      micro.Service        // rpc client
	serializer     serialize.Serializer // message serializer
}

// NewRemote create new Remote instance
func NewRemote(
	sess *mcbeamproto.Session,
	reply string,
	rpcClient micro.Service,
	encoder codec.PacketEncoder,
	serializer serialize.Serializer,
	frontendID string,
	messageEncoder message.Encoder,
) (*Remote, error) {
	a := &Remote{
		chDie:          make(chan struct{}),
		reply:          reply, // TODO this is totally coupled with NATS
		serializer:     serializer,
		encoder:        encoder,
		rpcClient:      rpcClient,
		frontendID:     frontendID,
		messageEncoder: messageEncoder,
	}

	// binding session
	s := session.New(a, false, sess.GetUid())
	s.SetFrontendData(frontendID, sess.GetId())
	err := s.SetDataEncoded(sess.GetData())
	if err != nil {
		return nil, err
	}
	a.Session = s

	return a, nil
}

// Kick kicks the user
func (a *Remote) Kick(ctx context.Context) error {
	if a.Session.UID() == "" {
		return constants.ErrNoUIDBind
	}
	b, err := proto.Marshal(&mcbeamproto.KickMsg{
		UserId: a.Session.UID(),
	})
	if err != nil {
		return err
	}
	_, err = a.SendRequest(ctx, a.frontendID, constants.KickRoute, b)
	return err
}

// Push pushes the message to the user
func (a *Remote) Push(route string, v interface{}) error {
	if (reflect.TypeOf(a.rpcClient) == reflect.TypeOf(&cluster.NatsRPCClient{}) &&
		a.Session.UID() == "") {
		return constants.ErrNoUIDBind
	}
	switch d := v.(type) {
	case []byte:
		logger.Debugf("Type=Push, ID=%d, UID=%d, Route=%s, Data=%dbytes",
			a.Session.ID(), a.Session.UID(), route, len(d))
	default:
		logger.Debugf("Type=Push, ID=%d, UID=%s, Route=%s, Data=%+v",
			a.Session.ID(), a.Session.UID(), route, v)
	}

	sv, err := a.serviceDiscovery.GetServer(a.frontendID)
	if err != nil {
		return err
	}
	return a.sendPush(
		pendingMessage{typ: message.Push, route: route, payload: v},
		a.Session.UID(), sv,
	)
}

// ResponseMID reponds the message with mid to the user
func (a *Remote) ResponseMID(ctx context.Context, mid uint, v interface{}, isError ...bool) error {
	err := false
	if len(isError) > 0 {
		err = isError[0]
	}

	if mid <= 0 {
		return constants.ErrSessionOnNotify
	}

	switch d := v.(type) {
	case []byte:
		logger.Debugf("Type=Response, ID=%d, MID=%d, Data=%dbytes",
			a.Session.ID(), mid, len(d))
	default:
		logger.Infof("Type=Response, ID=%d, MID=%d, Data=%+v",
			a.Session.ID(), mid, v)
	}

	return a.send(pendingMessage{ctx: ctx, typ: message.Response, mid: mid, payload: v, err: err}, a.reply)
}

// Close closes the remote
func (a *Remote) Close() error { return nil }

// RemoteAddr returns the remote address of the user
func (a *Remote) RemoteAddr() net.Addr { return nil }

func (a *Remote) serialize(m pendingMessage) ([]byte, error) {
	payload, err := util.SerializeOrRaw(a.serializer, m.payload)
	if err != nil {
		return nil, err
	}

	// construct message and encode
	msg := &message.Message{
		Type:  m.typ,
		Data:  payload,
		Route: m.route,
		ID:    m.mid,
		Err:   m.err,
	}

	em, err := a.messageEncoder.Encode(msg)
	if err != nil {
		return nil, err
	}

	// packet encode
	p, err := a.encoder.Encode(packet.Data, em)
	if err != nil {
		return nil, err
	}

	return p, err
}

func (a *Remote) send(m pendingMessage, to string) (err error) {
	p, err := a.serialize(m)
	if err != nil {
		return err
	}
	res := &mcbeamproto.Response{
		Data: p,
	}
	bt, err := proto.Marshal(res)
	if err != nil {
		return err
	}
	return a.rpcClient.Send(to, bt)
}

func (a *Remote) sendPush(m pendingMessage, userID string, sv *cluster.Server) (err error) {
	payload, err := util.SerializeOrRaw(a.serializer, m.payload)
	if err != nil {
		return err
	}
	push := &mcbeamproto.Push{
		Route: m.route,
		Uid:   a.Session.UID(),
		Data:  payload,
	}
	return a.rpcClient.SendPush(userID, sv, push)
}

// SendRequest sends a request to a server
func (a *Remote) SendRequest(ctx context.Context, serverID, reqRoute string, v interface{}) (interface{}, error) {
	r, err := route.Decode(reqRoute)
	if err != nil {
		return nil, err
	}
	payload, err := util.SerializeOrRaw(a.serializer, v)
	if err != nil {
		return nil, err
	}
	msg := &message.Message{
		Route: reqRoute,
		Data:  payload,
	}
	server, err := a.serviceDiscovery.GetServer(serverID)
	if err != nil {
		return nil, err
	}
	return a.rpcClient.Call(ctx, mcbeamproto.RPCType_User, r, nil, msg, server)
}