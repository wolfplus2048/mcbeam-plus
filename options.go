package mcbeam

import (
	"context"
	"github.com/micro/go-micro/v2"
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

	// Alternative Options
	Context context.Context

	packetDecoder      codec.PacketDecoder
	packetEncoder      codec.PacketEncoder
	messageEncoder     message.Encoder
	serializer         serialize.Serializer
	heartbeatTime      time.Duration
	messagesBufferSize int
	TSLCertificate     string
	TSLKey             string
	WSPath             string
	Acceptors          []acceptor.Acceptor
}
type Option func(o *Options)

func newOptions(opt ...Option) Options {
	opts := Options{
		Context:            context.TODO(),
		packetDecoder:      codec.NewPomeloPacketDecoder(),
		packetEncoder:      codec.NewPomeloPacketEncoder(),
		messageEncoder:     message.NewMessagesEncoder(false),
		serializer:         protobuf.NewSerializer(),
		heartbeatTime:      DefaultHeartbeatTime,
		messagesBufferSize: DefaultMessagesBufferSize,
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
	}
}

// Context specifies a context for the service.
// Can be used to signal shutdown of the service.
// Can be used for extra option values.
func Context(ctx context.Context) Option {
	return func(o *Options) {
		o.Context = ctx
	}
}
func WithService(s micro.Service) Option {
	return func(o *Options) {
		o.Service = s
	}
}
