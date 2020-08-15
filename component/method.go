package component

import (
	"errors"
	"github.com/golang/protobuf/proto"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/conn/message"
	"github.com/wolfplus2048/mcbeam-plus/constants"
	gateproto "github.com/wolfplus2048/mcbeam-plus/protos"
	"github.com/wolfplus2048/mcbeam-plus/serialize"
	"github.com/wolfplus2048/mcbeam-plus/util"
	"reflect"
	"unicode"
	"unicode/utf8"
)

func suitableHandlerMethods(typ reflect.Type, nameFunc func(string) string) map[string]*Handler {
	methods := make(map[string]*Handler)
	for m := 0; m < typ.NumMethod(); m++ {
		method := typ.Method(m)
		mt := method.Type
		mn := method.Name
		if isHandlerMethod(method) {
			raw := false
			if mt.NumIn() == 3 && mt.In(2) == typeOfBytes {
				raw = true
			}
			if nameFunc != nil {
				mn = nameFunc(mn)
			}
			var msgType message.Type
			if mt.NumOut() == 0 {
				msgType = message.Notify
			} else {
				msgType = message.Request
			}
			handler := &Handler{
				Method:      method,
				IsRawArg:    raw,
				MessageType: msgType,
			}
			if mt.NumIn() == 3 {
				handler.Type = mt.In(2)
			}
			methods[mn] = handler
		}
	}
	return methods
}

// isHandlerMethod decide a method is suitable component method
func isHandlerMethod(method reflect.Method) bool {
	mt := method.Type
	// Method must be exported.
	if method.PkgPath != "" {
		return false
	}

	// Method needs two or three ins: receiver, context.Context and optional []byte or pointer.
	if mt.NumIn() != 2 && mt.NumIn() != 3 && mt.NumIn() != 4 {
		return false
	}

	if t1 := mt.In(1); !t1.Implements(typeOfContext) {
		return false
	}

	if mt.NumIn() == 3 && mt.In(2).Kind() != reflect.Ptr && mt.In(2) != typeOfBytes {
		return false
	}

	// Method needs either no out or two outs: interface{}(or []byte), error
	if mt.NumOut() != 0 && mt.NumOut() != 2 {
		return false
	}

	if mt.NumOut() == 2 && (mt.Out(1) != typeOfError || mt.Out(0) != typeOfBytes && mt.Out(0).Kind() != reflect.Ptr) {
		return false
	}

	return true
}
func isExported(name string) bool {
	w, _ := utf8.DecodeRuneInString(name)
	return unicode.IsUpper(w)
}

func unmarshalRemoteArg(handler *Handler, payload []byte) (interface{}, error) {
	var arg interface{}
	if handler.Type != nil {
		arg = reflect.New(handler.Type.Elem()).Interface()
		pb, ok := arg.(proto.Message)
		if !ok {
			return nil, constants.ErrWrongValueType
		}
		err := proto.Unmarshal(payload, pb)
		if err != nil {
			return nil, err
		}
	}
	return arg, nil
}

func getMsgType(msgTypeIface interface{}) (message.Type, error) {
	var msgType message.Type
	if val, ok := msgTypeIface.(message.Type); ok {
		msgType = val
	} else if val, ok := msgTypeIface.(gateproto.MsgType); ok {
		msgType = ConvertProtoToMessageType(val)
	} else {
		return msgType, errors.New("invalid message type provided")
	}
	return msgType, nil
}

func ConvertProtoToMessageType(protoMsgType gateproto.MsgType) message.Type {
	var msgType message.Type
	switch protoMsgType {
	case gateproto.MsgType_MsgRequest:
		msgType = message.Request
	case gateproto.MsgType_MsgNotify:
		msgType = message.Notify
	}
	return msgType
}
func unmarshalHandlerArg(handler *Handler, serializer serialize.Serializer, payload []byte) (interface{}, error) {
	if handler.IsRawArg {
		return payload, nil
	}

	var arg interface{}
	if handler.Type != nil {
		arg = reflect.New(handler.Type.Elem()).Interface()
		err := serializer.Unmarshal(payload, arg)
		if err != nil {
			return nil, err
		}
	}
	return arg, nil
}
func serializeReturn(ser serialize.Serializer, ret interface{}) ([]byte, error) {
	res, err := util.SerializeOrRaw(ser, ret)
	if err != nil {
		logger.Errorf("Failed to serialize return: %s", err.Error())
		res, err = util.GetErrorPayload(ser, err)
		if err != nil {
			logger.Errorf("cannot serialize message and respond to the client ", err.Error())
			return nil, err
		}
	}
	return res, nil
}
