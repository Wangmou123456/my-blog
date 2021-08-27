<template>
  <div class="login-account">
    <el-form
      :model="account"
      ref="formRef"
      :rules="rules"
      status-icon
      label-width="60px"
    >
      <el-form-item label="账号" prop="name">
        <el-input
          v-model="account.name"
          type="name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          type="password"
          autocomplete="off"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import Cache from '@/utils/cache'

import { ElMessage } from 'element-plus'

import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: Cache.getCache('name') ?? '',
      password: Cache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (!valid) return
        // 判断是否为记住密码 是则存储用户名密码
        if (isKeepPassword) {
          Cache.setCache('name', account.name)
          Cache.setCache('password', account.password)
          const result = store.dispatch('login/accountLogAction', {
            ...account
          })
          result.catch((err) => {
            ElMessage({
              message: err,
              type: 'error'
            })
            account.password = ''
            account.name = ''
          })
        } else {
          Cache.deleteCache('name')
          Cache.deleteCache('password')
        }
      })
    }

    return {
      account,
      formRef,
      rules,
      loginAction
    }
  }
})
</script>

<style scoped></style>
