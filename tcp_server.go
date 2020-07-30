package mcbeam

import (
	"fmt"
	"github.com/micro/cli/v2"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/registry"
	maddr "github.com/micro/go-micro/v2/util/addr"
	authutil "github.com/micro/go-micro/v2/util/auth"
	signalutil "github.com/micro/go-micro/v2/util/signal"

	"github.com/micro/go-micro/v2/util/backoff"
	"os"
	"os/signal"

	"net"
	"strings"
	"sync"
	"time"
)

type tcpServer struct {
	opts Options
	sync.RWMutex
	srv *registry.Service

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
	t.srv = t.genSrv()
	t.handler = newTcpHandler(t.exit, options)
	return t
}
func (t *tcpServer) genSrv() *registry.Service  {
	var host string
	var port string
	var err error
	if len(t.opts.Address) > 0 {
		host, port, err = net.SplitHostPort(t.opts.Address)
		if err != nil {
			logger.Fatal(err)
		}
	}
	if len(t.opts.Advertise) > 0 {
		host, port, err = net.SplitHostPort(t.opts.Advertise)
		if err != nil {
			logger.Fatal(err)
		}
	}
	addr, err := maddr.Extract(host)
	if err != nil {
		logger.Fatal(err)
	}
	if strings.Count(addr, ":") >0 {
		addr = "[" + addr + "]"
	}
	return &registry.Service{
		Name:      t.opts.Name,
		Version:   t.opts.Version,
		Metadata:  nil,
		Endpoints: nil,
		Nodes:     []*registry.Node{
			{
				Id: t.opts.Id,
				Address: fmt.Sprintf("%s:%s", addr, port),
				Metadata: t.opts.Metadata,
			},
		},
	}

}
func (t *tcpServer) run(exit chan struct{})  {
	t.RLock()
	if t.opts.RegisterInterval <= time.Duration(0) {
		t.RUnlock()
		return
	}
	ticker := time.NewTicker(t.opts.RegisterInterval)
	t.RUnlock()
	for {
		select {
		case <-ticker.C:
			t.register()
		case <-exit:
			ticker.Stop()
			return
		}
	}

}
func (t *tcpServer) register() error {
	t.Lock()
	defer t.Unlock()

	if t.srv == nil {
		return nil
	}
	r := t.opts.Service.Client().Options().Registry
	if t.opts.Registry != nil {
		r = t.opts.Registry
	}
	srv := t.srv
	srv.Endpoints = t.srv.Endpoints
	t.srv = srv

	if err := t.opts.RegisterCheck(t.opts.Context); err != nil {
		logger.Errorf("Server %s-%s register check error: %s", t.opts.Name, t.opts.Id, err)
		return err
	}
	var regErr error

	for i := 0; i < 3; i++ {
		if err := r.Register(t.srv, registry.RegisterTTL(t.opts.RegisterTTL)); err != nil {
			regErr = err
			time.Sleep(backoff.Do(i + 1))
			continue
		}
		regErr = nil
		break
	}
	return regErr
}
func (t *tcpServer) deregister() error {
	t.Lock()
	defer t.Unlock()
	if t.srv == nil {
		return nil
	}
	r := t.opts.Service.Client().Options().Registry
	if t.opts.Registry != nil {
		r = t.opts.Registry
	}
	return r.Deregister(t.srv)
}
func (t *tcpServer) Handler(name string, handler interface{}) {
	panic("implement me")
}

func (t *tcpServer) Run() error {
	srvID := t.opts.Service.Server().Options().Id
	srvName := t.Options().Name
	if err := authutil.Generate(srvID, srvName, t.opts.Service.Options().Auth); err != nil {
		return err
	}
	if err := t.start(); err != nil {
		return err
	}
	if err := t.register(); err != nil {
		return err
	}
	ex := make(chan struct{})
	go t.run(ex)
	ch := make(chan os.Signal, 1)
	if t.opts.Signal {
		signal.Notify(ch, signalutil.Shutdown()...)
	}
	select {
	case sig := <- ch:
		logger.Infof("Received signal %s", sig)
		case <- t.opts.Context.Done():
			logger.Infof("Received context shutdown")
	}
	close(ex)
	if err := t.deregister(); err != nil {
		return err
	}
	return t.stop()
}


func (t *tcpServer) Init(opts ...Option) error {
	t.Lock()

	for _, o := range opts {
		o(&t.opts)
	}

	serviceOpts := []micro.Option{}

	if len(t.opts.Flags) > 0 {
		serviceOpts = append(serviceOpts, micro.Flags(t.opts.Flags...))
	}

	if t.opts.Registry != nil {
		serviceOpts = append(serviceOpts, micro.Registry(t.opts.Registry))
	}

	t.Unlock()

	serviceOpts = append(serviceOpts, micro.Action(func(ctx *cli.Context) error {
		t.Lock()
		defer t.Unlock()

		if ttl := ctx.Int("register_ttl"); ttl > 0 {
			t.opts.RegisterTTL = time.Duration(ttl) * time.Second
		}

		if interval := ctx.Int("register_interval"); interval > 0 {
			t.opts.RegisterInterval = time.Duration(interval) * time.Second
		}

		if name := ctx.String("server_name"); len(name) > 0 {
			t.opts.Name = name
		}

		if ver := ctx.String("server_version"); len(ver) > 0 {
			t.opts.Version = ver
		}

		if id := ctx.String("server_id"); len(id) > 0 {
			t.opts.Id = id
		}

		if addr := ctx.String("server_address"); len(addr) > 0 {
			t.opts.Address = addr
		}

		if adv := ctx.String("server_advertise"); len(adv) > 0 {
			t.opts.Advertise = adv
		}

		if t.opts.Action != nil {
			t.opts.Action(ctx)
		}

		return nil
	}))

	t.RLock()
	// pass in own name and version
	if t.opts.Service.Name() == "" {
		serviceOpts = append(serviceOpts, micro.Name(t.opts.Name))
	}
	serviceOpts = append(serviceOpts, micro.Version(t.opts.Version))
	t.RUnlock()

	t.opts.Service.Init(serviceOpts...)

	t.Lock()
	srv := t.genSrv()
	srv.Endpoints = t.srv.Endpoints
	t.srv = srv
	t.Unlock()

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
	for _, fn := range t.opts.BeforeStart {
		if err := fn(); err != nil {
			return err
		}
	}
	t.listenAndServe()
	//if len(t.opts.acceptors) > 0 {
	//	t.opts.Address = t.opts.acceptors[0].GetAddr()
	//}
	srv := t.genSrv()
	srv.Endpoints = t.srv.Endpoints
	t.srv = srv


	for _, fn := range t.opts.AfterStart {
		if err := fn(); err != nil {
			return err
		}
	}
	t.started = true
	//t.opts.Service.Run()

	return nil
}

func (t *tcpServer) stop() error {
	t.Lock()
	defer t.Unlock()

	if !t.started {
		return nil
	}
	for _, fn := range t.opts.BeforeStop {
		if err := fn(); err != nil {
			return err
		}
	}
	close(t.exit)
	t.started = false
	for _, fn := range t.opts.AfterStop {
		if err := fn(); err != nil {
			return err
		}
	}
	return nil
}


// Enable current server accept connection
func (t *tcpServer) listenAndServe() {
	for _, acc := range t.opts.acceptors {
		go func() {
			for conn := range acc.GetConnChan() {
				go t.handler.Handle(conn)
			}
		}()

		go func() {
			acc.ListenAndServe()
		}()
		go func() {
			<- t.exit
			acc.Stop()
		}()
	}
}