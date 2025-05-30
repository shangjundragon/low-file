<template>

  <n-config-provider
      :locale="zhCN"
      :date-locale="dateZhCN"
      :theme-overrides="themeOverrides"
      :abstract="true"
      :inline-theme-disabled="true"
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

const themeOverrides = ref({
  LoadingBar: {
    height: '5px',
  },
})
</script>

<style scoped>

</style>
