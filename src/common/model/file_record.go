package model

type FileRecord struct {
	Id         int64  `json:"id"`
	FileName   string `json:"fileName"`
	FilePath   string `json:"filePath"`
	FileSize   int64  `json:"fileSize"`
	CreateTime int64  `json:"createTime"`
}
