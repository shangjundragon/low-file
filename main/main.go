package main

import (
	_ "low-file/src/bootstrap"
	"low-file/src/global"
	"low-file/src/routers"
)

func main() {
	router := routers.InitRouter()
	global.Logger.Info("- http://localhost" + global.Port)
	_ = router.Run(global.Port)
}
