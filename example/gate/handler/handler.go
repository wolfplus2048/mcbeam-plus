package handler

import (
	"context"
	"github.com/google/uuid"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/store"
	"github.com/wolfplus2048/mcbeam-plus"
	proto_gate "github.com/wolfplus2048/mcbeam-plus/example/protos/gate"
)

type Handler struct {
	Store store.Store
}

func (h *Handler) Init() {
}

func (h *Handler) AfterInit() {
}

func (h *Handler) BeforeShutdown() {
}

func (h *Handler) Shutdown() {
	logger.Debugf("Shutdown")
}

func (h *Handler) Login(ctx context.Context, req *proto_gate.LoginReq) {
	logger.Infof("user login: %s", req.Username)
	s := mcbeam.GetSessionFromCtx(ctx)
	res := proto_gate.LoginRes{
		Code:     "",
		Uid:      uuid.New().String(),
		Username: req.Username,
	}
	err := h.Store.Write(&store.Record{
		Key:   res.Uid,
		Value: []byte(req.Username),
	}, store.WriteTo("cache", "user"))
	if err != nil {
		res.Code = err.Error()
		logger.Infof("store session err:%s", err.Error())
	}
	s.Bind(ctx, res.Uid)
	s.Push("LoginRes", &res)

}
