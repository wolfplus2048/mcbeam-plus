
GOPATH:=$(shell go env GOPATH)

.PHONY: proto
proto:
	protoc --proto_path=. --micro_out=. --go_out=. protos/mcbeam.proto
#	pbjs -t static-module -w commonjs -o protos/tcp/bundle.js protos/tcp/tcp.protos
#	pbts -o protos/tcp/bundle.d.ts protos/tcp/bundle.js
#	protoc --js_out=import_style=commonjs,binary:. protos/gateway/gateway.protos
#	browserify protos/gateway/exports.js > protos/gateway/bundle.js

    

.PHONY: build
build: proto

	go build -o mcbeam-service *.go

.PHONY: test
test:
	go test -v ./... -cover

.PHONY: docker
docker:
	docker build . -t mcbeam-service:latest
