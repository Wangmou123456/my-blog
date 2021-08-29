<template>
  <footer class="main-footer">
    <p>2020-2021 © wangmm</p>
    <img class="icon" src="~@/assets/img/ICP.png" />
    晋ICP备20003213号-1
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    1

    return {}
  }
})
</script>

<style lang="less" scoped>
.main-footer {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  text-align: center;
  background-color: #475050;
  z-index: 2;
  font-size: 14px;
  color: rgb(129, 122, 122);
}
</style>
