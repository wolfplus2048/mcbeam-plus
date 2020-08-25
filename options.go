package mcbeam

import (
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/registry"
	"github.com/wolfplus2048/mcbeam-plus/gateway"
	"github.com/wolfplus2048/mcbeam-plus/scheduler"
)

type Options struct {
	Name          string
	ClientAddress string
	Handler       interface{}
	Service       micro.Service
	Registry      registry.Registry
	Gateway       gateway.Gateway
	Scheduler     scheduler.Scheduler
	Metadata      map[string]string
}
type Option func(o *Options)

func newOptions(opt ...Option) Options {
	opts := Options{
		Service:   micro.NewService(),
		Scheduler: scheduler.Default,
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
func Gateway(g gateway.Gateway) Option {
	return func(o *Options) {
		o.Gateway = g
	}
}
func Scheduler(s scheduler.Scheduler) Option {
	return func(o *Options) {
		o.Scheduler = s
	}
}
func ClientAddress(c string) Option {
	return func(o *Options) {
		o.ClientAddress = c
	}
}
func Registry(r registry.Registry) Option {
	return func(o *Options) {
		o.Registry = r
	}
}

func MicroService(s micro.Service) Option {
	return func(o *Options) {
		o.Service = s
	}
}

// Metadata associated with the service
func Metadata(md map[string]string) Option {
	return func(o *Options) {
		o.Metadata = md
	}
}
