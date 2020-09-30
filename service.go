package mcbeam

import (
	"github.com/micro/go-micro/v2/server"
	"github.com/wolfplus2048/mcbeam-plus/component"
	"time"
)

type Service interface {
	Init(opts ...Option) error
	Options() Options
	Register(comp component.Component, opts ...server.HandlerOption)
	Module(module Module)
	Run() error
}
type Module interface {
	Init() error
	AfterInit()
	BeforeShutdown()
	Shutdown() error
}

//Mcbeam basic Defaults
var (
	// for serving
	DefaultHeartbeatTime      time.Duration = time.Second * 5
	DefaultMessagesBufferSize int           = 100
	DefaultClientAddress                    = ":3250"

	NewService func(...Option) Service = newMcbService
)
