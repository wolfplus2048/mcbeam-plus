package mcb_server

import (
	"context"
	"github.com/golang/protobuf/proto"
	"github.com/micro/go-micro/v2/errors"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/agent"
	"github.com/wolfplus2048/mcbeam-plus/conn/message"
	"github.com/wolfplus2048/mcbeam-plus/constants"
	"github.com/wolfplus2048/mcbeam-plus/protos"
	"github.com/wolfplus2048/mcbeam-plus/route"
	"github.com/wolfplus2048/mcbeam-plus/util"
	"reflect"
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
	Opts     Options
	name     string
	typ      reflect.Type
	receiver reflect.Value
	handlers map[string]*Handler
}

func NewMcbServer(handler interface{}, opts ...Option) *McbServer {
	s := &McbServer{
		typ:      reflect.TypeOf(handler),
		receiver: reflect.ValueOf(handler),
	}
	for _, o := range opts {
		o(&s.Opts)
	}
	if name := s.Opts.name; name != "" {
		s.name = name
	} else {
		s.name = reflect.Indirect(s.receiver).Type().Name()
	}
	s.ExtractHandler()
	return s
}

func (m *McbServer) ExtractHandler() error {
	typeName := reflect.Indirect(m.receiver).Type().Name()
	if typeName == "" {
		return errors.InternalServerError(m.name, "no service name for type %s", m.typ.String())
	}
	if !isExported(typeName) {
		return errors.InternalServerError(m.name, " %s is not exported", typeName)
	}
	m.handlers = suitableHandlerMethods(m.typ, m.Opts.nameFunc)

	if len(m.handlers) == 0 {
		str := ""
		// To help the user, see if a pointer receiver would work.
		method := suitableHandlerMethods(reflect.PtrTo(m.typ), m.Opts.nameFunc)
		if len(method) != 0 {
			str = "type " + m.name + " has no exported methods of handler type (hint: pass a pointer to value of that type)"
		} else {
			str = "type " + m.name + " has no exported methods of handler type"
		}
		return errors.InternalServerError(m.name, str)
	}

	for i := range m.handlers {
		m.handlers[i].Receiver = m.receiver
	}

	for name := range m.handlers {
		logger.Infof("registered handler %s, isRawArg: %s", name, m.handlers[name].IsRawArg)
	}
	return nil
}

func (m *McbServer) Call(ctx context.Context, req *mcbeamproto.Request, res *mcbeamproto.Response) error {
	rt, err := route.Decode(req.GetMsg().GetRoute())
	if err != nil {
		return errors.BadRequest(m.name, "cannot decode route: %s", req.GetMsg().GetRoute())
	}
	switch {
	case req.Type == mcbeamproto.RPCType_User:
		return m.handleRPCUser(ctx, req, res, rt)
	case req.Type == mcbeamproto.RPCType_Sys:
		return m.handleRPCSys(ctx, req, res, rt)
	default:
		return errors.BadRequest(m.name, "invalid rpc type:%s", req.Type)
	}
}
func (m *McbServer) handleRPCSys(ctx context.Context, req *mcbeamproto.Request, res *mcbeamproto.Response, rt *route.Route) error {
	return nil
}
func (m *McbServer) handleRPCUser(ctx context.Context, req *mcbeamproto.Request, res *mcbeamproto.Response, rt *route.Route) error {

	handler, ok := m.handlers[rt.Method]
	if !ok {
		return errors.NotFound(m.name, "not find method:%s", rt.Method)
	}
	msgType, err := getMsgType(req.GetMsg().GetType())
	if err != nil {
		return errors.BadRequest(m.name, "invalid rpc type:%s", req.Type)
	}

	exit, err := handler.ValidateMessageType(msgType)
	if exit && err != nil {
		return errors.BadRequest(m.name, "invalid rpc type:%s", req.Type)
	} else if err != nil {
		logger.Warnf("invalid message type, error: %s", err.Error())
	}
	a, err := agent.NewRemote(req.GetSession(), req.Msg.Reply, m.Opts.rpcClient, req.FrontendID, m.Opts.serializer)
	ctx = context.WithValue(ctx, constants.SessionCtxKey, a.Session)
	args := []reflect.Value{handler.Receiver, reflect.ValueOf(ctx)}
	arg, err := unmarshalHandlerArg(handler, m.Opts.serializer, req.GetMsg().GetData())
	if err != nil {
		return errors.BadRequest(m.name, "invalid arg:%s", err.Error())
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
		return errors.BadRequest(m.name, err.Error())
	}
	data, _ := serializeReturn(m.Opts.serializer, resp)
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
