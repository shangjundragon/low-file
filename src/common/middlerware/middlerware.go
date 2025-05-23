package middlerware

import (
	"github.com/gin-gonic/gin"
)

func MiddleWare(engine *gin.Engine) {
	engine.Use(corsMiddleware())
	engine.Use(ossMiddleware())
	engine.Use(traceMiddleware())
	engine.Use(authMiddleware())
}
