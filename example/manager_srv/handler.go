package main

import (
	"context"
	proto_mgr "github.com/wolfplus2048/mcbeam-plus/example/protos/mgr"
)

type Handler struct {
}

func (h Handler) Init() {
	panic("implement me")
}

func (h Handler) AfterInit() {
	panic("implement me")
}

func (h Handler) BeforeShutdown() {
	panic("implement me")
}

func (h Handler) Shutdown() {
	panic("implement me")
}

func (h *Handler) GetRoomList(ctx context.Context, req *proto_mgr.GetRoomListReq) {

}
