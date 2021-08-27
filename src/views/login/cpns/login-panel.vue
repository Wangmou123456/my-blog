<template>
  <div class="login-panel">
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 博客后台登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-button" type="primary" @click="handleClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
// import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount
    // LoginPhone
  },
  setup() {
    // 1 定义属性
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    // const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref<string>('account')

    // 2 定义方法
    const handleClick = () => {
      accountRef.value?.loginAction(isKeepPassword.value)
    }

    return {
      isKeepPassword,
      accountRef,
      currentTab,
      handleClick
    }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  margin-top: -200px;
  width: 400px;
  border-radius: 30px;
  overflow: hidden;
  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .login-button {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
