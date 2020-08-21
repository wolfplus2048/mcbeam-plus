package mcbeam

import (
	"github.com/micro/go-micro/v2"
	"github.com/wolfplus2048/mcbeam-plus/api"
	"github.com/wolfplus2048/mcbeam-plus/component"
	"github.com/wolfplus2048/mcbeam-plus/mcb_server"
	mcbeamproto "github.com/wolfplus2048/mcbeam-plus/protos"
	"github.com/wolfplus2048/mcbeam-plus/sys_server"
	"sync"
)

type mcbService struct {
	opts Options
	sync.RWMutex
	tcpServer api.Server
	remoteSrv *mcb_server.McbServer
	started   bool
	exit      chan bool
	handlers  []component.Component
	modules   []Module
}

func newMcbService(opt ...Option) Service {
	options := NewOptions(opt...)
	t := &mcbService{
		opts:     options,
		started:  false,
		exit:     make(chan bool),
		handlers: make([]component.Component, 0),
		modules:  make([]Module, 0),
	}
	t.tcpServer = api.NewTcpServer(t.exit)
	t.remoteSrv = mcb_server.NewMcbServer(
		mcb_server.WithName(t.opts.Name),
		mcb_server.Serializer(t.opts.Serializer),
		mcb_server.RpcClient(t.opts.Service.Client()),
	)

	return t
}

func (t *mcbService) Register(handler component.Component, opts ...component.HandlerOption) {
	t.remoteSrv.Handle(handler, opts...)
	t.handlers = append(t.handlers, handler)
}
func (t *mcbService) Module(module Module) {
	t.modules = append(t.modules, module)
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
		mcbeamproto.RegisterMcbGateHandler(t.opts.Service.Server(), &sys_server.Server{})
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
	for _, v := range t.handlers {
		v.Init()
	}
	for _, v := range t.handlers {
		v.AfterInit()
	}

	for _, v := range t.modules {
		err := v.Init()
		if err != nil {
			return err
		}
	}
	for _, v := range t.modules {
		v.AfterInit()
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

	for _, v := range t.handlers {
		v.BeforeShutdown()
	}
	for _, v := range t.handlers {
		v.Shutdown()
	}

	for _, v := range t.modules {
		v.BeforeShutdown()
	}
	for _, v := range t.modules {
		err := v.Shutdown()
		if err != nil {
			return err
		}
	}

	return nil
}
