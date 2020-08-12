package mcbeam

import (
	"github.com/micro/go-micro/v2"
	"github.com/wolfplus2048/mcbeam-plus/api"
	"github.com/wolfplus2048/mcbeam-plus/gate_server"
	"github.com/wolfplus2048/mcbeam-plus/mcb_server"
	mcbeamproto "github.com/wolfplus2048/mcbeam-plus/protos"
	"strings"
	"sync"
)

type mcbService struct {
	opts Options
	sync.RWMutex
	tcpServer api.Server
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
	return t
}

func (t *mcbService) Register(name string, handler Component) {
	client := mcbeamproto.NewMcbGateService(name, t.opts.Service.Client())
	srv := mcb_server.NewMcbServer(handler,
		mcb_server.WithName(name),
		mcb_server.WithNameFunc(strings.ToLower),
		mcb_server.Serializer(t.opts.Serializer),
		mcb_server.RpcClient(client),
	)
	mcbeamproto.RegisterMcbAppHandler(t.opts.Service.Server(), srv)

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
	client := mcbeamproto.NewMcbAppService("gate", t.opts.Service.Client())
	serverOpts = append(serverOpts, api.Client(client))

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
