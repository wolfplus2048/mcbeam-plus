package component

import (
	"github.com/micro/go-micro/v2/client"
	"github.com/wolfplus2048/mcbeam-plus/serialize"
)

type Options struct {
	name       string
	serializer serialize.Serializer
	rpcClient  client.Client
}
type HandlerOptions struct {
	name     string
	nameFunc func(string) string
}
type Option func(options *Options)
type HandlerOption func(options *HandlerOptions)

func RpcClient(appClient client.Client) Option {
	return func(o *Options) {
		o.rpcClient = appClient
	}
}
func WithName(name string) Option {
	return func(o *Options) {
		o.name = name
	}
}
func Serializer(s serialize.Serializer) Option {
	return func(o *Options) {
		o.serializer = s
	}
}
func WithHandlerName(name string) HandlerOption {
	return func(o *HandlerOptions) {
		o.name = name
	}
}
func WithNameFunc(fn func(string) string) HandlerOption {
	return func(o *HandlerOptions) {
		o.nameFunc = fn
	}
}
