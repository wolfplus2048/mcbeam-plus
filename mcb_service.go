package mcbeam

import (
	"github.com/micro/go-micro/v2"
	"github.com/wolfplus2048/mcbeam-plus/component"
	"github.com/wolfplus2048/mcbeam-plus/gateway"
	"github.com/wolfplus2048/mcbeam-plus/mcb_server"
	mcbeamproto "github.com/wolfplus2048/mcbeam-plus/protos"
	"github.com/wolfplus2048/mcbeam-plus/serialize/protobuf"
	"github.com/wolfplus2048/mcbeam-plus/sys_server"
	"sync"
)

type mcbService struct {
	opts Options
	sync.RWMutex
	remoteSrv *mcb_server.McbServer
	started   bool
	handlers  []component.Component
	modules   []Module
}

func newMcbService(opt ...Option) Service {
	options := newOptions(opt...)
	t := &mcbService{
		opts:     options,
		started:  false,
		handlers: make([]component.Component, 0),
		modules:  make([]Module, 0),
	}
	t.remoteSrv = mcb_server.NewMcbServer(
		mcb_server.WithName(t.opts.Name),
		mcb_server.Serializer(protobuf.NewSerializer()),
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

	var serviceOpts []micro.Option
	if len(t.opts.Name) > 0 {
		serviceOpts = append(serviceOpts, micro.Name(t.opts.Name))
	}
	if t.opts.Registry != nil {
		serviceOpts = append(serviceOpts, micro.Registry(t.opts.Registry))
	}
	if t.opts.Metadata != nil {
		serviceOpts = append(serviceOpts, micro.Metadata(t.opts.Metadata))
	}

	t.opts.Service.Init(serviceOpts...)

	var gateOpts []gateway.Option
	if len(t.opts.ClientAddress) > 0 {
		gateOpts = append(gateOpts, gateway.ClientAddress(t.opts.ClientAddress))
		if t.opts.Gateway == nil {
			t.opts.Gateway = gateway.NewTcpGateway()
		}
	}

	if t.opts.Gateway != nil {
		gateOpts = append(gateOpts, gateway.Service(t.opts.Service))
		t.opts.Gateway.Init(gateOpts...)

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

	for _, v := range t.modules {
		err := v.Init()
		if err != nil {
			return err
		}
	}

	if t.opts.Gateway != nil {
		t.opts.Gateway.Start()
	}
	if t.opts.Scheduler != nil {
		t.opts.Scheduler.Start()
	}
	t.started = true

	for _, v := range t.modules {
		v.AfterInit()
	}

	for _, v := range t.handlers {
		v.AfterInit()
	}
	return nil
}

func (t *mcbService) stop() error {
	t.Lock()
	defer t.Unlock()

	if !t.started {
		return nil
	}

	for _, v := range t.handlers {
		v.BeforeShutdown()
	}
	for _, v := range t.modules {
		v.BeforeShutdown()
	}

	if t.opts.Gateway != nil {
		t.opts.Gateway.Stop()
	}
	if t.opts.Scheduler != nil {
		t.opts.Scheduler.Stop()
	}
	t.started = false

	for _, v := range t.modules {
		err := v.Shutdown()
		if err != nil {
			return err
		}
	}

	for _, v := range t.handlers {
		v.Shutdown()
	}

	return nil
}
