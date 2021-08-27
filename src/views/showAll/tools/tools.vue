<template>
  <div class="tools">
    <tools-left> </tools-left>
    <div class="tools-slider">
      <about-my></about-my>
      <life-motto />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AboutMy from '@/views/showAll/_cpns/AboutMy.vue'
import LifeMotto from '@/views/showAll/_cpns/LifeMotto.vue'

import ToolsLeft from '@/views/showAll/_cpns/ToolsLeft.vue'

export default defineComponent({
  name: 'tools',
  components: { ToolsLeft, AboutMy, LifeMotto },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.tools {
  display: flex;
}
</style>
