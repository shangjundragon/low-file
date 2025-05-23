package middlerware

import (
	"errors"
	"fmt"
	"github.com/duke-git/lancet/v2/strutil"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
	"github.com/spf13/viper"
	"go.uber.org/zap"
	"low-file/src/global"
	"strings"
)

func authMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		if viper.GetBool("Public") == true {
			c.Next()
			return
		}
		whitePaths := viper.GetStringSlice("WhitePath")
		requestPath := c.Request.URL.Path

		// 检查请求路径是否在白名单中
		for _, path := range whitePaths {
			if strings.HasPrefix(requestPath, path) {
				c.Next()
				return
			}
		}

		secret := []byte(viper.GetString("JwtSecret"))
		tokenString := c.GetHeader("Authorization")
		resHandler, logger := global.GetLoggerAndResponseHandler(c, zap.String("Authorization", tokenString))
		resHandler.WithCode(401)
		if strutil.IsBlank(tokenString) {
			global.ResFail(resHandler.WithMsg("未提供令牌"))
			return
		}

		_, exists := global.OnLineToken[tokenString]
		if !exists {
			logger.Info("OnLineToken中不存在")
			global.ResFail(resHandler.WithMsg("令牌已失效"))
			c.Abort()
			return
		}

		// 传入token字符串和验证钩子函数，返回值就是一个Token结构体
		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			// 验证签名算法是否匹配
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("不匹配的签名算法: %s", token.Header["alg"])
			}
			// 返回验证密钥
			return secret, nil
		})

		if token.Valid {
			c.Next()
			return
		}

		var errMsg string
		if errors.Is(err, jwt.ErrTokenMalformed) {
			errMsg = "错误的令牌"
		} else if errors.Is(err, jwt.ErrTokenExpired) || errors.Is(err, jwt.ErrTokenNotValidYet) {
			errMsg = "令牌已经过期"
		} else {
			errMsg = "令牌处理异常"
		}
		delete(global.OnLineToken, tokenString)
		global.ResFail(resHandler.WithMsg(errMsg))
		c.Abort()
		return
	}
}
