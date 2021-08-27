<template>
  <div>
    <page-content
      :contentConfig="contentConfig"
      pageName="label"
      @editBtnClick="handleEditClick"
      @newBtnClick="handleNewClick"
      @addBtnClick="handleAddClick"
    ></page-content>

    <page-modal
      ref="pageModalRef"
      pageName="label"
      :modalConfig="modalConfig"
      :default-info="defaultInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { contentConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
export default defineComponent({
  components: { PageContent, PageModal },
  setup() {
    const pageModalRef = ref<InstanceType<typeof PageModal>>()
    const defaultInfo = ref({})

    const handleNewClick = () => {
      console.log(pageModalRef.value)

      if (pageModalRef.value) {
        defaultInfo.value = {}
        pageModalRef.value.dialogVisible = true
      }
    }

    const handleEditClick = (item: any) => {
      console.log(item)

      if (pageModalRef.value) {
        defaultInfo.value = {
          id: item.id,
          title: item.title,
          description: item.description
        }
        pageModalRef.value.dialogVisible = true
      }
    }
    return {
      pageModalRef,
      contentConfig,
      modalConfig,
      defaultInfo,
      handleNewClick,
      handleEditClick
    }
  }
})
</script>

<style scoped></style>
