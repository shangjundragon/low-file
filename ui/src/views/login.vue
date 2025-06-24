<template>
  <div class="fx-column al-ct ju-ct " style="height: 100vh">
    <div style="width: 400px" class="fx-column  ju-ct fx-gp10">
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
      <n-checkbox v-model:checked="rememberPassword">
        记住密码
      </n-checkbox>
      <n-button type="primary" @click="handleLogin" block>登录</n-button>
    </div>
  </div>
</template>
<script setup>
import {onMounted, useTemplateRef, ref} from "vue";
import {useMessage, useLoadingBar} from "naive-ui";
import request from '@/src/common/request.js'
import router from '@/src/router/index.js'

const loadingBar = useLoadingBar();
const formRef = useTemplateRef('formRef')
onMounted(() => {
  document.querySelector('#Loading')?.remove()
  window['$message'] = useMessage()
})
console.log('import.meta.env', import.meta.env.MODE)
const form = ref({
  username: import.meta.env.MODE === 'development' ? 'admin' : localStorage.getItem('username'),
  password: localStorage.getItem('password'),
})
const rememberPassword = ref(localStorage.getItem('rememberPassword') === 'true')
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

async function handleLogin() {
  await formRef.value.validate();
  if (rememberPassword.value) {
    localStorage.setItem('rememberPassword', 'true');
    localStorage.setItem('username', form.value.username);
    localStorage.setItem('password', form.value.password);
  } else {
    localStorage.removeItem('rememberPassword');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
  const {data} = await request.loadingRequest({
    loadingBar,
    url: '/token',
    method: 'POST',
    data: form.value
  })
  if (data.token) {
    $message.success('登录成功')
    localStorage.setItem('authorization-token', data.token);
    await router.push({
      name: 'Index'
    })
  }
}
</script>
<style scoped lang="scss">

</style>
