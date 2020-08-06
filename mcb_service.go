package mcbeam

import (
	"github.com/micro/go-micro/v2"
	"github.com/wolfplus2048/mcbeam-plus/mcb_server"
	mcbeamproto "github.com/wolfplus2048/mcbeam-plus/protos"
	"github.com/wolfplus2048/mcbeam-plus/tcp"
	"strings"
	"sync"
)

type mcbService struct {
	opts Options
	sync.RWMutex
	tcpServer *tcp.TcpServer
	remoteSrv *mcb_server.McbServer
	started   bool
	exit      chan bool
}

func newMcbService(opt ...Option) Service {
	options := NewOptions(opt...)
	t := &mcbService{
		opts:    options,
		started: false,
		exit:    make(chan bool),
	}
	t.tcpServer = tcp.NewTcpServer(t.exit)

	return t
}

func (t *mcbService) Register(name string, handler Component) {
	t.remoteSrv = mcb_server.NewMcbServer(handler,
		mcb_server.WithName(name),
		mcb_server.WithNameFunc(strings.ToLower),
		mcb_server.Serializer(t.opts.Serializer))
}
func (t *mcbService) Module(name string, module Module) {
	panic("implement me")
}
func (t *mcbService) Run() error {

	if err := t.start(); err != nil {
		return err
	}
	if err := t.opts.Service.Run(); err != nil {
		return err
	}

	return t.stop()
}

func (t *mcbService) Init(opts ...Option) error {
	t.Lock()
	defer t.Unlock()

	for _, o := range opts {
		o(&t.opts)
	}
	var serverOpts []tcp.Option
	if len(t.opts.WSPath) > 0 {
		serverOpts = append(serverOpts, tcp.WSPath(t.opts.WSPath))
	}
	if len(t.opts.ClientAddress) > 0 {
		serverOpts = append(serverOpts, tcp.ClientAddress(t.opts.ClientAddress))
	}
	if len(t.opts.Acceptors) > 0 {
		for _, a := range t.opts.Acceptors {
			serverOpts = append(serverOpts, tcp.Acceptor(a))
		}
	}
	if t.opts.Service != nil {
		serverOpts = append(serverOpts, tcp.Service(t.opts.Service))
	}
	t.tcpServer.Init(serverOpts...)

	var serviceOpts []micro.Option
	if len(t.opts.Name) > 0 {
		serviceOpts = append(serviceOpts, micro.Name(t.opts.Name))
	}
	t.opts.Service.Init(serviceOpts...)
	return nil
}

func (t *mcbService) Options() Options {
	return t.opts
}

func (t *mcbService) start() error {
	t.Lock()
	defer t.Unlock()
	if t.started {
		return nil
	}
	t.tcpServer.Start()
	mcbeamproto.RegisterMcbeamHandler(t.opts.Service.Server(), t.remoteSrv)
	t.started = true

	return nil
}

func (t *mcbService) stop() error {
	t.Lock()
	defer t.Unlock()

	if !t.started {
		return nil
	}

	close(t.exit)
	t.started = false

	return nil
}
