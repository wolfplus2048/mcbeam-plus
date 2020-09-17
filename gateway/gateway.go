package gateway

import "time"

type Gateway interface {
	Init(opts ...Option) error
	Options () Options
	Start() error
	Stop() error
	String() string
}

var (
	// for serving
	DefaultHeartbeatTime      time.Duration = time.Second * 5
	DefaultMessagesBufferSize int           = 100
	DefaultClientAddress                    = ":3250"
	DefaultWSPath             string        = "/ws"
)
