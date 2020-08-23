package mcbeam

import (
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/registry"
	"github.com/wolfplus2048/mcbeam-plus/gateway"
)

type Options struct {
	Name          string
	ClientAddress string
	Handler       interface{}
	Service       micro.Service
	Registry      registry.Registry
	Gateway          gateway.Gateway
	Metadata map[string]string
}
type Option func(o *Options)

func newOptions(opt ...Option) Options {
	opts := Options{
		Service:            micro.NewService(),
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