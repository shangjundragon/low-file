<template>
  <div class="header fx al-ct ju-sb">
    <span style="font-weight: bold">low-file</span>
  </div>
  <router-view/>
</template>
<script setup lang="jsx">
import {onMounted, } from "vue";
import { useMessage} from "naive-ui";
onMounted(() => {
  window['$message'] = useMessage()
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
