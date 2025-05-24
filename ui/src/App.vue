<template>

  <n-config-provider
      :locale="zhCN"
      :date-locale="dateZhCN"
  >
    <n-modal-provider>
      <n-loading-bar-provider>
        <n-message-provider>
          <router-view/>

        </n-message-provider>
      </n-loading-bar-provider>
    </n-modal-provider>
  </n-config-provider>

</template>

<script setup>
import {zhCN, dateZhCN} from 'naive-ui'
import request from '@/src/common/request.js'
import SysStore from "@/src/store/sys-store.js";
import {onMounted} from "vue";

onMounted(async () => {
  request({
    url: '/externalLink',
    method: 'get',
  }).then((res) => {
    SysStore.value.externalLinkOptions = res.data.map(m => {
      return {label: m, value: m}
    });
    if (localStorage.getItem('externalLink')) {
      SysStore.value.externalLink = localStorage.getItem('externalLink');
    } else {
      SysStore.value.externalLink = res.data[0];
      localStorage.setItem('externalLink', SysStore.value.externalLink);
    }
  })


})
</script>

<style scoped>

</style>
