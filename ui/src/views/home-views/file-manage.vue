<template>
  <div class="fx-column page-container fx-gp05" style="padding: 0.5rem 1rem;">
    <div class="fx al-ct ju-sb">
      <n-breadcrumb class="fx al-ct">
        <n-breadcrumb-item>
          <div @click="handleClickRootFolder" class="fx al-ct fx-gp02">
            <img :src="folderSvg" width="15px" height="15px">
            <span>根目录</span>
          </div>
        </n-breadcrumb-item>
        <n-breadcrumb-item @click="handleClickBreadcrumbs(index)" style="cursor: pointer"
                           v-for="(item, index) in breadcrumbs" :key="item">
          {{ item }}
        </n-breadcrumb-item>

      </n-breadcrumb>
      <div class="fx al-ct fx-gp10">
        <n-button @click="handleClickRefresh" size="small">
          刷新
          <template #icon>
            <n-icon size="20">
              <Refresh/>
            </n-icon>
          </template>
        </n-button>
        <n-button type="primary" size="small" @click="handleClickCreateFolder">
          创建文件夹
          <template #icon>
            <n-icon size="20">
              <AddSharp/>
            </n-icon>
          </template>
        </n-button>
        <n-button type="primary" size="small" @click="handleClickUpload">
          上传文件
          <template #icon>
            <n-icon size="20">
              <CloudUpload/>
            </n-icon>
          </template>
        </n-button>
        <n-button type="primary" size="small" @click="handleClickUpload({directory: true})">
          上传文件夹
          <template #icon>
            <n-icon size="20">
              <CloudUpload/>
            </n-icon>
          </template>
        </n-button>
      </div>
    </div>

    <div ref="tableScrollbar" style="flex: 1;" class="fx fx-gp05">
      <n-data-table @update:checked-row-keys="handleCheckRow" :row-key="rowKey" class="fx-1"
                    :max-height="tableMaxHeight" :columns="columns" :data="dataList"/>
      <!--      选中多个文件-->
      <div v-if="checkedRowKeys.length > 0" class="fx-column fx-gp10 al-ct"
           style="width: 250px;height: 100%;border: 1px solid #ccc;border-radius: 4px;padding: 0.5rem 1rem">

        <div class="fs ju-fe">
          <n-icon size="40" style="float: right;cursor: pointer">
            <Close @click="clearSelectFile"/>
          </n-icon>
        </div>

        <n-button @click="handleClickCheckRowDownload" block size="small" type="primary">
          下载
          <template #icon>
            <n-icon size="20">
              <CloudDownload/>
            </n-icon>
          </template>
        </n-button>
        <n-button :disabled="checkedRowKeys.length > 1" @click="handleClickCheckRowShare" block size="small"
                  type="primary">分享
          <template #icon>
            <n-icon size="20">
              <ShareSocial/>
            </n-icon>
          </template>
        </n-button>
        <n-button :disabled="checkedRowKeys.length > 1" @click="handleClickCheckRowPreview" block size="small"
                  type="primary">
          预览
          <template #icon>
            <n-icon size="20">
              <Eye/>
            </n-icon>
          </template>
        </n-button>

        <n-button @click="handleClickCheckRowDelete" block size="small" type="error" ghost>删除
          <template #icon>
            <n-icon size="20">
              <TrashBin/>
            </n-icon>
          </template>
        </n-button>

      </div>
      <!--      点击单个文件-->
      <div v-if="checkedRowKeys.length === 0 && selectFile" class="fx-column fx-gp10 al-ct"
           style="width: 250px;height: 100%;border: 1px solid #ccc;border-radius: 4px;padding: 0.5rem 1rem">

        <div class="fs ju-fe">
          <n-icon size="40" style="float: right;cursor: pointer">
            <Close @click="clearSelectFile"/>
          </n-icon>
        </div>
        <div style="text-align: center">
          {{ selectFile.name }}
        </div>
        <n-button @click="handleClickDownload" block size="small" type="primary">
          下载
          <template #icon>
            <n-icon size="20">
              <CloudDownload/>
            </n-icon>
          </template>
        </n-button>
        <n-button @click="handleClickShare" block size="small" type="primary">分享
          <template #icon>
            <n-icon size="20">
              <ShareSocial/>
            </n-icon>
          </template>
        </n-button>
        <n-button @click="handleClickPreview" block size="small" type="primary">
          预览
          <template #icon>
            <n-icon size="20">
              <Eye/>
            </n-icon>
          </template>
        </n-button>
        <n-button @click="handleCopyPath" block size="small" type="primary">
          复制路径
          <template #icon>
            <n-icon size="20">
              <Copy/>
            </n-icon>
          </template>
        </n-button>

        <n-button @click="handleClickDelete" block size="small" type="error" ghost>删除
          <template #icon>
            <n-icon size="20">
              <TrashBin/>
            </n-icon>
          </template>
        </n-button>

        <n-popselect @update-value="handleDownloadQRCode" :options="[{label: '下载', value: 'download'}]">
          <n-qr-code id="qr-code" :size="150" :value="selectFileLink"/>
        </n-popselect>


      </div>
    </div>
  </div>
</template>
<script setup lang="jsx">
import request from '@/src/common/request.js'
import {computed, onMounted, ref, useTemplateRef, watch, withModifiers} from "vue";
import folderSvg from '@/src/assets/svg/folder.svg'
import pdfSvg from '@/src/assets/svg/pdf.svg'
import textSvg from '@/src/assets/svg/text.svg'
import imgSvg from '@/src/assets/svg/img.svg'
import {AddSharp, Close, CloudDownload, CloudUpload, Eye, Refresh, ShareSocial, TrashBin,Copy} from '@vicons/ionicons5'
import {useLoadingBar, useModal} from 'naive-ui'
import funcUploadFile from "@/src/components/func-comp/func-upload-file/index.jsx";
import funcModalConfirm from "@/src/components/func-comp/func-modal-confirm/index.jsx";
import {copyText} from "@/src/common/utils.js";

const modal = useModal();
const loadingBar = useLoadingBar();
import SysStore from "@/src/store/sys-store.js";

const tableScrollbarRef = useTemplateRef('tableScrollbar');
const tableMaxHeight = ref(100);
const checkedRowKeys = ref([]);

function clearCheckedRowKeys() {
  console.log('清除选中行')
  checkedRowKeys.value = [];
}

function rowKey(row) {
  return row.filePath
}

function handleCheckRow(rowKeys) {
  checkedRowKeys.value = rowKeys
}

onMounted(async () => {
  tableMaxHeight.value = tableScrollbarRef.value.clientHeight - 100;
  await getList()

})
const currentFolder = ref(undefined);
watch(() => currentFolder.value, val => {
  selectFile.value = undefined
})

async function getList() {
  const {data} = await request({
    method: 'post',
    url: '/folderFiles',
    data: {
      currentFolder: currentFolder.value,
    }
  })
  dataList.value = data
}

const dataList = ref([]);
const selectFile = ref(undefined)

function handleClickName(row) {
  if (row.type === 'folder') {
    // 点击的是文件夹 当前路径修改为这个文件夹
    currentFolder.value = row.filePath;
    breadcrumbs.value = row.filePath.split('/')

    getList()
  }
  if (row.type === 'file') {
    // 点击的是文件，右侧显示操作栏
    selectFile.value = row
  }

  clearCheckedRowKeys()
}

const svgMap = new Map([
  ['pdf', <img src={pdfSvg} width="15px" height="15px"></img>],
  ['txt', <img src={textSvg} width="15px" height="15px"></img>],
  ['jpg', <img src={imgSvg} width="15px" height="15px"></img>],
  ['jpeg', <img src={imgSvg} width="15px" height="15px"></img>],
  ['png', <img src={imgSvg} width="15px" height="15px"></img>],
])

function readerFileIcon(row) {
  if (row.type === 'folder') {
    return <img src={folderSvg} width="15px" height="15px"></img>
  }
  const ext = row.name.substring(row.name.lastIndexOf('.') + 1);
  return svgMap.get(ext) || <img src={textSvg} width="15px" height="15px"></img>

}

async function handleClickDeleteFolder(row) {

  await request.loadingRequest({
    loadingBar,
    url: '/del',
    method: 'post',
    data: {
      filePath: row.filePath
    }
  });
  $message.success('删除成功');
  getList()
}

const columns = [
  {
    type: 'selection',
  },
  {
    title: '文件名', key: 'name', render: (row) => {
      return <div onClick={() => handleClickName(row)} style="cursor: pointer;width: 100%"
                  class="fx al-ct ju-sb fx-gp02 mouse-active-show-container">
        <div class="fx al-ct fx-gp05">
          {readerFileIcon(row)}
          <span>{row.name}</span>
        </div>
        {
          row.type === 'folder'
              ? <n-icon class="mouse-active-show-element" size="20">
                <Close onClick={withModifiers(() => handleClickDeleteFolder(row), ['stop', 'prevent'])}/>
              </n-icon>
              : null
        }

      </div>
    }
  },
  {
    title: '文件大小', align: 'center', key: 'size', width: 250, ellipsis: true, render: (row) => {
      let bytes = row.size;
      let result = '';

      if (bytes >= Math.pow(1024, 3)) {
        // 大于等于 1GB
        result = (bytes / Math.pow(1024, 3)).toFixed(2) + ' GB';
      } else if (bytes >= Math.pow(1024, 2)) {
        // 大于等于 1MB
        result = (bytes / Math.pow(1024, 2)).toFixed(2) + ' MB';
      } else if (bytes >= 1024) {
        // 大于等于 1KB
        result = (bytes / 1024).toFixed(2) + ' KB';
      } else {
        // 小于 1KB
        result = bytes + ' B';
      }

      return <span>{result}</span>;
    }
  },
  {title: '最近更新', align: 'center', key: 'mtime', ellipsis: true, width: 250},
]

const breadcrumbs = ref([])

function handleClickRootFolder() {
  currentFolder.value = undefined;
  breadcrumbs.value = [];
  getList()
}

// 点击面包屑 修改当前路径 和面包屑
function handleClickBreadcrumbs(index) {
  currentFolder.value = breadcrumbs.value.slice(0, index + 1).join('/');
  breadcrumbs.value = currentFolder.value.split('/')
  getList()
}

function handleClickRefresh() {
  clearSelectFile()
  getList()
}

// 前后不能有空格
function noSideSpace(value) {
  return !value.startsWith(" ") && !value.endsWith(" ")
}

function handleClickCreateFolder() {
  clearSelectFile();
  const inputRef = ref(null)
  const folderName = ref('');
  const instance = modal.create({
    title: '创建文件夹',
    style: {
      width: '400px',
      padding: '0.5rem'
    },
    preset: 'card',
    onAfterEnter() {
      inputRef.value.focus()
    },
    content: () => {
      return <div class="fx-column al-ct fx-gp05">
        <n-input allow-input={noSideSpace} autofocus={true} ref={inputRef} placeholder="请输入文件夹名称"
                 v-model={[folderName.value, 'value']}/>
        <div class="fx ju-fe al-ct fx-gp10" style="width: 100%">
          <n-button onClick={confirm} type="primary">确认</n-button>
          <n-button onClick={() => instance.destroy()}>取消</n-button>
        </div>
      </div>
    }
  });

  async function confirm() {
    if (!folderName.value) {
      $message.error('文件夹名称必填');
      return
    }
    await request({
      url: '/createDir',
      method: 'post',
      data: {
        dir: currentFolder.value ? `${currentFolder.value}/${folderName.value}` : folderName.value
      }
    });
    $message.success('创建文件夹成功');
    instance.destroy();
    await getList()
  }
}

/**
 * 点击上传文件/夹
 * @param options
 * @param {Boolean} [options.directory] 默认 false 是否上传文件夹
 */
function handleClickUpload(options = {}) {
  const {directory = false} = options
  clearSelectFile()
  const instance = funcUploadFile({
    otherNUploadProps: {
      // 'directory-dnd': true,
      directory
    },
    modal,
    loadingBar,
    multiple: true,
    async uploadFunc(options) {
      const formData = new FormData()
      formData.append('file', options.file.file);
      const filename = currentFolder.value
          ? `${currentFolder.value}/${options.file.name}`
          : options.file.name;
      formData.append('filename', filename);
      const res = await request.loadingRequest({
        loadingBar,
        method: 'post',
        url: '/upload',
        data: formData,
      });
      return res
    },
    emits: {
      uploadSuccess() {
        instance.destroy()
        getList()
      }
    },
  })
}

function clearSelectFile() {
  selectFile.value = undefined;
}

async function handleClickCheckRowDelete() {
  const checkedData = dataList.value.filter(item => checkedRowKeys.value.includes(item.filePath));
  await funcModalConfirm({modal, text: '确认删除所选中的文件吗？'})
  const failDataName = []
  for (const data of checkedData) {
    try {
      await request({
        url: '/del',
        method: 'post',
        data: {
          filePath: data.filePath
        }
      });
    } catch (e) {
      console.error(e)
      failDataName.push(data.name)
    }
  }
  clearCheckedRowKeys()
  if (failDataName.length > 0) {
    $message.error(`删除失败：${failDataName.join(', ')}`)
  }
  getList()
}
function handleCopyPath() {
  copyText(selectFile.value.filePath)
}
async function handleClickDelete() {
  await funcModalConfirm({modal})
  await request.loadingRequest({
    loadingBar,
    url: '/del',
    method: 'post',
    data: {
      filePath: selectFile.value.filePath
    }
  });
  $message.success('删除成功')
  clearSelectFile()
  clearCheckedRowKeys()
  getList()
}

function handleDownloadQRCode() {
  const canvas = document.querySelector("#qr-code")?.querySelector("canvas");
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.download = "QRCode.png";
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

const selectFileLink = computed(() => {
  return `${SysStore.value.externalLink}/${encodeURIComponent(selectFile.value.filePath)}`
})

function getFileLink(data) {
  return `${SysStore.value.externalLink}/${encodeURIComponent(data.filePath)}`
}

function handleClickCheckRowDownload() {
  const datas = dataList.value.filter(f => checkedRowKeys.value.includes(f.filePath));
  if (datas.some(s => s.type === 'folder')) {
    $message.error('文件夹不支持下载');
    return
  }
  if (datas.length === 1) {
    window.open(getFileLink(datas[0]), '_blank');
    return;
  }

}

function handleClickDownload() {
  const link = `${selectFileLink.value}?action=attachment`
  window.open(link, '_blank');
}

function handleClickPreview() {
  const link = `${selectFileLink.value}`
  window.open(link, '_blank');
}

async function handleClickCheckRowShare() {
  const data = dataList.value.find(f => f.filePath === checkedRowKeys.value[0]);
  if (data.type === 'folder') {
    $message.error('文件夹不支持分享');
    return
  }
  const link = getFileLink(data);
  copyText(link)

}


function handleClickCheckRowPreview() {
  const data = dataList.value.find(f => f.filePath === checkedRowKeys.value[0]);
  if (data.type === 'folder') {
    $message.error('文件夹不支持预览');
    return
  }
  const link = getFileLink(data);
  window.open(link, '_blank');
}

async function handleClickShare() {
  const link = selectFileLink.value;
  copyText(link)
}

</script>
<style scoped lang="scss">


</style>
