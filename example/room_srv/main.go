package main

import (
	"context"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/registry/etcd"
	"github.com/wolfplus2048/mcbeam-plus"
	"github.com/wolfplus2048/mcbeam-plus/component"
	proto_room "github.com/wolfplus2048/mcbeam-plus/example/protos/room"
	"strings"
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
func (h *Handler) CreateRoom(ctx context.Context, req *proto_room.CreateRoomReq) (*proto_room.CreateRoomRes, error) {
	r, err := New(req.Name)
	if err != nil {
		return nil, err
	}
	res := &proto_room.CreateRoomRes{
		Code: "",
		Room: &proto_room.Room{
			Id:   r.id,
			Name: r.name,
		},
	}
	return res, nil
}

func main() {
	service := mcbeam.NewService(
		mcbeam.Name("room_srv"),
		mcbeam.Registry(etcd.NewRegistry()),
	)
	if err := service.Init(); err != nil {
		logger.Fatal(err)
	}
	service.Register(&Handler{}, component.WithNameFunc(strings.ToLower))
	if err := service.Run(); err != nil {
		logger.Fatal(err)
	}
}
