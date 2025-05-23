package handlers

import (
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
	"github.com/spf13/viper"
	"go.uber.org/zap"
	"low-file/src/global"
	"time"
)

type LoginForm struct {
	UserName string `bind:"required" json:"username"`
	Password string `bind:"required" json:"password"`
}

func Token(c *gin.Context) {
	var loginForm LoginForm
	err := c.ShouldBind(&loginForm)
	resHandler, _ := global.GetLoggerAndResponseHandler(c, zap.Any("loginForm", loginForm))
	if err != nil || loginForm.UserName == "" || loginForm.Password == "" {
		global.ResFail(resHandler.WithMsg("参数错误"))
		return
	}

	if loginForm.UserName != viper.GetString("Username") || loginForm.Password != viper.GetString("Password") {
		global.ResFail(resHandler.WithMsg("用户名或密码错误"))
		return
	}

	// hmac的密钥类型是字节数组
	secret := []byte(viper.GetString("JwtSecret"))
	// 创建Claims
	claims := &jwt.RegisteredClaims{
		ExpiresAt: jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(secret)
	global.OnLineToken[tokenString] = gin.H{"tokenString": tokenString}
	global.ResOk(resHandler.WithData(gin.H{"token": tokenString}).WithMsg("登录成功"))

}
