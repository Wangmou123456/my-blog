<template>
  <div class="about">
    <my-info />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MyInfo from '../_cpns/myInfo.vue'

export default defineComponent({
  name: 'about',
  components: { MyInfo },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
