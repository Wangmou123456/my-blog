<template>
  <div class="home">
    <main-item :label-item="labelItem" pageName="blog"></main-item>
    <div class="home-slider">
      <about-my></about-my>
      <my-labels @handleClick="handleClick"></my-labels>
      <life-motto />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'

import MainItem from '@/components/show-all/main-item'
import AboutMy from '@/views/showAll/_cpns/AboutMy.vue'
import MyLabels from '@/views/showAll/_cpns/MyLabels.vue'
import LifeMotto from '@/views/showAll/_cpns/LifeMotto.vue'

import { useStore } from '@/store'

export default defineComponent({
  name: 'home',
  components: { MainItem, AboutMy, MyLabels, LifeMotto },
  setup() {
    // 标志
    const labelItem = ref<number>()

    // 处理标签点击
    const handleClick = (id: number) => {
      labelItem.value = id
    }
    const store = useStore()
    const labelId = computed(() => store.state.labelId)
    watch(
      labelId,
      (newValue) => {
        if (newValue === 0) {
          return
        } else {
          labelItem.value = newValue
        }
      },
      {
        immediate: true
      }
    )
    return {
      labelItem,
      handleClick
    }
  }
})
</script>

<style lang="less" scoped>
.home {
  min-height: 700px;
  display: flex;
}
</style>
