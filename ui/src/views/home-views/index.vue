<template>
  <div class="fx-column page-container fx-gp05" style="padding: 0.5rem 1rem;">
    <div class="fx ju-sb">
      <div></div>
      <div>
        <n-button @click="handleClickRefresh" size="small">
          刷新
          <template #icon>
            <n-icon size="20">
              <Refresh/>
            </n-icon>
          </template>
        </n-button>
      </div>
    </div>
    <div class="fx-1 fx-column fx-gp10" style="overflow-y: auto;padding: 0 10vw">
      <n-card v-for="item in dataList" :title="item.fileName" :key="item.filePath">
        <div class="fx-column fx-gp05">
          <div class="fx ju-sb">
            <span>{{ item.filePath }}</span>
            <span>{{ formatDate(new Date(item.createTime), 'yyyy-MM-dd HH:mm:ss') }}</span>
          </div>
          <div class="fx ju-fe fx-gp10">
            <img @click="handleQrCode(item)" style="cursor: pointer" :src="qrcodeSvg">
            <img @click="handleCopyLink(item)" style="cursor: pointer" :src="copySvg">
            <img @click="handleDownLoad(item)" style="cursor: pointer" :src="downloadSvg">
          </div>
        </div>
      </n-card>
    </div>

    <div class="fx ju-fe">
      <n-pagination v-model:page="paginationParams.pageNum"
                    :display-order="['quick-jumper', 'pages', 'size-picker']"
                    show-quick-jumper
                    show-size-picker
                    :page-count="Math.ceil(paginationParams.total / paginationParams.pageSize)"
                    :page-size="paginationParams.pageSize"
                    :page-sizes="[10, 20, 50]"
                    :show-size-picker="true"
                    :show-quick-jumper="true"
                    @update:page="paginationParams.handleUpdatePageNum"
                    @update:page-size="paginationParams.handleUpdatePageSize"
      >
        <template #prefix>
          共 {{ paginationParams.total }} 项
        </template>
      </n-pagination>
    </div>
  </div>
</template>
<script setup lang="jsx">
import request from "@/src/common/request.js"
import {useLoadingBar, useModal} from 'naive-ui'
import {Refresh} from "@vicons/ionicons5";
import {formatDate} from 'date-fns'
import qrcodeSvg from "@/src/assets/svg/qrcode.svg";
import downloadSvg from "@/src/assets/svg/download.svg";
import copySvg from "@/src/assets/svg/copy.svg";
import {copyText} from "@/src/common/utils.js";
import SysStore from "@/src/store/sys-store.js";

const loadingBar = useLoadingBar();
const modal = useModal();
onMounted(() => {
  getList()
})
const dataList = ref([])
const paginationParams = ref({
  total: 0,
  pageNum: 1,
  pageSize: 10,
  keyword: undefined,
  handleUpdatePageSize(pageSize) {
    reset()
    paginationParams.value.pageSize = pageSize
    getList()
  },
  handleUpdatePageNum(pageNum) {
    paginationParams.value.pageNum = pageNum
    getList()
  }
})
function handleQrCode(item) {
  modal.create({
    title: '二维码',
    style: {
      width: '300px',
      padding: '0.5rem 1rem'
    },
    preset: 'card',
    content: () => {
      const link = `${SysStore.value.externalLink}/${item.filePath}`
      return <div class="fx al-ct ju-ct">
        <n-qr-code id="qr-code" size={200} value={link}></n-qr-code>
      </div>
    }
  })
}

async function handleCopyLink(item) {
  await copyText(`${SysStore.value.externalLink}/${item.filePath}`);
}
function handleDownLoad(item) {
  window.open(`${SysStore.value.externalLink}/${item.filePath}`, '_blank')
}
function handleClickRefresh() {
  getList()
}

function reset() {

}

async function getList() {
  const {data} = await request.loadingRequest({
    loadingBar,
    method: 'post',
    url: '/file_records_list',
    data: {
      pageNum: paginationParams.value.pageNum,
      pageSize: paginationParams.value.pageSize,
      keyword: paginationParams.value.keyword
    }
  });
  dataList.value = data.rows;
  paginationParams.value.total = data.total
}
</script>
<style scoped lang="scss">

</style>
