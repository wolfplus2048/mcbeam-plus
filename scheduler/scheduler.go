package scheduler

import "time"

const (
	// LoopForever is a constant indicating that timer should loop forever
	LoopForever = -1
)

type Scheduler interface {
	Init(opt ...Option) error
	Options() Options
	Start() error
	Stop() error
	NewTimer(interval time.Duration, fn Func, opt ...TimerOption) int64
	RemoveTimer(id int64) error
	String() string
}

var (
	Default Scheduler = newScheduler()
)

func Init(opt ...Option) {
	if Default == nil {
		Default = newScheduler(opt...)
	}
	Default.Init(opt...)
}
func NewTimer(interval time.Duration, fn Func, opt ...TimerOption) int64 {
	return Default.NewTimer(interval, fn, opt...)
}
func RemoveTimer(id int64) error {
	return Default.RemoveTimer(id)
}
