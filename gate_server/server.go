package gate_server

import (
	"context"
	"github.com/wolfplus2048/mcbeam-plus/constants"
	protos "github.com/wolfplus2048/mcbeam-plus/protos"
	"github.com/wolfplus2048/mcbeam-plus/session"
)

// Sys contains logic for handling sys remotes
type Server struct {
}

// BindSession binds the local session
func (s *Server) Bind(ctx context.Context, sessionData *protos.Session, res *protos.Response) error {
	sess := session.GetSessionByID(sessionData.Id)
	if sess == nil {
		return constants.ErrSessionNotFound
	}
	if err := sess.Bind(ctx, sessionData.Uid); err != nil {
		return err
	}
	res.Data = []byte("ack")
	return nil
}

// PushSession updates the local session
func (s *Server) PushSession(ctx context.Context, sessionData *protos.Session, res *protos.Response) error {
	sess := session.GetSessionByID(sessionData.Id)
	if sess == nil {
		return constants.ErrSessionNotFound
	}
	if err := sess.SetDataEncoded(sessionData.Data); err != nil {
		return err
	}
	res.Data = []byte("ack")
	return nil
}

// Kick kicks a local user
func (s *Server) Kick(ctx context.Context, msg *protos.KickMsg, res *protos.KickAnswer) error {
	res.Kicked = false
	sess := session.GetSessionByUID(msg.GetUserId())
	if sess == nil {
		return constants.ErrSessionNotFound
	}
	err := sess.Kick(ctx)
	if err != nil {
		return err
	}
	res.Kicked = true
	return nil
}

func (s *Server) Push(ctx context.Context, push *protos.PushMsg, res *protos.Response) error {
	sess := session.GetSessionByUID(push.GetUid())
	if s == nil {
		return constants.ErrSessionNotFound
	}
	err := sess.Push(push.Route, push.Data)
	return err
}
