<template>
  <div class="life-motto">
    <el-card class="about-labels" shadow="always">
      <template #header>
        <div class="card-header">
          <span>人 生 格 言</span>
        </div>
      </template>
      <div class="content">--承认自己的无知,乃是开启智慧的大门</div>
    </el-card>
  </div>
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
.life-motto {
  border-radius: 30px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  overflow: hidden;
  transition: all 1s;
  &:hover {
    transform: translateY(-10px);
  }
  .card-header {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(168, 143, 143);
  }
  .content {
    margin: 20px auto;
  }
}
</style>

<style lang="less" scoped>
@media screen and (max-width: 750px) {
  .life-motto {
    display: none;
  }
}
</style>
