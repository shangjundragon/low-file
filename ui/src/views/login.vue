<template>
  <div class="fx-column al-ct ju-ct " style="height: 100vh">
    <div style="width: 400px" class="fx-column al-ct ju-ct fx-gp10">
      <div class="fx ju-ct" style="font-size: 1.5rem;font-weight: bold">
        登录
      </div>
      <n-form style="width: 100%" ref="formRef" :model="form" :rules="rules" label-placement="left" label-width="100px">

        <n-form-item path="username">
          <n-input autofocus @keyup.enter="handleLogin" v-model:value.trim="form.username" placeholder="请输入用户名"/>
        </n-form-item>
        <n-form-item path="password">
          <n-input @keyup.enter="handleLogin"
                   v-model:value.trim="form.password"
                   type="password" placeholder="请输入密码"
          />
        </n-form-item>
      </n-form>
      <n-button type="primary" @click="handleLogin" block>登录</n-button>
    </div>
  </div>
</template>
<script setup>
import {onMounted, useTemplateRef, ref} from "vue";
import {useMessage} from "naive-ui";
import request from '@/src/common/request.js'
import router from '@/src/router/index.js'
const VITE_DOC_URL = import.meta.env.VITE_DOC_URL

const formRef = useTemplateRef('formRef')
onMounted(() => {
  window['$message'] = useMessage()
})
console.log('import.meta.env', import.meta.env.MODE)
const form = ref({
  username: import.meta.env.MODE === 'development' ? 'admin' : '',
  password: '',
})
const rules = ref({
  username: [
    {
      required: true,
      message: '请输入账号'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码'
    }
  ],
})

function handleLogin() {
  formRef.value.validate(async (err) => {
    if (err) {
      window.$message.error('校验失败')
      return
    }
    const {data} = await request({
      url: '/token',
      method: 'POST',
      data: form.value
    })
    if (data.token) {
      window.$message.success('登录成功')
      localStorage.setItem('authorization-token', data.token);
      await router.push({
        name: 'FileManage'
      })
    }

  })
}
</script>
<style scoped lang="scss">

</style>
