<template>
  <div>
    <el-dialog
      title="提示"
      v-model="dialogVisible"
      width="90%"
      center
      destroy-on-close
    >
      <my-form v-bind="modalConfig" v-model="formData"> </my-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import MyForm from '@/base-ui/form'

import { useStore } from '@/store'

import { ElMessage } from 'element-plus'

export default defineComponent({
  components: { MyForm },
  props: {
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    modalConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    // 侦听
    watch(
      () => props.defaultInfo,
      (newValue) => {
        console.log(newValue)
        // 修改博客有关标签
        if (newValue.options) {
          formData.value['id'] = newValue['id']
          formData.value['options'] = newValue['options']
          formData.value['itemLabels'] = newValue['itemLabels']

          console.log(formData.value)
          return
        } else {
          formData.value = {}
          for (const item of props.modalConfig.formItems) {
            formData.value[`${item.field}`] = newValue[`${item.field}`]
          }
        }
      }
    )

    // 点击确定按钮的逻辑
    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        if (props.defaultInfo.options) {
          store
            .dispatch('back/editPageDataById', {
              pageName: props.pageName,
              labels: formData.value.itemLabels,
              id: props.defaultInfo.id
            })
            .then(() => {
              ElMessage({
                type: 'success',
                message: '修改标签成功!'
              })
            })
          return
        }
        store
          .dispatch('back/editPageDataAction', {
            pageName: props.pageName,
            editData: { ...formData.value },
            id: props.defaultInfo.id
          })
          .then(() => {
            ElMessage({
              type: 'success',
              message: '修改成功!'
            })
          })
      } else {
        store
          .dispatch('back/createPageDataAction', {
            pageName: props.pageName,
            newData: { ...formData.value }
          })
          .then(() => {
            ElMessage({
              type: 'success',
              message: '新增成功!'
            })
          })
      }
    }
    return {
      dialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<style scoped></style>
