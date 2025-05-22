package handlers

import (
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func ExternalLink(c *gin.Context) {
	links := viper.GetStringSlice("ExternalLink")
	c.JSON(200, gin.H{"data": links})
}
