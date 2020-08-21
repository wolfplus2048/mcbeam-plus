package main

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/registry/etcd"
	"github.com/micro/go-micro/v2/store"
	"github.com/micro/go-plugins/store/redis/v2"
	"github.com/wolfplus2048/mcbeam-plus"
	proto_room "github.com/wolfplus2048/mcbeam-plus/example/protos/room"
	"github.com/wolfplus2048/mcbeam-plus/example/room_srv/room"
)

type Handler struct {
	service micro.Service
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
	logger.Debugf("crateRoom %s", req.Name)
	r, err := room.New(req.Name)
	if err != nil {
		return nil, err
	}
	res := &proto_room.CreateRoomRes{
		Code: "",
		Room: &proto_room.Room{
			Id:   r.Id,
			Name: r.Name,
		},
		ServerId: h.service.Options().Server.Options().Name + "-" + h.service.Options().Server.Options().Id,
	}
	return res, nil
}
func (h *Handler) JoinRoom(ctx context.Context, req *proto_room.JoinReq) {
	s := mcbeam.GetSessionFromCtx(ctx)
	r := room.GetRoom(req.Id)
	if r == nil {
		s.Push("JoinRes", &proto_room.JoinRes{
			Code: "room not exists",
		})
		return
	}
	st := h.service.Options().Store
	res, err := st.Read(s.UID(), store.ReadFrom("cache", "user"))
	if err != nil || len(res) < 1 {
		s.Push("JoinRes", &proto_room.JoinRes{
			Code: "invalidate user",
		})
		return
	}
	err = r.JoinRoom(&room.User{
		Uid:     s.UID(),
		Name:    string(res[0].Value),
		Session: s,
	})
	if err != nil {
		s.Push("JoinRes", &proto_room.JoinRes{
			Code: "can not join room",
		})
		return
	}
	s.Push("JoinRes", &proto_room.JoinRes{
		Room: &proto_room.Room{
			Id:    r.Id,
			Name:  r.Name,
			Users: r.GetUsers(),
		},
	})
}
func main() {
	logger.Init(logger.WithLevel(logger.DebugLevel))
	service := mcbeam.NewService(
		mcbeam.Name("room"),
		mcbeam.Registry(etcd.NewRegistry()),
		mcbeam.MicroService(micro.NewService(micro.Store(redis.NewStore()))),
	)
	if err := service.Init(); err != nil {
		logger.Fatal(err)
	}
	service.Register(&Handler{service: service.Options().Service})
	if err := service.Run(); err != nil {
		logger.Fatal(err)
	}
}
