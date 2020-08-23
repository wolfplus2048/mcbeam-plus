package main

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/broker/nats"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/registry/etcd"
	"github.com/micro/go-micro/v2/store"
	"github.com/micro/go-plugins/store/redis/v2"
	"github.com/wolfplus2048/mcbeam-plus"
	proto_gate "github.com/wolfplus2048/mcbeam-plus/example/protos/gate"
	proto_room "github.com/wolfplus2048/mcbeam-plus/example/protos/room"
	"github.com/wolfplus2048/mcbeam-plus/example/room_srv/room"
)
type Sub struct {
}
func (s *Sub)Handler(ctx context.Context, arg *proto_gate.LoginReq) error {
	logger.Debugf("uid %s closed", arg.Username)
	return nil
}
type Handler struct {
	service micro.Service
}

func (h *Handler) Init() {
}

func (h *Handler) AfterInit() {
}

func (h *Handler) BeforeShutdown() {
}

func (h *Handler) Shutdown() {
}
func (h *Handler) onClose(uid string)  {
	logger.Debugf("onClose:%s", uid)
	s := h.service.Server()
	s.Subscribe(s.NewSubscriber("session.onclose", new(Sub)))
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
	h.service.Server().Subscribe(h.service.Server().NewSubscriber("session.onclose", func(ctx context.Context, arg *proto_gate.LoginReq) error{
		logger.Debugf("func uid %s closed", arg.Username)
		return nil
	}))
}
func main() {
	logger.Init(logger.WithLevel(logger.DebugLevel))
	service := mcbeam.NewService(
		mcbeam.Name("room"),
		mcbeam.Registry(etcd.NewRegistry()),
		mcbeam.MicroService(
			micro.NewService(
				micro.Store(redis.NewStore()),
				micro.Broker(nats.NewBroker()),
			),
			),
	)
	if err := service.Init(); err != nil {
		logger.Fatal(err)
	}
	service.Register(&Handler{service: service.Options().Service})
	s := service.Options().Service.Server()
	s.Subscribe(s.NewSubscriber("topic", new(Sub)))
	if err := service.Run(); err != nil {
		logger.Fatal(err)
	}
}
