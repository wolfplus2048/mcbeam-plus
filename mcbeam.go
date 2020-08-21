package mcbeam

import (
	"context"
	"github.com/golang/protobuf/proto"
	"github.com/micro/go-micro/v2/client"
	"github.com/micro/go-micro/v2/client/selector"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/conn/message"
	"github.com/wolfplus2048/mcbeam-plus/constants"
	gateproto "github.com/wolfplus2048/mcbeam-plus/protos"
	"github.com/wolfplus2048/mcbeam-plus/route"
	"github.com/wolfplus2048/mcbeam-plus/session"
	"github.com/wolfplus2048/mcbeam-plus/util"
)

// GetSessionFromCtx retrieves a session from a given context
func GetSessionFromCtx(ctx context.Context) *session.Session {
	sessionVal := ctx.Value(constants.SessionCtxKey)
	if sessionVal == nil {
		logger.Debug("ctx doesn't contain a session, are you calling GetSessionFromCtx from inside a remote?")
		return nil
	}
	return sessionVal.(*session.Session)
}
func RPC(ctx context.Context, c client.Client, routeStr string, arg proto.Message, replay proto.Message) error {
	route, err := route.Decode(routeStr)
	if err != nil {
		logger.Errorf("Failed to decode route: %s", err.Error())
		return err
	}
	data, _ := proto.Marshal(arg)
	msg := &message.Message{
		Type:  message.Request,
		ID:    0,
		Route: routeStr,
		Data:  data,
		Err:   false,
	}
	r, _ := util.BuildRequest(ctx, gateproto.RPCType_Sys, route, nil, msg, "")

	req := c.NewRequest(route.SvType, "McbApp.Call", r)
	rsp := new(gateproto.Response)
	so := selector.WithStrategy(util.Select(route.SvID))

	err = c.Call(ctx, req, rsp, client.WithSelectOption(so))
	if err == nil {
		err = proto.Unmarshal(rsp.Data, replay)
	}

	return err
}
