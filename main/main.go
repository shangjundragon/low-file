package main

import (
	"github.com/spf13/viper"
	_ "low-file/src/bootstrap"
	"low-file/src/global"
	"low-file/src/routers"
)

func main() {
	router := routers.InitRouter()
	port := viper.GetString("Port")
	global.Logger.Info("- http://localhost" + port)
	_ = router.Run(port)
}
