<template>
  <div class="header fx al-ct ju-sb">
    <div class="fx al-ct ">
      <div style="font-weight: bold;width: 150px;font-size: 1.1rem">low-file</div>
      <n-tabs v-model:value="tab" type="line">
        <n-tab name="Index">
          首页
        </n-tab>
        <n-tab name="FileManage">
          文件管理
        </n-tab>
      </n-tabs>
    </div>
    <n-select style="width: 250px" size="small" v-model:value="SysStore.externalLink"
              :options="SysStore.externalLinkOptions"/>
  </div>
  <router-view/>
</template>
<script setup lang="jsx">
import {onMounted} from "vue";
import {useMessage} from "naive-ui";
import router from "@/src/router/index.js";
import SysStore from "@/src/store/sys-store.js";

const tab = ref(undefined)
onMounted(() => {
  document.querySelector('#Loading')?.remove()
  window['$message'] = useMessage()
  tab.value = router.currentRoute.value.name
})

const routerTable = {
  Index: {
    name: 'Index'
  },
  FileManage: {
    name: 'FileManage'
  }
}

watch(() => SysStore.value.externalLink, val => {
  localStorage.setItem('externalLink', val);
})


watch(() => tab.value, val => {
  router.push({
    name: routerTable[val].name
  })
})

</script>
<style scoped lang="scss">
.header {
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ccc;
  height: 60px;
  background-color: #fff;
}
</style>
