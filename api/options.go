package api

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	"github.com/wolfplus2048/mcbeam-plus/acceptor"
	"github.com/wolfplus2048/mcbeam-plus/conn/codec"
	"github.com/wolfplus2048/mcbeam-plus/conn/message"
	"github.com/wolfplus2048/mcbeam-plus/serialize"
	"github.com/wolfplus2048/mcbeam-plus/serialize/protobuf"
	"time"
)

type Options struct {
	ClientAddress string
	Handler       interface{}

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
	Service            micro.Service
	rpcClient          client.Client
}
type Option func(o *Options)

func newOptions(opt ...Option) Options {
	opts := Options{
		Context:            context.TODO(),
		PacketDecoder:      codec.NewPomeloPacketDecoder(),
		PacketEncoder:      codec.NewPomeloPacketEncoder(),
		MessageEncoder:     message.NewMessagesEncoder(false),
		Serializer:         protobuf.NewSerializer(),
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
func Client(c client.Client) Option {
	return func(o *Options) {
		o.rpcClient = c
	}
}
func Acceptor(acc acceptor.Acceptor) Option {
	return func(o *Options) {
		o.Acceptors = append(o.Acceptors, acc)
	}
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

// Context specifies a context for the mcb.
// Can be used to signal shutdown of the mcb.
// Can be used for extra option values.
func Context(ctx context.Context) Option {
	return func(o *Options) {
		o.Context = ctx
	}
}
