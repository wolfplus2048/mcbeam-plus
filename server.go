package mcbeam

import (
	"context"
	"github.com/google/uuid"
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
	DefaultHeartbeatTime time.Duration = time.Second * 5
	DefaultMessagesBufferSize int      = 100
	DefaultName    = "mcbeam-app"
	DefaultVersion = "latest"
	DefaultId      = uuid.New().String()
	DefaultAddress = ":3250"


	// for registration
	DefaultRegisterTTL      = time.Second * 90
	DefaultRegisterInterval = time.Second * 30
	DefaultRegisterCheck = func(context.Context) error { return nil}


	NewService func(...Option) Service   = newTcpService
)