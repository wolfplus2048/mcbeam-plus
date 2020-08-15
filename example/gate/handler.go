package main

import (
	"context"
	"github.com/google/uuid"
	"github.com/wolfplus2048/mcbeam-plus"
	proto_gate "github.com/wolfplus2048/mcbeam-plus/example/protos/gate"
)

type Handler struct {
}

func (h *Handler) Init() {
}

func (h *Handler) AfterInit() {
}

func (h *Handler) BeforeShutdown() {
}

func (h *Handler) Shutdown() {
}

func (h *Handler) Login(ctx context.Context, req *proto_gate.LoginReq) {
	s := mcbeam.GetSessionFromCtx(ctx)
	res := proto_gate.LoginRes{
		Code:     "",
		Uid:      uuid.New().String(),
		Username: req.Username,
	}
	s.Bind(ctx, res.Uid)
	s.Push("LoginRes", &res)
}
