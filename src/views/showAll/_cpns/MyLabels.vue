<template>
  <div class="my-labels">
    <el-card class="about-labels" shadow="always">
      <template #header>
        <div class="card-header">
          <span>标签</span>
        </div>
      </template>
      <div class="content">
        <template v-for="item in labels" :key="item.id">
          <div class="label-item" @click="handleBtn(item.id, item.title)">
            {{ item.title }}#
          </div>
        </template>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from 'vue'
import { getAllLabels as getLabels } from '@/serve/showAll/index'

export default defineComponent({
  emits: ['handleClick'],
  setup(props, { emit }) {
    const labels = ref<any[]>([])
    const { appContext }: any = getCurrentInstance()

    const getAllLabels = async () => {
      const { data: res } = await getLabels({
        limit: 100,
        offset: 0
      })
      labels.value = res.slice(0, 2)
    }

    const handleBtn = (labelId: number, title: string) => {
      emit('handleClick', labelId)

      appContext.config.globalProperties.$emitter.emit('itemLabel', title)
    }

    getAllLabels()
    return {
      labels,
      handleBtn
    }
  }
})
</script>

<style lang="less" scoped>
.my-labels {
  border-radius: 30px;
  margin: 10px auto;

  padding: 20px;
  background-color: #fff;
  overflow: hidden;
  transition: all 1s;
  &:hover {
    transform: translateY(-10px);
  }
  .about-labels {
    .card-header {
      display: flex;
      justify-content: center;
    }

    .content {
      display: flex;
      padding-left: 20px;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      font-size: 20px;
      .label-item {
        width: 50%;
        padding: 3px;
        &:hover {
          color: aqua;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

<style lang="less" scoped>
@media screen and (max-width: 1000px) {
  .my-labels {
    display: none;
  }
}
</style>
