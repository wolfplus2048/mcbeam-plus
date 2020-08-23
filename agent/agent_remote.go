// Copyright (c) nano Author and wolfplus. All Rights Reserved.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

package agent

import (
	"context"
	"fmt"
	"github.com/micro/go-micro/v2/client"
	"github.com/micro/go-micro/v2/client/selector"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/conn/message"
	"github.com/wolfplus2048/mcbeam-plus/constants"
	mcbeamproto "github.com/wolfplus2048/mcbeam-plus/protos"
	"github.com/wolfplus2048/mcbeam-plus/route"
	"github.com/wolfplus2048/mcbeam-plus/serialize"
	"github.com/wolfplus2048/mcbeam-plus/session"
	"github.com/wolfplus2048/mcbeam-plus/util"
	"net"
	"strings"
)

// Remote corresponding to another server
type Remote struct {
	Session      *session.Session // session
	chDie        chan struct{}    // wait for close
	frontendID   string           // the frontend that sent the request
	frontendName string
	reply        string               // nats reply topic
	rpcClient    client.Client        // rpc client
	serializer   serialize.Serializer // message serializer

}

// NewRemote create new Remote instance
func NewRemote(
	sess *mcbeamproto.Session,
	reply string,
	rpcClient client.Client,
	frontendID string,
	serializer serialize.Serializer,

) (*Remote, error) {
	a := &Remote{
		chDie:      make(chan struct{}),
		reply:      reply, // TODO this is totally coupled with NATS
		rpcClient:  rpcClient,
		frontendID: frontendID,
		serializer: serializer,
	}

	// binding session
	s := session.New(a, false, sess.GetUid())
	s.SetFrontendData(frontendID, sess.GetId())
	err := s.SetDataEncoded(sess.GetData())
	if err != nil {
		return nil, err
	}
	a.Session = s
	names := strings.Split(frontendID, "-")
	if len(names) > 1 {
		a.frontendName = names[0]
	}
	return a, nil
}
func (a *Remote) gateRoute(routeStr string) string {
	return fmt.Sprintf("%s.%s.%s", a.frontendID, a.frontendName, routeStr)
}

// Kick kicks the user
func (a *Remote) Kick(ctx context.Context) error {
	if a.Session.UID() == "" {
		return constants.ErrNoUIDBind
	}
	rsp := &mcbeamproto.KickAnswer{}
	err := a.SendRequest(ctx, constants.KickRoute,
		&mcbeamproto.KickMsg{UserId: a.Session.UID()},
		rsp)
	return err
}

// Push pushes the message to the user
func (a *Remote) Push(route string, v interface{}) error {

	switch d := v.(type) {
	case []byte:
		logger.Debugf("Type=Push, ID=%d, UID=%d, Route=%s, Data=%dbytes",
			a.Session.ID(), a.Session.UID(), route, len(d))
	default:
		logger.Debugf("Type=Push, ID=%d, UID=%s, Route=%s, Data=%+v",
			a.Session.ID(), a.Session.UID(), route, v)
	}

	return a.sendPush(
		pendingMessage{typ: message.Push, route: route, payload: v}, a.Session.UID(),
	)
}

// ResponseMID reponds the message with mid to the user
func (a *Remote) ResponseMID(ctx context.Context, mid uint, v interface{}, isError ...bool) error {
	logger.Fatal(constants.ErrNotImplemented.Error())
	return nil
}

// Close closes the remote
func (a *Remote) Close() error { return nil }

// RemoteAddr returns the remote address of the user
func (a *Remote) RemoteAddr() net.Addr { return nil }

func (a *Remote) send(m pendingMessage, to string) (err error) {
	logger.Fatal(constants.ErrNotImplemented.Error())
	return nil
}

func (a *Remote) sendPush(m pendingMessage, userID string) (err error) {
	payload, err := util.SerializeOrRaw(a.serializer, m.payload)
	if err != nil {
		return err
	}
	push := &mcbeamproto.PushMsg{
		Route: m.route,
		Uid:   a.Session.UID(),
		Data:  payload,
	}

	err = a.SendRequest(context.Background(), constants.PushRoute, push, &mcbeamproto.Response{})
	return err
}

// SendRequest sends a request to a server
func (a *Remote) SendRequest(ctx context.Context, routeStr string, arg interface{}, reply interface{}) error {
	route, err := route.Decode(routeStr)
	if err != nil {
		logger.Errorf("Failed to decode route: %s", err.Error())
		return err
	}
	so := selector.WithStrategy(util.Select(a.frontendID))
	req := a.rpcClient.NewRequest(a.frontendName, route.Short(), arg)
	err = a.rpcClient.Call(ctx, req, reply, client.WithSelectOption(so))
	return err
}
