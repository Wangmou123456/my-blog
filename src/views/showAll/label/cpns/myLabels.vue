<template>
  <div class="my-labels">
    <div class="labels">
      <template v-for="item in labels" :key="item.id">
        <div class="my-lab" @click="handleClick(item.id, item.title)">
          <div>{{ item.title }}#</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, getCurrentInstance } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup(props, { emit }) {
    // 获取实例
    const { appContext }: any = getCurrentInstance()

    // 获取数据
    const store = useStore()
    store.dispatch('getLabels', { limit: 100, offset: 0 })
    const labels = computed(() => store.state.labelList)
    const router = useRouter()
    const handleClick = (labelId: number, labelTitle: string) => {
      router.push('/showAll/home')
      store.commit('changeLabelId', labelId)
      appContext.config.globalProperties.$emitter.emit('itemLabel', labelTitle)
    }
    return {
      labels,
      handleClick
    }
  }
})
</script>

<style lang="less" scoped>
.my-labels {
  width: var(--my-weight);

  overflow: hidden;
  padding: 30px;
  font-size: 30px;

  .labels {
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
    border-radius: 30px;
    background: linear-gradient(135deg, #f66, #f90, #3c9, #09f, #66f) left
      center/400% 400%;
    animation: move 10s infinite;
    .my-lab {
      width: 30%;
      height: 20%;
      margin: 8px;
      text-align: center;
      transition: all 2s;

      &:hover {
        cursor: pointer;
        color: rgb(251, 251, 251);
        background-color: rgb(159, 211, 208);
        border-radius: 30px;
        transform: translate3d(0, -10px, 200px);
      }
    }
  }
}
@keyframes move {
  0%,
  100% {
    background-position-x: left;
  }
  50% {
    background-position-x: right;
  }
}
</style>

<style lang="less">
@media screen and (max-width: 750px) {
  .my-lab {
    width: 100% !important;
    margin: 10px;
  }
}
</style>
