<template>
  <div class="blog">
    <template v-if="blog">
      <div class="blog-header">
        <p class="title">{{ blog.title }}</p>
        <p class="title-desc">{{ blog.titleDesc }}</p>
        <div class="author">
          <span>wzp 发布于 {{ createTime }}</span>
          <div class="blog-label">
            相关分类:
            <template v-for="item in blog.labels" :key="item.id">
              -{{ item.name }}
            </template>
          </div>
        </div>

        <div class="blog-footer">
          <el-button @click="themeChange">主题切换</el-button>
        </div>
      </div>
    </template>

    <md-editor v-model="blog.content" previewOnly="true" :theme="theme" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

import { useRoute } from 'vue-router'

import { getBlogById as getBlog } from '@/serve/showAll'

import { timeFormat } from '@/utils/time-format'

export default defineComponent({
  components: {
    MdEditor
  },
  setup() {
    const blogId = ref()
    const blog = ref({})
    const route = useRoute()
    const theme = ref('light')
    const createTime = ref('')

    onMounted(() => {
      blogId.value = route.params.blogId
      getBlogById()
    })

    // 获取文章内容
    const getBlogById = async () => {
      const res = await getBlog(blogId.value)
      blog.value = res
      createTime.value = timeFormat(res.createTime)
    }

    const themeChange = () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark'
    }

    return {
      blogId,
      blog,
      theme,
      themeChange,
      createTime
    }
  }
})
</script>

<style lang="less" scoped>
.blog {
  padding: 20px;
  border-radius: 20px;

  .blog-header {
    border-bottom: 1px solid seagreen;
    .title {
      font-size: 50px;
      font-weight: 600;
      text-align: left;
    }

    .title-desc {
      padding: 10px 0 0 20px;
    }

    .author {
      margin: 30px 0;
      font-size: 20px;

      .blog-label {
        font-size: 15px;
        margin: 10px;
        margin-top: 20px;

        text-align: left;
      }
    }

    .blog-footer {
      margin: 20px;
      text-align: right;
    }
  }
}
</style>
<style lang="less" scoped>
@media screen and (max-width: 750px) {
  .blog-header {
    display: none;
  }
}
</style>
