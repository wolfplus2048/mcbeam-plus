package mcbeam

import (
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/server"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"github.com/wolfplus2048/mcbeam-plus/component"
	"github.com/wolfplus2048/mcbeam-plus/mcb_server/grpc"
	"github.com/wolfplus2048/mcbeam-plus/wrapper"
	"github.com/micro/go-plugins/wrapper/monitoring/prometheus/v2"
	"net/http"

	"sync"
)

func init() {
	server.DefaultServer = grpc.NewServer()
	logger.Init(logger.WithLevel(logger.DebugLevel))
}

type mcbService struct {
	opts Options
	sync.RWMutex
	started  bool
	handlers []component.Component
	modules  []Module
}

func newMcbService(opt ...Option) Service {
	options := newOptions(opt...)
	t := &mcbService{
		opts:     options,
		started:  false,
		handlers: make([]component.Component, 0),
		modules:  make([]Module, 0),
	}

	return t
}

func (t *mcbService) Register(handler component.Component, opts ...server.HandlerOption) {
	//t.opts.McbAppHandler.Handle(handler, opts...)
	s := t.opts.Service.Server()
	s.Handle(s.NewHandler(handler, opts...))
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
	var srvOpt []micro.Option
	if len(t.opts.Name) > 0 {
		srvOpt = append(srvOpt, micro.Name(t.opts.Name))
	}
	if len(t.opts.Version) > 0 {
		srvOpt = append(srvOpt, micro.Version(t.opts.Version))
	} else {
		srvOpt = append(srvOpt, micro.Version(buildVersion()))
	}
	if t.opts.Registry != nil {
		srvOpt = append(srvOpt, micro.Registry(t.opts.Registry))
	}
	if t.opts.Broker != nil {
		srvOpt = append(srvOpt, micro.Broker(t.opts.Broker))
	}
	if t.opts.Store != nil {
		srvOpt = append(srvOpt, micro.Store(t.opts.Store))
	}
	srvOpt = append(srvOpt, micro.WrapHandler(wrapper.SessionHandler(t.opts.Service.Client())))
	srvOpt = append(srvOpt, micro.WrapHandler(
		prometheus.NewHandlerWrapper(
			prometheus.ServiceName(t.opts.Name),
			prometheus.ServiceVersion(t.opts.Version)),
		),
	)
	srvOpt = append(srvOpt, micro.WrapSubscriber(
		prometheus.NewSubscriberWrapper(
			prometheus.ServiceName(t.opts.Name),
			prometheus.ServiceVersion(t.opts.Version)),
		),
	)
	t.opts.Service.Init(srvOpt...)

	//t.opts.McbAppHandler.Init(
	//	mcb_handler.RpcClient(t.opts.Service.Client()),
	//	mcb_handler.Serializer(protobuf.NewSerializer()))

	//proto_mcbeam.RegisterMcbAppHandler(t.opts.Service.Server(), t.opts.McbAppHandler)
	return nil
}

func (t *mcbService) Options() Options {
	return t.opts
}
func (t *mcbService) Client() client.Client {
	return t.opts.Service.Client()
}
func (t *mcbService) Server() server.Server {
	return t.opts.Service.Server()
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

	//if t.opts.Gateway != nil {
	//	t.opts.Gateway.Start()
	//}
	if t.opts.Scheduler != nil {
		t.opts.Scheduler.Start()
	}

	prometheusBoot()
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

	//if t.opts.Gateway != nil {
	//	t.opts.Gateway.Stop()
	//}
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

func prometheusBoot() {
	http.Handle("/metrics", promhttp.Handler())
	go func() {
		err := http.ListenAndServe(":9913", nil)
		if err != nil {
			logger.Fatal(err)
		}
	}()
	logger.Debugf("Metrics [Prometheus] Listening on [::]:%d", 9913)

}