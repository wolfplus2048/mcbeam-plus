
GOPATH:=$(shell go env GOPATH)

.PHONY: proto
proto:
	protoc --proto_path=. --micro_out=. --go_out=. protos/mcbeam.proto
#	pbjs -t static-module -w commonjs -o proto/tcp/bundle.js proto/tcp/tcp.proto
#	pbts -o proto/tcp/bundle.d.ts proto/tcp/bundle.js
#	protoc --js_out=import_style=commonjs,binary:. proto/gate/gate.proto
#	browserify proto/gate/exports.js > proto/gate/bundle.js

    

.PHONY: build
build: proto

	go build -o mcbeam-service *.go

.PHONY: test
test:
	go test -v ./... -cover

.PHONY: docker
docker:
	docker build . -t mcbeam-service:latest
