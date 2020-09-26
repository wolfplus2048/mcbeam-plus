package mcb_server

import (
	"context"
	"github.com/wolfplus2048/mcbeam-plus/component"
	"github.com/wolfplus2048/mcbeam-plus/protos"
)

type McbAppHandler interface {
	Init(opts ...Option)
	Call(ctx context.Context, req *proto_mcbeam.Request, res *proto_mcbeam.Response) error
	Handle(handler interface{}, opt ...component.HandlerOption) error
}

