module github.com/wolfplus2048/mcbeam-plus

go 1.14

require (
	github.com/golang/mock v1.3.1
	github.com/golang/protobuf v1.4.2
	github.com/google/uuid v1.1.1
	github.com/micro/go-micro/v2 v2.9.1
	github.com/micro/micro/v2 v2.9.2-0.20200723091102-91f4c201d7e1 // indirect
	github.com/nats-io/nats.go v1.10.0
	github.com/stretchr/testify v1.6.1
	golang.org/x/net v0.0.0-20200520182314-0ba52f642ac2
	google.golang.org/grpc v1.27.0
	google.golang.org/protobuf v1.25.0
)

replace google.golang.org/grpc => google.golang.org/grpc v1.26.0
