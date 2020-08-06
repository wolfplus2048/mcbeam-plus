package main

import (
	"context"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/example/protos/gate"
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

func (h *Handler) Greeter(ctx context.Context, req *gate.GreeterReq) (*gate.GreeterRes, error) {
	logger.Infof("request: %s", req.Message)
	res := &gate.GreeterRes{}
	res.Message = "Hello " + req.Message
	return res, nil
}
func (h *Handler) Hello(ctx context.Context, req *gate.GreeterReq) {
	logger.Infof("notify: %s", req.Message)
}
