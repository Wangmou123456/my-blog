<template>
  <div>
    <el-form>
      <template v-if="!formData.options">
        <template v-for="item in formItems" :key="item.label">
          <el-row :spam="8">
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-col :span="24">
                <el-form-item :label="item.label" label-width="100px">
                  <el-input
                    :placeholder="item.placeholder"
                    v-model="formData[`${item.field}`]"
                    style="width: 80%"
                  ></el-input
                ></el-form-item>
              </el-col>
            </template>
            <template v-if="!item.type">
              <md-editor v-model="formData[`${item.field}`]" />
            </template>
          </el-row>
        </template>
      </template>
      <template v-if="formData.options">
        <el-select v-model="formData.itemLabels" multiple>
          <el-option
            v-for="item in formData.options"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </template>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

export default defineComponent({
  components: { MdEditor },
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )
    return { formData }
  }
})
</script>

<style scoped></style>
