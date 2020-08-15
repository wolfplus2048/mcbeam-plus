.PHONY: proto
#dirs:=gate mgr room
#proto:
#	for d in $(dirs); do \
#  		for f in protos/$$d/*.proto; do \
#  			protoc --proto_path=. --micro_out=. --go_out=. $$f; \
#  			protoc --js_out=import_style=commonjs,binary:. $$f; \
#  			browserify protos/$$d/exports.js > protos/bundle.js; \
#  		done \
#  	done

dirs = gate mgr room
protos := $(foreach dir, $(dirs), $(wildcard protos/$(dir)/*.proto))
exports:=$(foreach dir, $(dirs), $(wildcard protos/$(dir)/exports.js))
proto:
	protoc --proto_path=. --go_out=. $(protos)
	pbjs -t static-module -w commonjs -o protos/proto.js $(protos)
	pbts -o protos/proto.d.ts protos/proto.js