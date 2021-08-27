<template>
  <div>
    <page-content
      :contentConfig="contentConfig"
      pageName="blog"
      @editBtnClick="handleEditClick"
      @newBtnClick="handleNewClick"
      @addBtnClick="handleAddClick"
    ></page-content>

    <page-modal
      pageName="blog"
      :modalConfig="modalConfig"
      :default-info="defaultInfo"
      ref="pageModalRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { contentConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { useStore } from '@/store'
export default defineComponent({
  components: { PageContent, PageModal },
  setup() {
    const pageModalRef = ref<InstanceType<typeof PageModal>>()
    const defaultInfo = ref({})
    const handleEditClick = (item: any) => {
      if (pageModalRef.value) {
        defaultInfo.value = item
        pageModalRef.value.dialogVisible = true
      }
    }

    const handleNewClick = () => {
      if (pageModalRef.value) {
        defaultInfo.value = {}
        pageModalRef.value.dialogVisible = true
      }
    }

    const store = useStore()
    const handleAddClick = (item: any) => {
      const Labels = store.state.labelList.map((item) => {
        return item.title
      })
      let itemLabels
      if (item.labels) {
        itemLabels = item.labels.map((item: any) => {
          return item.name
        })
      } else {
        itemLabels = []
      }
      console.log('itemLabels', itemLabels)
      if (pageModalRef.value) {
        defaultInfo.value = { id: item.id, options: Labels, itemLabels }
        pageModalRef.value.dialogVisible = true
      }
    }
    return {
      contentConfig,
      handleEditClick,
      pageModalRef,
      defaultInfo,
      modalConfig,
      handleNewClick,
      handleAddClick
    }
  }
})
</script>

<style scoped></style>
