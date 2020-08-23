package handler

import (
	"context"
	"github.com/micro/go-micro/v2/client"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/metadata"
	"github.com/wolfplus2048/mcbeam-plus"
	proto_mgr "github.com/wolfplus2048/mcbeam-plus/example/protos/mgr"
	proto_room "github.com/wolfplus2048/mcbeam-plus/example/protos/room"
	"sync"
)

type room struct {
	id       string
	name     string
	serverId string
}
type Handler struct {
	Client client.Client
	rooms  sync.Map
}

func (h Handler) Init() {
}

func (h Handler) AfterInit() {
}

func (h Handler) BeforeShutdown() {
}

func (h Handler) Shutdown() {
}

func (h *Handler) GetRoomList(ctx context.Context, req *proto_mgr.GetRoomListReq) {

}
func (h *Handler) CreateRoom(ctx context.Context, req *proto_mgr.CreateRoomReq) {
	md, _ := metadata.FromContext(ctx)
	logger.Infof("Mgr CreateRoom:%s, remote ip:%s, local ip:%s", req.Name, md["Remote"], md["Local"])
	s := mcbeam.GetSessionFromCtx(ctx)
	arg := &proto_room.CreateRoomReq{Name: req.Name}
	rsp := &proto_room.CreateRoomRes{}
	err := mcbeam.RPC(context.Background(), h.Client, "room.handler.createroom", arg, rsp)
	if err != nil {
		s.Push("createroom", &proto_mgr.CreateRoomRes{
			Code: err.Error(),
		})
		return
	}
	s.Push("CreateRoomRes", &proto_mgr.CreateRoomRes{
		Room: &proto_mgr.Room{
			Id:     rsp.Room.Id,
			Name:   rsp.Room.Name,
			Status: 0,
		},
		ServerId: rsp.ServerId,
	})

}
