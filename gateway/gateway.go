package gateway

type Gateway interface {
	Init(opts ...Option) error
	Options () Options
	Start() error
	Stop() error
	String() string
}