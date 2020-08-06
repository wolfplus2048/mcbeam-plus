.PHONY: proto
proto:
	protoc --proto_path=. --micro_out=. --go_out=. protos/gate/gate.proto
	protoc --js_out=import_style=commonjs,binary:. protos/gate/gate.proto
	browserify protos/gate/exports.js > protos/gate/bundle.js