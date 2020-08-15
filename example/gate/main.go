package main

import (
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/registry/etcd"
	"github.com/wolfplus2048/mcbeam-plus"
	"github.com/wolfplus2048/mcbeam-plus/component"
	"strings"
)

func main() {
	service := mcbeam.NewService(
		mcbeam.Name("gate"),
		mcbeam.ClientAddress(":3250"),
		mcbeam.Registry(etcd.NewRegistry()),
	)
	if err := service.Init(); err != nil {
		logger.Fatal(err)
	}
	service.Register(&Handler{},
		component.WithHandlerName("auth"),
		component.WithNameFunc(strings.ToLower))
	if err := service.Run(); err != nil {
		logger.Fatal(err)
	}
}
