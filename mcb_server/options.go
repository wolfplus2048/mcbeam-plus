package mcb_server

import (
	mcbeamproto "github.com/wolfplus2048/mcbeam-plus/protos"
	"github.com/wolfplus2048/mcbeam-plus/serialize"
)

type Options struct {
	name       string
	nameFunc   func(string) string
	serializer serialize.Serializer
	rpcClient  mcbeamproto.McbGateService
}
type Option func(options *Options)

func RpcClient(appClient mcbeamproto.McbGateService) Option {
	return func(o *Options) {
		o.rpcClient = appClient
	}
}
func WithName(name string) Option {
	return func(o *Options) {
		o.name = name
	}
}
func WithNameFunc(fn func(string) string) Option {
	return func(o *Options) {
		o.nameFunc = fn
	}
}
func Serializer(s serialize.Serializer) Option {
	return func(o *Options) {
		o.serializer = s
	}
}
