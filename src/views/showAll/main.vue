<template>
  <div class="main">
    <MainHeader />
    <main-container />
  </div>
  <el-backtop target=".main"></el-backtop>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MainHeader from '@/components/show-all/main-header'
import MainContainer from '@/components/show-all/main-container'

export default defineComponent({
  components: {
    MainHeader,
    MainContainer
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.main {
  width: 100vw;
  // background: url('~@/assets/svg/bg.svg') fixed;
  background: url('~@/assets/img/my-bg.jpg') fixed;
  background-size: 100%;
  z-index: -1;
  overflow: auto;
  height: 100vh;
  overflow-x: hidden;
}
</style>
