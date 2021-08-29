<template>
  <div class="main">
    <MainHeader />
    <main-container />
    <main-footer />
  </div>
  <!-- <el-footer height="50px"> -->

  <!-- </el-footer> -->
  <el-backtop target=".main"></el-backtop>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MainHeader from '@/components/show-all/main-header'
import MainContainer from '@/components/show-all/main-container'
import MainFooter from '@/components/show-all/main-footer'

export default defineComponent({
  components: {
    MainHeader,
    MainContainer,
    MainFooter
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.main {
  width: 100vw;
  height: 100vh;
  // background: url('~@/assets/svg/bg.svg') fixed;
  background: url('~@/assets/img/my-bg.jpg') fixed;
  background-size: 100%;
  z-index: -1;
  overflow: auto;
  overflow-x: hidden;
}
</style>
