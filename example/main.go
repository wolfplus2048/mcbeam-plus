package main

import (
	"context"
	"github.com/google/uuid"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/registry/etcd"
	"github.com/micro/go-micro/v2/web"
	"github.com/wolfplus2048/mcbeam-plus"
	proto_example "github.com/wolfplus2048/mcbeam-plus/example/proto"
	"github.com/wolfplus2048/mcbeam-plus/scheduler"
	"net/http"
	"time"
)
type Handler struct {
	service micro.Service

}

func (h *Handler) Init() {
}

func (h *Handler) AfterInit() {
	scheduler.NewTimer(2 * time.Second, func() {
		logger.Infof("tick: %s", time.Now())
	}, scheduler.Counter(5))
}

func (h *Handler) BeforeShutdown() {
}

func (h *Handler) Shutdown() {
}

func (h *Handler) Greeter(ctx context.Context, req *proto_example.HelloRequest) {
	s := mcbeam.GetSessionFromCtx(ctx)
	rsp := &proto_example.HelloResponse{}
	rsp.Message = "Hello " + req.Message
	fakeUid := uuid.New().String()
	s.Bind(context.Background(), fakeUid)
	s.Push("HelloResponse", rsp)
	return
}
func webService() {
	service := web.NewService(web.Name("client"),
		web.Address(":3251"))
	service.Handle("/web/", http.StripPrefix("/web/", http.FileServer(http.Dir("example/web"))))
	if err := service.Init(); err != nil {
		logger.Fatal(err)
	}
	if err := service.Run(); err != nil {
		logger.Fatal()
	}
}
func main() {
	go webService()
	service := mcbeam.NewService(
		mcbeam.Name("example"),
		//mcbeam.ClientAddress(":3250"),
		mcbeam.Registry(etcd.NewRegistry()))
	if err := service.Init(); err != nil {
		logger.Fatal(err)
	}
	service.Register(&Handler{})
	if err := service.Run(); err != nil {
		logger.Fatal()
	}
}
