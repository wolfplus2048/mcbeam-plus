package wrapper

import (
	"context"
	"github.com/micro/go-micro/v2/client"
	"github.com/micro/go-micro/v2/metadata"
	"github.com/micro/go-micro/v2/server"
	"github.com/wolfplus2048/mcbeam-plus/agent"
	"github.com/wolfplus2048/mcbeam-plus/constants"
	proto_mcbeam "github.com/wolfplus2048/mcbeam-plus/protos"
	"github.com/wolfplus2048/mcbeam-plus/serialize/protobuf"
	"strconv"
)

func SessionHandler(client client.Client) server.HandlerWrapper {
	return func(h server.HandlerFunc) server.HandlerFunc {
		return func(ctx context.Context, req server.Request, rsp interface{}) error {
			uid, ok := metadata.Get(ctx, "mcb-session-uid")
			if !ok {
				return h(ctx, req, rsp)
			}
			id, ok := metadata.Get(ctx, "mcb-session-id")
			if !ok {
				return h(ctx, req, rsp)
			}
			aid, _ := strconv.ParseInt(id, 10, 64)
			fid, ok := metadata.Get(ctx, "mcb-session-fid")

			reply, ok := metadata.Get(ctx, "mcb-session-reply")
			session := &proto_mcbeam.Session{
				Id:  aid,
				Uid: uid,
			}
			a, _ := agent.NewRemote(session, reply, client, fid, protobuf.NewSerializer())

			ctx = context.WithValue(ctx, constants.SessionCtxKey, a.Session)
			return h(ctx, req, rsp)
		}
	}
}
