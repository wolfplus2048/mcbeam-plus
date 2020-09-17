package gateway

import (
	"github.com/micro/go-micro/v2"
	"time"
)

type Options struct {
	ClientAddress string
	HeartbeatTime      time.Duration
	MessagesBufferSize int
	TSLCertificate     string
	TSLKey             string
	WSPath             string
	Service            micro.Service
}
type Option func(o *Options)

func NewOptions(opt ...Option) Options {
	opts := Options{
		HeartbeatTime:      DefaultHeartbeatTime,
		MessagesBufferSize: DefaultMessagesBufferSize,
		WSPath:             DefaultWSPath,
		ClientAddress:      DefaultClientAddress,
	}
	for _, o := range opt {
		o(&opts)
	}

	return opts
}

func WSPath(path string) Option {
	return func(o *Options) {
		o.WSPath = path
	}
}
func ClientAddress(c string) Option {
	return func(o *Options) {
		o.ClientAddress = c
	}
}
func Service(s micro.Service) Option {
	return func(o *Options) {
		o.Service = s
	}
}
