<template>
  <div class="table">
    <div class="header">
      <slot name="handerHandler"></slot>
    </div>
  </div>
  <el-table :data="listData" border style="width: 100%">
    <el-table-column
      type="index"
      label="序号"
      align="center"
      width="60"
    ></el-table-column>
    <template v-for="item in propList" :key="item.prop">
      <el-table-column v-bind="item" show-overflow-tooltip align="center">
        <template #default="scope">
          <slot :name="item.slotName" :row="scope.row">{{
            scope.row[item.prop]
          }}</slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
  <div class="footer">
    <slot name="footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.currentPage"
        :page-sizes="[10, 20, 30]"
        :page-size="page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listCount"
      >
      </el-pagination>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    listCount: {
      type: Number,
      default: 0
    }
  },
  setup(props, { emit }) {
    const handleSelectChange = (value: any) => {
      emit('selectChange', value)
    }

    const handleCurrentChange = (currentPage: number) => {
      console.log(currentPage)

      emit('update:page', { ...props.page, currentPage })
    }

    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }
    return {
      handleSelectChange,
      handleCurrentChange,
      handleSizeChange
    }
  }
})
</script>

<style lang="less" scoped>
.table {
  // .header {
  //   height: 300px;
  // }
}

.footer {
  margin-top: 15px;
  text-align: right;
}
</style>
