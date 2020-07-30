package mcbeam

import (
	"github.com/micro/go-micro/v2"
	"github.com/wolfplus2048/mcbeam-plus/acceptor"
	"github.com/wolfplus2048/mcbeam-plus/handler"
	mcbeamproto "github.com/wolfplus2048/mcbeam-plus/protos"
	"sync"
)

type tcpServer struct {
	opts Options
	sync.RWMutex

	handler *tcpHandler
	started bool
	exit    chan struct{}
}

func newTcpService(opt ...Option) Service {
	options := newOptions(opt...)
	t := &tcpServer{
		opts:    options,
		started: false,
		exit:    make(chan struct{}),
	}
	t.handler = newTcpHandler(t.exit, options)
	return t
}

func (t *tcpServer) Handler(name string, handler interface{}) {
	panic("implement me")
}

func (t *tcpServer) Run() error {
	if err := t.start(); err != nil {
		return err
	}
	if err := t.opts.Service.Run(); err != nil {
		return err
	}
	return t.stop()
}

func (t *tcpServer) Init(opts ...Option) error {
	t.Lock()
	defer t.Unlock()

	for _, o := range opts {
		o(&t.opts)
	}
	var serviceOpts []micro.Option
	if len(t.opts.Name) > 0 {
		serviceOpts = append(serviceOpts, micro.Name(t.opts.Name))
	}
	if len(t.opts.Acceptors) < 1 {
		t.opts.Acceptors = append(t.opts.Acceptors, acceptor.NewWSAcceptor(acceptor.Address(t.opts.ClientAddress)))
	}
	t.opts.Service.Init(serviceOpts...)
	return nil
}

func (t *tcpServer) Options() Options {
	return t.opts
}

func (t *tcpServer) start() error {
	t.Lock()
	defer t.Unlock()
	if t.started {
		return nil
	}
	mcbeamproto.RegisterMcbeamHandler(t.opts.Service.Server(), &handler.McbeamHandler{})
	t.listenAndServe()
	t.started = true

	return nil
}

func (t *tcpServer) stop() error {
	t.Lock()
	defer t.Unlock()

	if !t.started {
		return nil
	}

	close(t.exit)
	t.started = false

	return nil
}

// Enable current server accept connection
func (t *tcpServer) listenAndServe() {
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
