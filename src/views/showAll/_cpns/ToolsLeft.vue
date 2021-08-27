<template>
  <div class="tools-left">
    <template v-for="item in tools" :key="item.id" class="text item">
      <el-card shadow="always" class="my-el-col">
        <div class="my-el-col-div" @click="handleClick(item.href)">
          <template v-if="item.img">
            <img :src="item.img" alt="" />
          </template>

          <a target="_blank" :href="item.href">{{ item.content }}</a>
        </div>
      </el-card>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const tools = [
      {
        img: 'https://less.bootcss.com/public/ico/favicon.ico',
        href: 'https://lesscss.org/',
        content: 'less'
      },
      {
        img: 'https://vue3js.cn/docs/logo.png',
        href: 'https://vue3js.cn/docs/zh/',
        content: 'vue-next'
      },
      {
        img: 'https://www.lodashjs.com/img/favicon.ico',
        href: 'https://www.lodashjs.com/',
        content: 'lodash'
      },
      {
        img: 'https://element-plus.org/favicon.ico',
        href: 'https://element-plus.org/#/zh-CN',
        content: 'element-plus'
      },
      {
        img: '',
        href: 'https://www.koajs.com.cn/',
        content: 'koajs'
      },
      {
        img: '',
        href: 'https://imzbf.github.io/md-editor-v3/',
        content: 'md-editor-v3'
      }
    ]

    const handleClick = (url: string) => {
      window.open(url)
    }
    return { tools, handleClick }
  }
})
</script>

<style lang="less" scoped>
.tools-left {
  width: var(--my-weight);
}
.my-el-col {
  display: inline-block;
  width: 30%;
  height: 100px;
  margin: 5px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease;
  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
    box-shadow: 2px 2px 10px 5px rgba(39, 179, 189, 0.6);
  }
  .my-el-col-div {
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }
}

img {
  width: 50px;
  height: 50px;
}
</style>
