package mcb_server

import "github.com/wolfplus2048/mcbeam-plus/serialize"

type Options struct {
	name       string
	nameFunc   func(string) string
	serializer serialize.Serializer
}
type Option func(options *Options)

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
