package mcbeam

import (
	"context"
	"github.com/gogo/protobuf/proto"
	"github.com/micro/go-micro/v2/client"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/constants"
	"github.com/wolfplus2048/mcbeam-plus/route"
	"github.com/wolfplus2048/mcbeam-plus/session"
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
func RPC(ctx context.Context, routeStr string, arg proto.Message, replay proto.Message) error {
	route, err := route.Decode(routeStr)
	if err != nil {
		logger.Errorf("Failed to decode route: %s", err.Error())
		return err
	}
	req := client.NewRequest(route.SvType, route.Short(), arg)
	err = client.Call(ctx, req, replay)
	return err
}
