package mcb_server

import (
	"context"
	"fmt"
	"github.com/golang/protobuf/proto"
	e "github.com/micro/go-micro/v2/errors"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/agent"
	"github.com/wolfplus2048/mcbeam-plus/component"
	"github.com/wolfplus2048/mcbeam-plus/constants"
	"github.com/wolfplus2048/mcbeam-plus/message"
	"github.com/wolfplus2048/mcbeam-plus/protos"
	"github.com/wolfplus2048/mcbeam-plus/route"
	"github.com/wolfplus2048/mcbeam-plus/util"
	"reflect"
	"strings"
)

var (
	typeOfError    = reflect.TypeOf((*error)(nil)).Elem()
	typeOfBytes    = reflect.TypeOf(([]byte)(nil))
	typeOfContext  = reflect.TypeOf(new(context.Context)).Elem()
	typeOfProtoMsg = reflect.TypeOf(new(proto.Message)).Elem()
)

type (
	Handler struct {
		Receiver    reflect.Value
		Method      reflect.Method
		Type        reflect.Type
		IsRawArg    bool
		MessageType message.Type
	}
)
type McbServer struct {
	opts     Options
	handlers map[string]*Handler
}

func NewMcbServer(opts ...Option) *McbServer {
	s := &McbServer{
		handlers: make(map[string]*Handler),
	}
	for _, o := range opts {
		o(&s.opts)
	}
	return s
}
func (m *McbServer) Handle(handler interface{}, opt ...component.HandlerOption) error {
	typ := reflect.TypeOf(handler)
	receiver := reflect.ValueOf(handler)
	typeName := reflect.Indirect(receiver).Type().Name()
	opts := component.HandlerOptions{}
	for _, o := range opt {
		o(&opts)
	}
	if opts.NameFunc == nil {
		opts.NameFunc = strings.ToLower
	}
	name := opts.Name
	if name == "" {
		name = opts.NameFunc(typeName)
	}

	if typeName == "" {
		return fmt.Errorf("no service name for type %s", typ.String())
	}
	if !isExported(typeName) {
		return fmt.Errorf(" %s is not exported", typeName)
	}
	handlers := suitableHandlerMethods(typ, opts.NameFunc)

	if len(handlers) == 0 {
		str := ""
		// To help the user, see if a pointer receiver would work.
		method := suitableHandlerMethods(reflect.PtrTo(typ), opts.NameFunc)
		if len(method) != 0 {
			str = "type " + typeName + " has no exported methods of component type (hint: pass a pointer to value of that type)"
		} else {
			str = "type " + typeName + " has no exported methods of component type"
		}
		return fmt.Errorf(str)
	}

	for i := range handlers {
		handlers[i].Receiver = receiver
	}

	for n, handler := range handlers {
		key := fmt.Sprintf("%s.%s", name, n)
		m.handlers[key] = handler
		logger.Infof("registered component %s, isRawArg: %s", key, m.handlers[key].IsRawArg)
	}
	return nil
}

func (m *McbServer) Call(ctx context.Context, req *proto_mcbeam.Request, res *proto_mcbeam.Response) error {
	rt, err := route.Decode(req.GetMsg().GetRoute())
	if err != nil {
		return e.BadRequest(m.opts.name, "cannot decode route: %s", req.GetMsg().GetRoute())
	}
	switch {
	case req.Type == proto_mcbeam.RPCType_User:
		return m.handleRPCUser(ctx, req, res, rt)
	case req.Type == proto_mcbeam.RPCType_Sys:
		return m.handleRPCSys(ctx, req, res, rt)
	default:
		return e.BadRequest(m.opts.name, "invalid rpc type:%s", req.Type)
	}
}

func (m *McbServer) handleRPCSys(ctx context.Context, req *proto_mcbeam.Request, res *proto_mcbeam.Response, rt *route.Route) error {
	handler, ok := m.handlers[rt.Short()]
	if !ok {
		return e.NotFound(m.opts.name, "not find method:%s", rt.Method)
	}
	msgType, err := getMsgType(req.GetMsg().GetType())
	if err != nil {
		return e.BadRequest(m.opts.name, "invalid rpc type:%s", req.Type)
	}

	exit, err := handler.ValidateMessageType(msgType)
	if exit && err != nil {
		return e.BadRequest(m.opts.name, "invalid rpc type:%s", req.Type)
	} else if err != nil {
		logger.Warnf("invalid message type, error: %s", err.Error())
	}
	args := []reflect.Value{handler.Receiver, reflect.ValueOf(ctx)}
	arg, err := unmarshalHandlerArg(handler, m.opts.serializer, req.GetMsg().GetData())
	if err != nil {
		return e.BadRequest(m.opts.name, "invalid arg:%s", err.Error())
	}
	if arg != nil {
		args = append(args, reflect.ValueOf(arg))
	}
	if handler.IsRawArg && handler.Method.Type.NumIn() == 4 {
		args = append(args, reflect.ValueOf(rt.Method))
	}
	resp, err := util.Pcall(handler.Method, args)

	if msgType == message.Notify {
		resp = []byte("ack")
	}

	if err != nil {
		return e.BadRequest(m.opts.name, err.Error())
	}
	data, _ := serializeReturn(m.opts.serializer, resp)
	res.Data = data
	return nil
}
func (m *McbServer) handleRPCUser(ctx context.Context, req *proto_mcbeam.Request, res *proto_mcbeam.Response, rt *route.Route) error {

	handler, ok := m.handlers[rt.Short()]
	if !ok {
		return e.NotFound(m.opts.name, "not find method:%s", rt.Short())
	}
	msgType, err := getMsgType(req.GetMsg().GetType())
	if err != nil {
		return e.BadRequest(m.opts.name, "invalid rpc type:%s", req.Type)
	}

	exit, err := handler.ValidateMessageType(msgType)
	if exit && err != nil {
		return e.BadRequest(m.opts.name, "invalid rpc type:%s", req.Type)
	} else if err != nil {
		logger.Warnf("invalid message type, error: %s", err.Error())
	}
	a, err := agent.NewRemote(req.GetSession(), req.Msg.Reply, m.opts.rpcClient, req.FrontendID, m.opts.serializer)

	ctx = context.WithValue(ctx, constants.SessionCtxKey, a.Session)
	args := []reflect.Value{handler.Receiver, reflect.ValueOf(ctx)}
	arg, err := unmarshalHandlerArg(handler, m.opts.serializer, req.GetMsg().GetData())
	if err != nil {
		return e.BadRequest(m.opts.name, "invalid arg:%s", err.Error())
	}
	if arg != nil {
		args = append(args, reflect.ValueOf(arg))
	}
	if handler.IsRawArg && handler.Method.Type.NumIn() == 4 {
		args = append(args, reflect.ValueOf(rt.Method))
	}
	resp, err := util.Pcall(handler.Method, args)

	if msgType == message.Notify {
		resp = []byte("ack")
	}

	if err != nil {
		return e.BadRequest(m.opts.name, err.Error())
	}
	data, _ := serializeReturn(m.opts.serializer, resp)
	res.Data = data
	return nil
}
func (h *Handler) ValidateMessageType(msgType message.Type) (exitOnError bool, err error) {
	if h.MessageType != msgType {
		switch msgType {
		case message.Request:
			err = constants.ErrRequestOnNotify
			exitOnError = true

		case message.Notify:
			err = constants.ErrNotifyOnRequest
		}
	}
	return
}
