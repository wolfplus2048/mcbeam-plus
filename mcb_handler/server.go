package mcb_handler

import (
	"context"
	"github.com/wolfplus2048/mcbeam-plus/v3/component"
	"github.com/wolfplus2048/mcbeam-plus/v3/protos"
)

type McbAppHandler interface {
	Init(opts ...Option)
	Call(ctx context.Context, req *proto_mcbeam.Request, res *proto_mcbeam.Response) error
	Handle(handler interface{}, opt ...component.HandlerOption) error
}
