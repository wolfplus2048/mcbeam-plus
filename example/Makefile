.PHONY: proto
proto:
	protoc --proto_path=. --micro_out=. --go_out=. proto/example.proto
	protoc --js_out=import_style=commonjs,binary:. proto/example.proto
	browserify proto/exports.js > proto/bundle.js
	copy proto\bundle.js web\ /y
