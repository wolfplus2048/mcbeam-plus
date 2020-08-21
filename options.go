package mcbeam

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/registry"
	"github.com/wolfplus2048/mcbeam-plus/acceptor"
	"github.com/wolfplus2048/mcbeam-plus/conn/codec"
	"github.com/wolfplus2048/mcbeam-plus/conn/message"
	"github.com/wolfplus2048/mcbeam-plus/serialize"
	"github.com/wolfplus2048/mcbeam-plus/serialize/protobuf"
	"time"
)

type Options struct {
	Name          string
	ClientAddress string
	Handler       interface{}
	Service       micro.Service
	Registry      registry.Registry

	// Alternative Options
	Context context.Context

	PacketDecoder      codec.PacketDecoder
	PacketEncoder      codec.PacketEncoder
	MessageEncoder     message.Encoder
	Serializer         serialize.Serializer
	HeartbeatTime      time.Duration
	MessagesBufferSize int
	TSLCertificate     string
	TSLKey             string
	WSPath             string
	Acceptors          []acceptor.Acceptor
}
type Option func(o *Options)

func NewOptions(opt ...Option) Options {
	opts := Options{
		Context:            context.TODO(),
		PacketDecoder:      codec.NewPomeloPacketDecoder(),
		PacketEncoder:      codec.NewPomeloPacketEncoder(),
		MessageEncoder:     message.NewMessagesEncoder(false),
		Serializer:         protobuf.NewSerializer(),
		HeartbeatTime:      DefaultHeartbeatTime,
		MessagesBufferSize: DefaultMessagesBufferSize,
		WSPath:             "/ws",
		Service:            micro.NewService(),
		ClientAddress:      DefaultClientAddress,
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
func Acceptor(acc acceptor.Acceptor) Option {
	return func(o *Options) {
		o.Acceptors = append(o.Acceptors, acc)
	}
}
func ClientAddress(c string) Option {
	return func(o *Options) {
		o.ClientAddress = c
		o.Acceptors = append(o.Acceptors, acceptor.NewWSAcceptor(acceptor.Address(o.ClientAddress)))
	}
}
func Registry(r registry.Registry) Option {
	return func(o *Options) {
		o.Registry = r
	}
}

// Context specifies a context for the mcb.
// Can be used to signal shutdown of the mcb.
// Can be used for extra option values.
func Context(ctx context.Context) Option {
	return func(o *Options) {
		o.Context = ctx
	}
}
func MicroService(s micro.Service) Option {
	return func(o *Options) {
		o.Service = s
	}
}
