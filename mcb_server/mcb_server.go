package mcb_server

import (
	"context"
	"errors"
	"github.com/golang/protobuf/proto"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/conn/message"
	"github.com/wolfplus2048/mcbeam-plus/constants"
	e "github.com/wolfplus2048/mcbeam-plus/errors"
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
		return errors.New("no service name for type " + m.typ.String())
	}
	if !isExported(typeName) {
		return errors.New("type " + typeName + " is not exported")
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
		return errors.New(str)
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
		res.Error = &mcbeamproto.Error{
			Code: e.ErrBadRequestCode,
			Msg:  "cannot decode route",
			Metadata: map[string]string{
				"route": req.GetMsg().GetRoute(),
			},
		}
		return errors.New(e.ErrBadRequestCode)
	}
	switch {
	case req.Type == mcbeamproto.RPCType_User:
		return m.handleRPCUser(ctx, req, res, rt)
	case req.Type == mcbeamproto.RPCType_Sys:
		return m.handleRPCSys(ctx, req, res, rt)
	default:
		res.Error = &mcbeamproto.Error{
			Code: e.ErrBadRequestCode,
			Msg:  "invalid rpc type",
			Metadata: map[string]string{
				"route": req.GetMsg().GetRoute(),
			},
		}
		return errors.New(e.ErrBadRequestCode)
	}
}
func (m *McbServer) handleRPCSys(ctx context.Context, req *mcbeamproto.Request, res *mcbeamproto.Response, rt *route.Route) error {
	rt, err := route.Decode(req.GetMsg().GetRoute())
	if err != nil {
		res.Error = &mcbeamproto.Error{
			Code: e.ErrNotFoundCode,
			Msg:  "cannot decode route",
			Metadata: map[string]string{
				"route": req.GetMsg().GetRoute(),
			},
		}
		return errors.New(e.ErrNotFoundCode)
	}
	handler, ok := m.handlers[rt.Method]
	if !ok {
		res.Error = &mcbeamproto.Error{
			Code: e.ErrNotFoundCode,
			Msg:  "route not found",
			Metadata: map[string]string{
				"route": rt.Short(),
			},
		}
		return errors.New(e.ErrNotFoundCode)
	}
	msgType, err := getMsgType(req.GetMsg().GetType())
	if err != nil {
		res.Error = &mcbeamproto.Error{
			Code: e.ErrInternalCode,
			Msg:  err.Error(),
		}
		return errors.New(e.ErrInternalCode)
	}

	exit, err := handler.ValidateMessageType(msgType)
	if exit && err != nil {
		res.Error = &mcbeamproto.Error{
			Code: e.ErrBadRequestCode,
			Msg:  err.Error(),
		}
		return errors.New(e.ErrNotFoundCode)
	} else if err != nil {
		logger.Warnf("invalid message type, error: %s", err.Error())
	}

	args := []reflect.Value{handler.Receiver, reflect.ValueOf(ctx)}
	arg, err := unmarshalHandlerArg(handler, m.Opts.serializer, req.GetMsg().GetData())
	if err != nil {
		res.Error = &mcbeamproto.Error{
			Code: e.ErrBadRequestCode,
			Msg:  err.Error(),
		}
		return err
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
		logger.Warnf(err.Error())
		res.Error = &mcbeamproto.Error{
			Code: e.ErrUnknownCode,
			Msg:  err.Error(),
		}

		if val, ok := err.(*e.Error); ok {
			res.Error.Code = val.Code
			if val.Metadata != nil {
				res.Error.Metadata = val.Metadata
			}
		}
	} else {
		data, _ := serializeReturn(m.Opts.serializer, resp)
		res.Data = data
	}
	return err

}
func (m *McbServer) handleRPCUser(ctx context.Context, req *mcbeamproto.Request, res *mcbeamproto.Response, rt *route.Route) error {
	_, ok := m.handlers[rt.Short()]
	if !ok {
		res.Error = &mcbeamproto.Error{
			Code: e.ErrNotFoundCode,
			Msg:  "route not found",
			Metadata: map[string]string{
				"route": rt.Short(),
			},
		}
		return errors.New("route not found")
	}
	//params := []reflect.Value{handler.Receiver, reflect.ValueOf(ctx)}
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

func (m *McbServer) PushToUser(ctx context.Context, push *mcbeamproto.Push, response *mcbeamproto.Response) error {
	panic("implement me")
}

func (m *McbServer) SessionBindRemote(ctx context.Context, msg *mcbeamproto.BindMsg, response *mcbeamproto.Response) error {
	panic("implement me")
}

func (m *McbServer) KickUser(ctx context.Context, msg *mcbeamproto.KickMsg, answer *mcbeamproto.KickAnswer) error {
	panic("implement me")
}
