<template>
  <div>
    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        {{ name }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-circle-close" @click="handleExitClick"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useStore } from '@/store'
import { useRouter } from 'vue-router'

import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.name)

    const router = useRouter()
    const handleExitClick = () => {
      localCache.deleteCache('blog-token')
      router.push('/login')
    }
    return { name, handleExitClick }
  }
})
</script>

<style scoped></style>
