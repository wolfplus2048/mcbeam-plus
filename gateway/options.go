package gateway

import (
	"github.com/micro/go-micro/v2"
	"github.com/wolfplus2048/mcbeam-plus/acceptor"
	"github.com/wolfplus2048/mcbeam-plus/conn/codec"
	"github.com/wolfplus2048/mcbeam-plus/conn/message"
	"github.com/wolfplus2048/mcbeam-plus/serialize"
	"github.com/wolfplus2048/mcbeam-plus/serialize/protobuf"
	"time"
)

type Options struct {
	ClientAddress string
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
}
type Option func(o *Options)

func newOptions(opt ...Option) Options {
	opts := Options{
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
