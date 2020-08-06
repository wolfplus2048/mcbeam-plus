package main

import (
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/registry/etcd"
	"github.com/wolfplus2048/mcbeam-plus"
)

func main() {
	service := mcbeam.NewService(
		mcbeam.Name("gate"),
		mcbeam.ClientAddress(":3250"),
		mcbeam.WithService(micro.NewService(
			micro.Registry(etcd.NewRegistry()),
		)))
	if err := service.Init(); err != nil {
		logger.Fatal(err)
	}
	service.Register("handler", &Handler{})
	if err := service.Run(); err != nil {
		logger.Fatal(err)
	}
}
