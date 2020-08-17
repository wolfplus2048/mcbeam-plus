module github.com/wolfplus2048/mcbeam-plus

go 1.14

require (
	github.com/gogo/protobuf v1.2.1
	github.com/golang/protobuf v1.4.2
	github.com/google/uuid v1.1.1
	github.com/gorilla/websocket v1.4.2
	github.com/micro/cli/v2 v2.1.2
	github.com/micro/go-micro/v2 v2.9.1
	github.com/nats-io/nats.go v1.10.0
	github.com/opentracing/opentracing-go v1.2.0
	github.com/stretchr/testify v1.6.1
	google.golang.org/protobuf v1.25.0
)

replace google.golang.org/grpc => google.golang.org/grpc v1.26.0
