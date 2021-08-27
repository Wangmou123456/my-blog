<template>
  <Table
    :list-data="dataList"
    v-bind="contentConfig"
    v-model:page="pageInfo"
    :listCount="dataCount"
  >
    <!-- 1 header中的插槽 -->
    <template #handerHandler>
      <el-button type="primary" size="medium" @click="handleNewClick"
        >新建博客</el-button
      >
      <el-button icon="el-icon-refresh" @click="getPageData"></el-button>
    </template>
    <template #handler="scope">
      <div class="handleButton">
        <el-button
          icon="el-icon-edit"
          size="mini"
          type="text"
          @click="handleEditClick(scope.row)"
          >编辑</el-button
        >
        <el-button
          icon="el-icon-edit"
          size="mini"
          type="text"
          @click="handleDeleteClick(scope.row)"
          >删除</el-button
        >

        <el-button
          v-if="pageName === 'blog'"
          icon="el-icon-edit"
          size="mini"
          type="text"
          @click="handleAddClick(scope.row)"
          >修改标签</el-button
        >
      </div>
    </template>
  </Table>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue'
import Table from '@/base-ui/table'
import { useStore } from '@/store'

import { ElMessage } from 'element-plus'

export default defineComponent({
  components: { Table },
  props: {
    contentConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['editBtnClick', 'newBtnClick', 'addBtnClick'],
  setup(props, { emit }) {
    const store = useStore()

    // 1 双向绑定 pageInfo
    const pageInfo = ref({
      currentPage: 1,
      pageSize: 10
    })

    watch(pageInfo, () => {
      console.log(1123)

      getPageData()
    })
    const getPageData = () => {
      console.log(pageInfo.value)
      // 获取数据
      store.dispatch('getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          limit: pageInfo.value.pageSize
        }
      })
    }
    // 3 从vuex中获取数据
    const dataList = computed(() =>
      store.getters['pageListData'](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters['pageListCount'](props.pageName)
    )

    // 5 删除/编辑、新建操作
    const handleDeleteClick = (item: any) => {
      store
        .dispatch('back/deletePageDataAction', {
          pageName: props.pageName,
          id: item.id
        })
        .then(() => {
          ElMessage({
            type: 'success',
            message: '删除成功!'
          })
        })
    }

    const handleNewClick = () => {
      emit('newBtnClick')
    }

    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }
    const handleAddClick = (item: any) => {
      emit('addBtnClick', item)
    }
    return {
      dataList,
      dataCount,
      pageInfo,
      getPageData,
      handleDeleteClick,
      handleNewClick,
      handleEditClick,
      handleAddClick
    }
  }
})
</script>

<style scoped></style>
