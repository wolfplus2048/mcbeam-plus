package mcbeam

import (
	"context"
	"fmt"
	"github.com/golang/protobuf/proto"
	"github.com/micro/go-micro/v2/client"
	"github.com/micro/go-micro/v2/client/selector"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/constants"
	"github.com/wolfplus2048/mcbeam-plus/route"
	"github.com/wolfplus2048/mcbeam-plus/session"
	"github.com/wolfplus2048/mcbeam-plus/util"
)

var (
	GitCommit string
	GitTag    string
	BuildDate string

	name        = "micro"
	description = "A microservice runtime\n\n	 Use `micro [command] --help` to see command specific help."
	version     = "latest"
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
	req := c.NewRequest(route.SvType, route.Short(), arg)
	so := selector.WithStrategy(util.Select(route.SvID))

	return c.Call(ctx, req, replay, client.WithSelectOption(so))
}

func buildVersion() string {
	microVersion := version

	if GitTag != "" {
		microVersion = GitTag
	}

	if GitCommit != "" {
		microVersion += fmt.Sprintf("-%s", GitCommit)
	}

	if BuildDate != "" {
		microVersion += fmt.Sprintf("-%s", BuildDate)
	}
	logger.Debugf("version:%s", microVersion)
	return microVersion
}
