package gateway

import (
	"github.com/wolfplus2048/mcbeam-plus/acceptor"
	"github.com/wolfplus2048/mcbeam-plus/session"
	"sync"
	"time"
)

type tcpGateway struct {
	opts Options
	sync.RWMutex

	handler *tcpHandler
	started bool
}

func NewTcpGateway(opt ...Option) Gateway {
	opts := newOptions(opt...)
	t := &tcpGateway{
		opts:    opts,
		started: false,
	}
	return t
}

func (t *tcpGateway) Init(opt ...Option) error {
	t.Lock()
	defer t.Unlock()
	for _, o := range opt {
		o(&t.opts)
	}
	if len(t.opts.ClientAddress) > 0 {
		t.opts.Acceptors = append(t.opts.Acceptors, acceptor.NewWSAcceptor(acceptor.Address(t.opts.ClientAddress)))
	}
	t.handler = newTcpHandler(t.opts)

	return nil
}

func (t *tcpGateway) Options() Options {
	return t.opts
}

func (t *tcpGateway) Start() error {
	t.Lock()
	defer t.Unlock()
	if t.started {
		return nil
	}
	t.listenAndServe()
	t.started = true

	return nil
}

func (t *tcpGateway) Stop() error {
	t.Lock()
	defer t.Unlock()

	if !t.started {
		return nil
	}
	for _, acc := range t.opts.Acceptors {
		acc.Stop()
	}
	session.CloseAll()

	t.started = false

	return nil
}
func (t *tcpGateway) String() string {
	return "tcpGateway"
}
// Enable current tcp accept connection
func (t *tcpGateway) listenAndServe() {
	for _, acc := range t.opts.Acceptors {
		go func() {
			for conn := range acc.GetConnChan() {
				go t.handler.Handle(conn)
			}
		}()

		go func() {
			acc.ListenAndServe()
		}()
	}
}

var (
	// for serving
	DefaultHeartbeatTime      time.Duration = time.Second * 5
	DefaultMessagesBufferSize int           = 100
	DefaultClientAddress                    = ":3250"
	DefaultWSPath             string        = "/ws"
)
