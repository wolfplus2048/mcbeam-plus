package mcbeam

import (
	"github.com/micro/micro/v3/service/client"
	"github.com/micro/micro/v3/service/server"
	"github.com/wolfplus2048/mcbeam-plus/v3/component"
	"time"
)

type Service interface {
	Init(opts ...Option) error
	Options() Options
	Register(comp component.Component, opts ...server.HandlerOption)
	Module(module Module)
	Client() client.Client
	Server() server.Server
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
