package tcp

import (
	"sync"
	"time"
)

type TcpServer struct {
	opts Options
	sync.RWMutex

	handler *tcpHandler
	started bool
	exit    chan bool
}

func NewTcpServer(exit chan bool, opt ...Option) *TcpServer {
	opts := newOptions(opt...)
	t := &TcpServer{
		opts:    opts,
		started: false,
		exit:    exit,
	}
	return t
}

func (t *TcpServer) Init(opt ...Option) error {
	t.Lock()
	defer t.Unlock()
	for _, o := range opt {
		o(&t.opts)
	}

	t.handler = newTcpHandler(t.exit, t.opts)

	return nil
}

func (t *TcpServer) Options() Options {
	return t.opts
}

func (t *TcpServer) Start() error {
	t.Lock()
	defer t.Unlock()
	if t.started {
		return nil
	}
	t.listenAndServe()
	t.started = true

	return nil
}

func (t *TcpServer) Stop() error {
	t.Lock()
	defer t.Unlock()

	if !t.started {
		return nil
	}

	t.started = false

	return nil
}

// Enable current tcp accept connection
func (t *TcpServer) listenAndServe() {
	for _, acc := range t.opts.Acceptors {
		go func() {
			for conn := range acc.GetConnChan() {
				go t.handler.Handle(conn)
			}
		}()

		go func() {
			acc.ListenAndServe()
		}()
		go func() {
			<-t.exit
			acc.Stop()
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
