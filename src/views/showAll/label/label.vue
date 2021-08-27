<template>
  <div class="label">
    <my-labels></my-labels>
    <div class="home-slider">
      <about-my></about-my>
      <life-motto />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyLabels from './cpns/myLabels.vue'

import AboutMy from '@/views/showAll/_cpns/AboutMy.vue'
import LifeMotto from '@/views/showAll/_cpns/LifeMotto.vue'

export default defineComponent({
  name: 'label',
  components: { MyLabels, AboutMy, LifeMotto },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.label {
  display: flex;
}
</style>
