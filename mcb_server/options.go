package mcb_server

import (
	"context"
	"github.com/micro/go-micro/v2/client"
	"github.com/wolfplus2048/mcbeam-plus/serialize"
)

type Options struct {
	name       string
	serializer serialize.Serializer
	rpcClient  client.Client
	HdlrWrappers []HandlerWrapper

}
type HandlerFunc func(context.Context, interface{}) error
type HandlerWrapper func(HandlerFunc) HandlerFunc

type Option func(options *Options)

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
func WrapHandler(w HandlerWrapper) Option {
	return func(o *Options) {
		o.HdlrWrappers = append(o.HdlrWrappers, w)
	}
}