package handlers

import (
	"github.com/gin-gonic/gin"
	"low-file/src/common/model"
	"low-file/src/global"
	"math"
)

type FileRecordListQueryParam struct {
	model.PageQuery
}

func FileRecordList(c *gin.Context) {
	resHandler, _ := global.GetLoggerAndResponseHandler(c)

	// 1. 参数绑定与校验
	var pageQuery FileRecordListQueryParam
	if err := c.ShouldBind(&pageQuery); err != nil {
		global.ResFail(resHandler.WithMsg("查询参数绑定失败").WithError(err))
		return
	}

	// 参数默认值设置
	if pageQuery.PageNum < 1 {
		pageQuery.PageNum = 1
	}
	if pageQuery.PageSize <= 0 || pageQuery.PageSize > 100 {
		pageQuery.PageSize = 10
	}

	// 2. 查询总数（带错误处理）
	var count int64
	err := global.SQLite.QueryRow(
		`SELECT COUNT(*) FROM file_records`,
	).Scan(&count)
	if err != nil {
		global.ResFail(resHandler.WithMsg("总数查询失败").WithError(err))
		return
	}

	// 快速返回空结果
	if count == 0 {
		global.ResOk(resHandler.WithData(gin.H{
			"rows":  []interface{}{},
			"total": 0,
		}))
		return
	}

	// 3. 分页查询（添加 ORDER BY 保证顺序）
	offset := (pageQuery.PageNum - 1) * pageQuery.PageSize
	rows, err := global.SQLite.Query(
		`SELECT * FROM file_records 
         ORDER BY create_time DESC 
         LIMIT ? OFFSET ?`,
		pageQuery.PageSize, offset,
	)
	if err != nil {
		global.ResFail(resHandler.WithMsg("分页查询失败").WithError(err))
		return
	}
	defer rows.Close() // 确保关闭结果集

	// 4. 数据解析
	var records []model.FileRecord
	for rows.Next() {
		var s model.FileRecord
		if err := rows.Scan(&s.Id, &s.FileName, &s.FilePath, &s.FileSize, &s.CreateTime); err != nil {
			global.ResFail(resHandler.WithMsg("解析记录行失败").WithError(err))
			return
		}
		records = append(records, s)
	}

	// 5. 检查遍历错误
	if err := rows.Err(); err != nil {
		global.ResFail(resHandler.WithMsg("结果集遍历错误").WithError(err))
		return
	}

	// 6. 返回完整分页信息
	_ = int(math.Ceil(float64(count) / float64(pageQuery.PageSize)))
	global.ResOk(resHandler.WithData(gin.H{
		"rows":  records,
		"total": count,
	}))
}
