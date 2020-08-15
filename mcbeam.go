package mcbeam

import (
	"context"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/constants"
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
