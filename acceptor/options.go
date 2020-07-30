package acceptor

import "github.com/wolfplus2048/mcbeam-plus/constants"

type Options struct {
	Address string
	CertFile string
	KeyFile string
}
type Option func(o *Options)

func Address(addr string) Option {
	return func(o *Options) {
		o.Address = addr
	}
}
func Certs(certs ...string) Option {
	return func(o *Options) {
		if len(certs) != 2 && len(certs) != 0 {
			panic(constants.ErrInvalidCertificates)
		} else if len(certs) == 2 {
			o.CertFile = certs[0]
			o.KeyFile = certs[1]
		}
	}
}
func KeyFile(file string) Option {
	return func(o *Options) {
		o.KeyFile = file
	}
}