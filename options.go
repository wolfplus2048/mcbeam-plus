package mcbeam

import (
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/broker"
	"github.com/micro/go-micro/v2/client"
	"github.com/micro/go-micro/v2/registry"
	"github.com/micro/go-micro/v2/server"
	"github.com/micro/go-micro/v2/store"
	"github.com/wolfplus2048/mcbeam-plus/mcb_handler"
	"github.com/wolfplus2048/mcbeam-plus/scheduler"
)

type Options struct {
	Name          string
	Version       string
	Service       micro.Service
	Registry      registry.Registry
	Broker        broker.Broker
	Store         store.Store
	Scheduler     scheduler.Scheduler
	McbAppHandler mcb_handler.McbAppHandler
	Concurrency   bool
}
type Option func(o *Options)

func newOptions(opt ...Option) Options {
	opts := Options{
		Service:     micro.NewService(),
		Scheduler:   scheduler.Default,
		Concurrency: false,
	}
	for _, o := range opt {
		o(&opts)
	}

	return opts
}

// Name of the service
func Name(n string) Option {
	return func(o *Options) {
		o.Name = n
	}
}

// Version of the service
func Version(v string) Option {
	return func(o *Options) {
		o.Version = v
	}
}

// Metadata associated with the service
func Metadata(md map[string]string) Option {
	return func(o *Options) {
		o.Service.Server().Init(server.Metadata(md))
	}
}
func Registry(r registry.Registry) Option {
	return func(o *Options) {
		o.Registry = r
	}
}
func Broker(b broker.Broker) Option {
	return func(o *Options) {
		o.Broker = b
	}
}
func Concurrency(b bool) Option {
	return func(o *Options) {
		o.Concurrency = b
	}
}
func Store(s store.Store) Option {
	return func(o *Options) {
		o.Store = s
	}
}
func Scheduler(s scheduler.Scheduler) Option {
	return func(o *Options) {
		o.Scheduler = s
	}
}

func MicroService(s micro.Service) Option {
	return func(o *Options) {
		o.Service = s
	}
}

// WrapClient is a convenience method for wrapping a Client with
// some middleware component. A list of wrappers can be provided.
// Wrappers are applied in reverse order so the last is executed first.
func WrapClient(w ...client.Wrapper) Option {
	return func(o *Options) {
		// apply in reverse
		for i := len(w); i > 0; i-- {
			c := o.Service.Client()
			c = w[i-1](c)
			o.Service.Init(micro.Client(c))
		}
	}
}

// WrapCall is a convenience method for wrapping a Client CallFunc
func WrapCall(w ...client.CallWrapper) Option {
	return func(o *Options) {
		o.Service.Client().Init(client.WrapCall(w...))
	}
}

// WrapHandler adds a handler Wrapper to a list of options passed into the server
func WrapHandler(w ...server.HandlerWrapper) Option {
	return func(o *Options) {
		var wrappers []server.Option

		for _, wrap := range w {
			wrappers = append(wrappers, server.WrapHandler(wrap))
		}

		// Init once
		o.Service.Server().Init(wrappers...)
	}
}

// WrapSubscriber adds a subscriber Wrapper to a list of options passed into the server
func WrapSubscriber(w ...server.SubscriberWrapper) Option {
	return func(o *Options) {
		var wrappers []server.Option

		for _, wrap := range w {
			wrappers = append(wrappers, server.WrapSubscriber(wrap))
		}

		// Init once
		o.Service.Server().Init(wrappers...)
	}
}
