package wrapper

import (
	"context"
	"github.com/micro/go-micro/v2/server"
)

func SessionHandler() server.HandlerWrapper {
	return func(h server.HandlerFunc) server.HandlerFunc {
		return func(ctx context.Context, req server.Request, rsp interface{}) error {
			return h(ctx, req, rsp)
		}
	}
}
