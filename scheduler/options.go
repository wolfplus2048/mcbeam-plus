package scheduler

import "time"

type Func func()
type Condition interface {
	Check(now time.Time) bool
}
type Option func(options *Options)
type TimerOption func(options *TimerOptions)
type LogicChan func()
type Options struct {
	timerBacklog int
	Precision    time.Duration
	logicChan    chan func()
}
type TimerOptions struct {
	Fn        Func
	Interval  time.Duration
	Condition Condition
	Counter   int
}

func newOptions(opt ...Option) Options {
	opts := Options{
		timerBacklog: 1 << 8,
		Precision:    time.Second,
	}
	for _, o := range opt {
		o(&opts)
	}
	return opts
}
func WithLogicChan(ch chan func()) Option {
	return func(o *Options) {
		o.logicChan = ch
	}
}
func Backlog(l int) Option {
	return func(o *Options) {
		o.timerBacklog = l
	}
}
func Precision(p time.Duration) Option {
	return func(o *Options) {
		o.Precision = p
	}
}
func WithCondition(c Condition) TimerOption {
	return func(o *TimerOptions) {
		o.Condition = c
	}
}
func Counter(c int) TimerOption {
	return func(o *TimerOptions) {
		o.Counter = c
	}
}
