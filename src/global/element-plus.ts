import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'

import {
  ElBacktop,
  ElButton,
  ElCard,
  ElContainer,
  ElHeader,
  ElMain,
  ElPagination,
  ElPopover,
  ElRow,
  ElCol,
  ElTabs,
  ElTabPane,
  ElInput,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElTable,
  ElTableColumn,
  ElAside,
  ElDialog,
  ElSelect,
  ElOption
} from 'element-plus'

const components = [
  ElButton,
  ElContainer,
  ElHeader,
  ElCard,
  ElPopover,
  ElMain,
  ElPagination,
  ElBacktop,
  ElRow,
  ElCol,
  ElTabs,
  ElTabPane,
  ElInput,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElTable,
  ElTableColumn,
  ElAside,
  ElDialog,
  ElRow,
  ElSelect,
  ElOption
]

export default function (app: App): void {
  for (const cpns of components) {
    app.component(cpns.name, cpns)
  }
}
