package mcbeam

import (
	"time"
)

type Service interface {
	Init(opts ...Option) error
	Options() Options
	Register(name string, comp Component)
	Module(name string, module Module)
	Run() error
}
type Module interface {
	Init() error
	AfterInit()
	BeforeShutdown()
	Shutdown() error
}


type Component interface {
	Init()
	AfterInit()
	BeforeShutdown()
	Shutdown()
}


//Mcbeam basic Defaults
var (
	// for serving
	DefaultHeartbeatTime      time.Duration = time.Second * 5
	DefaultMessagesBufferSize int           = 100
	DefaultClientAddress                    = ":3250"

	NewService func(...Option) Service = newMcbService
)
