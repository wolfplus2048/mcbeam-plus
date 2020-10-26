module github.com/wolfplus2048/mcbeam-plus/v3

go 1.14

require (
	github.com/golang/mock v1.3.1
	github.com/golang/protobuf v1.4.3
	github.com/google/uuid v1.1.2
	github.com/micro/go-micro/v2 v2.9.1
	github.com/micro/go-plugins/wrapper/monitoring/prometheus/v2 v2.9.1
	github.com/micro/micro/v3 v3.0.0-beta.7
	github.com/nats-io/nats.go v1.10.0
	github.com/prometheus/client_golang v1.5.1
	github.com/stretchr/testify v1.6.1
	github.com/wolfplus2048/mcbeam-plus v0.1.5
	golang.org/x/net v0.0.0-20200707034311-ab3426394381
	google.golang.org/genproto v0.0.0-20200526211855-cb27e3aa2013
	google.golang.org/grpc v1.27.0
	google.golang.org/protobuf v1.25.0
)

replace google.golang.org/grpc => google.golang.org/grpc v1.26.0
