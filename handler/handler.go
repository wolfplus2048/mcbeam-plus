package handler

import (
	"context"
	gateproto "github.com/wolfplus2048/mcbeam-plus/protos"
)

type McbeamHandler struct {
}

func (m McbeamHandler) Call(ctx context.Context, request *gateproto.Request, response *gateproto.Response) error {
	panic("implement me")
}

func (m McbeamHandler) PushToUser(ctx context.Context, push *gateproto.Push, response *gateproto.Response) error {
	panic("implement me")
}

func (m McbeamHandler) SessionBindRemote(ctx context.Context, msg *gateproto.BindMsg, response *gateproto.Response) error {
	panic("implement me")
}

func (m McbeamHandler) KickUser(ctx context.Context, msg *gateproto.KickMsg, answer *gateproto.KickAnswer) error {
	panic("implement me")
}
