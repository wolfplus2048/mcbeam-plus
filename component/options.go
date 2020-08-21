package component

type HandlerOptions struct {
	Name     string
	NameFunc func(string) string
}
type HandlerOption func(options *HandlerOptions)

func WithName(name string) HandlerOption {
	return func(o *HandlerOptions) {
		o.Name = name
	}
}
func WithNameFunc(fn func(string) string) HandlerOption {
	return func(o *HandlerOptions) {
		o.NameFunc = fn
	}
}
