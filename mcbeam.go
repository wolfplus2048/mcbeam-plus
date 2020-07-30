package mcbeam

import (
	"time"
)

type Service interface {
	Init(opts ...Option) error
	Options() Options
	Handler(name string, handler interface{})
	Run() error
}

//Mcbeam basic Defaults
var (
	// for serving
	DefaultHeartbeatTime      time.Duration = time.Second * 5
	DefaultMessagesBufferSize int           = 100
	DefaultClientAddress                    = ":3250"

	NewService func(...Option) Service = newTcpService
)
