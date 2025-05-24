package model

type PageQuery struct {
	PageNum  int64 `json:"pageNum" form:"pageNum"`
	PageSize int64 `json:"pageSize" form:"pageSize"`
}
