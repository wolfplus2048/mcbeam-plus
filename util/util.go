// Copyright (c) TFG Co. All Rights Reserved.
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

package util

import (
	"context"
	"errors"
	"fmt"
	e "github.com/micro/go-micro/v2/errors"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/conn/message"
	"github.com/wolfplus2048/mcbeam-plus/constants"
	"github.com/wolfplus2048/mcbeam-plus/protos"
	"github.com/wolfplus2048/mcbeam-plus/route"
	"github.com/wolfplus2048/mcbeam-plus/serialize"
	"github.com/wolfplus2048/mcbeam-plus/session"
	"os"
	"reflect"
	"runtime/debug"
)

// Pcall calls a method that returns an interface and an error and recovers in case of panic
func Pcall(method reflect.Method, args []reflect.Value) (rets interface{}, err error) {
	defer func() {
		if rec := recover(); rec != nil {
			// Try to use logger from context here to help trace error cause
			logger.Errorf("panic - corona/dispatch: %s: %v", method.Name, rec)
			logger.Debugf("%s", debug.Stack())
			if s, ok := rec.(string); ok {
				err = errors.New(s)
			} else {
				err = fmt.Errorf("rpc call internal error - %s: %v", method.Name, rec)
			}
		}
	}()

	r := method.Func.Call(args)
	// r can have 0 length in case of notify handlers
	// otherwise it will have 2 outputs: an interface and an error
	if len(r) == 2 {
		if v := r[1].Interface(); v != nil {
			err = v.(error)
		} else if !r[0].IsNil() {
			rets = r[0].Interface()
		} else {
			err = constants.ErrReplyShouldBeNotNull
		}
	}
	return
}

// SliceContainsString returns true if a slice contains the string
func SliceContainsString(slice []string, str string) bool {
	for _, value := range slice {
		if value == str {
			return true
		}
	}
	return false
}

// SerializeOrRaw serializes the interface if its not an array of bytes already
func SerializeOrRaw(serializer serialize.Serializer, v interface{}) ([]byte, error) {
	if data, ok := v.([]byte); ok {
		return data, nil
	}
	data, err := serializer.Marshal(v)
	if err != nil {
		return nil, err
	}
	return data, nil
}

// FileExists tells if a file exists
func FileExists(filename string) bool {
	_, err := os.Stat(filename)
	return err == nil || os.IsExist(err)
}

// GetErrorFromPayload gets the error from payload
func GetErrorFromPayload(serializer serialize.Serializer, payload []byte) error {
	err := &e.Error{}
	e := serializer.Unmarshal(payload, err)
	if e != nil {
		return e
	}
	return err
}

// GetErrorPayload creates and serializes an error payload
func GetErrorPayload(serializer serialize.Serializer, err error) ([]byte, error) {
	return SerializeOrRaw(serializer, err)
}

//
//// ConvertProtoToMessageType converts a corona_protos.MsgType to a message.Type
//func ConvertProtoToMessageType(protoMsgType corona_protos.MsgType) message.Type {
//	var msgType message.Type
//	switch protoMsgType {
//	case corona_protos.MsgType_MsgRequest:
//		msgType = message.Request
//	case corona_protos.MsgType_MsgNotify:
//		msgType = message.Notify
//	}
//	return msgType
//}
//
//// GetContextFromRequest gets the context from a request
//func GetContextFromRequest(req *corona_protos.Request, serverID string) (context.Context, error) {
//	ctx, err := pcontext.Decode(req.GetMetadata())
//	if err != nil {
//		return nil, err
//	}
//	if ctx == nil {
//		return nil, constants.ErrNoContextFound
//	}
//	ctx = CtxWithDefaultLogger(ctx, req.GetMsg().GetRoute(), "")
//	return ctx, nil
//}

func BuildRequest(ctx context.Context,
	rpcType mcbeamproto.RPCType,
	route *route.Route,
	session *session.Session,
	msg *message.Message,
	frontendID string) (*mcbeamproto.Request, error) {
	req := &mcbeamproto.Request{
		Msg: &mcbeamproto.Msg{
			Route: route.String(),
			Data:  msg.Data,
		},
	}
	req.Type = rpcType
	req.FrontendID = frontendID
	switch msg.Type {
	case message.Request:
		req.Msg.Type = mcbeamproto.MsgType_MsgRequest
	case message.Notify:
		req.Msg.Type = mcbeamproto.MsgType_MsgNotify
	}
	if rpcType == mcbeamproto.RPCType_User {
		mid := uint(0)
		if msg.Type == message.Request {
			mid = msg.ID
		}
		req.Msg.Id = uint64(mid)
		req.Session = &mcbeamproto.Session{
			Id:   session.ID(),
			Uid:  session.UID(),
			Data: session.GetDataEncoded(),
		}
	}
	return req, nil
}
