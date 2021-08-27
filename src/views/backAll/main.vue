<template>
  <el-container class="main">
    <el-aside
      class="common-aside"
      :class="!isCollapse ? 'el-aside' : 'el-aside-change'"
    >
      <my-menu :collapse="isCollapse"></my-menu>
    </el-aside>
    <el-container class="container">
      <el-header>
        <my-header @foldChange="handleChangeFoldMenu"></my-header>
      </el-header>
      <el-main>
        <div>
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MyHeader from '@/components/back-all/my-header'
import MyMenu from '@/components/back-all/my-menu'

export default defineComponent({
  components: {
    MyHeader,
    MyMenu
  },
  setup() {
    const isCollapse = ref(false)
    const handleChangeFoldMenu = (flag: boolean) => {
      isCollapse.value = flag
    }

    return {
      isCollapse,
      handleChangeFoldMenu
    }
  }
})
</script>

<style lang="less" scoped>
.main {
  display: flex;
  width: 100vw;
  height: 100vh;

  .common-aside {
    height: 90%;
    border-radius: 30px;
    overflow: hidden;
    margin: 10px;
    background-color: rgb(166, 173, 103);
    transition: all 1s ease;
  }
  .el-aside {
    width: 200px;
  }
  .el-aside-change {
    width: 60px;
  }
  .container {
    flex: 1;
    margin: 10px;
    margin-left: 20px;
    .el-header {
      background-color: #edf0f3;
      color: rgb(7, 7, 7);
      text-align: center;
      line-height: 60px;
      border-radius: 30px;
    }
  }
}
</style>
