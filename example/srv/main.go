package main

import (
	"context"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/registry/etcd"
	"github.com/wolfplus2048/mcbeam-plus"
	"github.com/wolfplus2048/mcbeam-plus/example/protos/gate"
)
type Handler struct {

}

func (h *Handler) Init() {
	panic("implement me")
}

func (h *Handler) AfterInit() {
	panic("implement me")
}

func (h *Handler) BeforeShutdown() {
	panic("implement me")
}

func (h *Handler) Shutdown() {
	panic("implement me")
}
func (h *Handler) Greeter(ctx context.Context, req *gate.GreeterReq) (*gate.GreeterRes, error) {
	logger.Infof("request: %s", req.Message)
	res := &gate.GreeterRes{}
	res.Message = "Hello " + req.Message
	return res, nil
}

func main() {
	service := mcbeam.NewService(
		mcbeam.Name("srv"),
		mcbeam.Registry(etcd.NewRegistry()),
	)
	if err := service.Init(); err != nil {
		logger.Fatal(err)
	}
	service.Register("handler", &Handler{})
	if err := service.Run(); err != nil {
		logger.Fatal(err)
	}
}
