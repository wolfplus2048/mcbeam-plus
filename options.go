package mcbeam

import (
	"context"
	"github.com/micro/cli/v2"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	"github.com/micro/go-micro/v2/registry"
	"github.com/wolfplus2048/mcbeam-plus/acceptor"
	"github.com/wolfplus2048/mcbeam-plus/conn/codec"
	"github.com/wolfplus2048/mcbeam-plus/conn/message"
	"github.com/wolfplus2048/mcbeam-plus/serialize"
	"github.com/wolfplus2048/mcbeam-plus/serialize/protobuf"
	"time"
)

type Options struct {
	Name      string
	Version   string
	Id        string
	Metadata  map[string]string
	Address   string
	Advertise string

	Action func(*cli.Context)
	Flags  []cli.Flag

	RegisterTTL      time.Duration
	RegisterInterval time.Duration
	RegisterCheck func(context.Context) error


	Handler interface{}

	// Alternative Options
	Context context.Context

	Registry registry.Registry
	Service  micro.Service


	BeforeStart []func() error
	BeforeStop  []func() error
	AfterStart  []func() error
	AfterStop   []func() error

	Signal bool

	packetDecoder  codec.PacketDecoder
	packetEncoder  codec.PacketEncoder
	messageEncoder message.Encoder
	serializer     serialize.Serializer
	heartbeatTime  time.Duration
	messagesBufferSize int
	TSLCertificate string
	TSLKey string
	WSPath string
	acceptors []acceptor.Acceptor
	Client client.Client

}
type Option func(o *Options)

func newOptions(opt ...Option) Options {
	opts := Options{
		Name:             DefaultName,
		Version:          DefaultVersion,
		Id:               DefaultId,
		Address:          DefaultAddress,
		RegisterTTL:      DefaultRegisterTTL,
		RegisterInterval: DefaultRegisterInterval,
		Service:          micro.NewService(),
		Context:          context.TODO(),
		Signal:           true,

		packetDecoder:      codec.NewPomeloPacketDecoder(),
		packetEncoder:      codec.NewPomeloPacketEncoder(),
		messageEncoder:     message.NewMessagesEncoder(false),
		serializer:         protobuf.NewSerializer(),
		heartbeatTime:      DefaultHeartbeatTime,
		messagesBufferSize: DefaultMessagesBufferSize,
		WSPath:             "/ws",
	}
	for _, o := range opt {
		o(&opts)
	}
	if opts.RegisterCheck == nil {
		opts.RegisterCheck = DefaultRegisterCheck
	}

	if len(opts.acceptors) < 1 {
		opts.acceptors = append(opts.acceptors, acceptor.DefaultAcceptor)
	}
	return opts
}

func Client(c client.Client) Option {
	return func(o *Options) {
		o.Client = c
	}
}
func WithAcceptor(acc acceptor.Acceptor) Option {
	return func(o *Options) {
		o.acceptors = append(o.acceptors, acc)
	}
}

// Name of Web
func Name(n string) Option {
	return func(o *Options) {
		o.Name = n
	}
}

// Icon specifies an icon url to load in the UI
func Icon(ico string) Option {
	return func(o *Options) {
		if o.Metadata == nil {
			o.Metadata = make(map[string]string)
		}
		o.Metadata["icon"] = ico
	}
}

//Id for Unique server id
func Id(id string) Option {
	return func(o *Options) {
		o.Id = id
	}
}

// Version of the service
func Version(v string) Option {
	return func(o *Options) {
		o.Version = v
	}
}

// Metadata associated with the service
func Metadata(md map[string]string) Option {
	return func(o *Options) {
		o.Metadata = md
	}
}

// Address to bind to - host:port
func Address(a string) Option {
	return func(o *Options) {
		o.Address = a
	}
}

//Advertise The address to advertise for discovery - host:port
func Advertise(a string) Option {
	return func(o *Options) {
		o.Advertise = a
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

// Registry used for discovery
func Registry(r registry.Registry) Option {
	return func(o *Options) {
		o.Registry = r
	}
}

//RegisterTTL Register the service with a TTL
func RegisterTTL(t time.Duration) Option {
	return func(o *Options) {
		o.RegisterTTL = t
	}
}

//RegisterInterval Register the service with at interval
func RegisterInterval(t time.Duration) Option {
	return func(o *Options) {
		o.RegisterInterval = t
	}
}

// MicroService sets the micro.Service used internally
func MicroService(s micro.Service) Option {
	return func(o *Options) {
		o.Service = s
	}
}

// Flags sets the command flags.
func Flags(flags ...cli.Flag) Option {
	return func(o *Options) {
		o.Flags = append(o.Flags, flags...)
	}
}

// Action sets the command action.
func Action(a func(*cli.Context)) Option {
	return func(o *Options) {
		o.Action = a
	}
}

// BeforeStart is executed before the server starts.
func BeforeStart(fn func() error) Option {
	return func(o *Options) {
		o.BeforeStart = append(o.BeforeStart, fn)
	}
}

// BeforeStop is executed before the server stops.
func BeforeStop(fn func() error) Option {
	return func(o *Options) {
		o.BeforeStop = append(o.BeforeStop, fn)
	}
}

// AfterStart is executed after server start.
func AfterStart(fn func() error) Option {
	return func(o *Options) {
		o.AfterStart = append(o.AfterStart, fn)
	}
}

// AfterStop is executed after server stop.
func AfterStop(fn func() error) Option {
	return func(o *Options) {
		o.AfterStop = append(o.AfterStop, fn)
	}
}

// RegisterCheck run func before registry service
func RegisterCheck(fn func(context.Context) error) Option {
	return func(o *Options) {
		o.RegisterCheck = fn
	}
}

// HandleSignal toggles automatic installation of the signal handler that
// traps TERM, INT, and QUIT.  Users of this feature to disable the signal
// handler, should control liveness of the service through the context.
func HandleSignal(b bool) Option {
	return func(o *Options) {
		o.Signal = b
	}
}
