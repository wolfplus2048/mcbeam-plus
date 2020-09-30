package mcbeam

import (
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/broker"
	"github.com/micro/go-micro/v2/registry"
	"github.com/micro/go-micro/v2/server"
	"github.com/micro/go-micro/v2/store"
	"github.com/wolfplus2048/mcbeam-plus/mcb_handler"
	"github.com/wolfplus2048/mcbeam-plus/scheduler"
)

type Options struct {
	Name          string
	Handler       interface{}
	Service       micro.Service
	Registry      registry.Registry
	Broker        broker.Broker
	Store         store.Store
	Scheduler     scheduler.Scheduler
	McbAppHandler mcb_handler.McbAppHandler
}
type Option func(o *Options)

func newOptions(opt ...Option) Options {
	opts := Options{
		Service:       micro.NewService(),
		Scheduler:     scheduler.Default,
		McbAppHandler: mcb_handler.NewMcbServer(),
	}
	for _, o := range opt {
		o(&opts)
	}

	return opts
}
func Name(name string) Option {
	return func(o *Options) {
		o.Name = name
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

// WrapSubscriber adds a subscriber Wrapper to a list of options passed into the mcb_server
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

// WrapHandler adds a handler Wrapper to a list of options passed into the mcb_server
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
