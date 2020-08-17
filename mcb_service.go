package mcbeam

import (
	"github.com/micro/go-micro/v2"
	"github.com/wolfplus2048/mcbeam-plus/api"
	"github.com/wolfplus2048/mcbeam-plus/component"
	"github.com/wolfplus2048/mcbeam-plus/gate_server"
	mcbeamproto "github.com/wolfplus2048/mcbeam-plus/protos"
	"sync"
)

type mcbService struct {
	opts Options
	sync.RWMutex
	tcpServer api.Server
	remoteSrv *component.McbServer
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
	t.tcpServer = api.NewTcpServer(t.exit)
	t.remoteSrv = component.NewMcbServer(
		component.WithName(t.opts.Name),
		component.Serializer(t.opts.Serializer),
		component.RpcClient(t.opts.Service.Client()),
	)

	return t
}

func (t *mcbService) Register(handler component.Component, opts ...component.HandlerOption) {
	t.remoteSrv.Handle(handler, opts...)
}
func (t *mcbService) Module(module Module) {
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
	var serverOpts []api.Option
	if len(t.opts.WSPath) > 0 {
		serverOpts = append(serverOpts, api.WSPath(t.opts.WSPath))
	}
	if len(t.opts.ClientAddress) > 0 {
		serverOpts = append(serverOpts, api.ClientAddress(t.opts.ClientAddress))
	}
	if len(t.opts.Acceptors) > 0 {
		for _, a := range t.opts.Acceptors {
			serverOpts = append(serverOpts, api.Acceptor(a))
		}
	}
	if t.opts.Service != nil {
		serverOpts = append(serverOpts, api.Service(t.opts.Service))
	}
	serverOpts = append(serverOpts, api.Client(t.opts.Service.Client()))

	t.tcpServer.Init(serverOpts...)

	var serviceOpts []micro.Option
	if len(t.opts.Name) > 0 {
		serviceOpts = append(serviceOpts, micro.Name(t.opts.Name))
	}
	if t.opts.Registry != nil {
		serviceOpts = append(serviceOpts, micro.Registry(t.opts.Registry))
	}
	t.opts.Service.Init(serviceOpts...)

	if len(t.opts.Acceptors) > 0 {
		mcbeamproto.RegisterMcbGateHandler(t.opts.Service.Server(), &gate_server.Server{})
	}
	mcbeamproto.RegisterMcbAppHandler(t.opts.Service.Server(), t.remoteSrv)

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
