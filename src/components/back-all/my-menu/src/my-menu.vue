<template>
  <div class="my-menu">
    <div class="logo">
      <img src="~assets/svg/avatar.svg" alt="logo" />
    </div>
    <el-menu
      :default-active="defaultActive"
      background-color="rgb(166, 173, 103)"
      text-color="white"
      :unique-opened="true"
      active-text-color="#25a550"
      :collapse="collapse"
      :width="collapse ? '60px' : '200px'"
    >
      <template v-for="item in menus" :key="item.id">
        <el-menu-item :index="item.id" @click="handleMenuItem(item.path)">
          <i :class="item.icon"></i>
          <template #title>{{ item.name }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menus = [
      {
        id: '1',
        path: '/back-all/blogs',
        name: '我的博客',
        icon: 'el-icon-document'
      },
      {
        id: '2',
        path: '/back-all/labels',
        name: '我的标签',
        icon: 'el-icon-star-off'
      }
    ]

    const router = useRouter()
    const handleMenuItem = (path: string) => {
      router.push(path)
    }

    const route = useRoute()
    const defaultActive = computed(() => {
      if (route.path === '/back-all/labels') {
        return '2'
      }
      return '1'
    })
    return {
      menus,
      handleMenuItem,
      defaultActive
    }
  }
})
</script>

<style lang="less" scoped>
.my-menu {
  width: 100%;
  height: 100%;

  .logo {
    width: 100%;
    height: 100px;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      height: 50%;
      margin: 0 10px;
      border-radius: 30px;
    }
  }
}
</style>
