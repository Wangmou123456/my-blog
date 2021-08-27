<template>
  <div class="container page-component__scroll">
    <router-view></router-view>
  </div>

  <el-backtop target=".page-component__scroll " :bottom="100">
    <div
      style="
         {
          height: 100%;
          width: 100%;
          background-color: #f2f5f6;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
          text-align: center;
          line-height: 40px;
          color: #1989fa;
        }
      "
    >
      UP
    </div>
  </el-backtop>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.container {
  width: 75vw;
  // background-color: rgb(22, 22, 22);
  margin-left: 5vw;
  margin-top: 30px;
  padding: 10px;
  border-radius: 20px;
  transition: all 1s;
}
</style>
<style lang="less" scoped>
@media screen and (max-width: 576px) {
  .container {
    width: 90vw;
    position: absolute;
    top: 50px;
  }
}
</style>
