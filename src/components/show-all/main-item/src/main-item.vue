<template>
  <div class="my-item">
    <el-main class="main-item">
      <template v-if="myLabelFlag">
        <template v-for="item in blogList" :key="item">
          <div
            class="list-content"
            @click="routes.push(`/showAll/blog/${item.id}`)"
          >
            <div class="header">
              <p class="title">{{ item.title }}</p>
              <p>author: {{ item?.author?.name }}</p>
            </div>

            <p class="desc">{{ item.titleDesc }}</p>

            <div class="bottom">
              <div>
                <span
                  ><i class="el-icon-ice-cream-round"></i>
                  {{ item.createTime.slice(0, 10) }}</span
                >
              </div>

              <div class="category">
                <i class="el-icon-chat-square"></i>
                <template v-for="labelItem in item.labels" :key="labelItem.id">
                  - {{ labelItem.name }}
                </template>
              </div>
            </div>
          </div>
        </template>
      </template>

      <template v-else-if="blogsLabel">
        <template v-for="item in blogsLabel" :key="item">
          <div
            class="list-content"
            @click="routes.push(`/showAll/blog/${item.id}`)"
          >
            <div class="header">
              <p class="title">{{ item.title }}</p>
              <p>author: {{ item.author.name }}</p>
            </div>

            <p class="desc">{{ item.titleDesc }}</p>

            <div class="bottom">
              <div>
                <span
                  ><i class="el-icon-ice-cream-round"></i>
                  {{ item.createTime.slice(0, 10) }}</span
                >
              </div>
              <template>
                <div class="category">
                  <i class="el-icon-chat-square">label:</i>
                  <template
                    v-for="labelItem in item.labels"
                    :key="labelItem.id"
                  >
                    - {{ labelItem.name }}
                  </template>
                </div>
              </template>
            </div>
          </div>
        </template>
      </template>

      <template v-else>
        <div class="list-content">
          <h1>尽情期待！！！</h1>
        </div>
      </template>

      <div class="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[5, 10]"
          :page-size="pageSize"
          :layout="layout"
          :total="total"
        >
        </el-pagination>
      </div>
    </el-main>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getBlogsList, getBlogsListByLabelId } from '@/serve/showAll'

export default defineComponent({
  props: {
    labelItem: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const pageSize = ref(5) // 每页数量
    const total = ref(null) // 总数
    const pageNum = ref<number>(1) // 当前页码
    const blogList = ref([]) // 初始化博客列表
    const blogsLabel = ref(null) // 单个标签对应的博客
    const layout = ref('total, sizes, prev, pager, next, jumper')

    const routes = useRouter()

    const handleSizeChange = (val: number) => {
      pageSize.value = val
    }

    const handleCurrentChange = (val: number) => {
      pageNum.value = val
    }

    // 发送请求 请求博客列表
    const params = computed(() => ({
      limit: pageSize.value ?? 0,
      offset: pageSize.value * (pageNum.value - 1) ?? 0
    }))
    // 获取博客列表
    const getBlogs = async () => {
      const data = await getBlogsList(params.value)
      blogList.value = data.data
      total.value = data.count
    }

    // 通过labelid获取博客列表
    const getBlogsByLabelId = async (labelId: number) => {
      console.log(labelId)
      const [data] = await getBlogsListByLabelId(labelId, params.value)
      console.log(data)

      blogsLabel.value = data.blogs
      total.value = data.blogs?.length ?? 0

      layout.value = 'total, prev, pager, next'
    }

    const myLabelFlag = computed(() => {
      if (props.labelItem === 0) {
        return true
      }
      getBlogsByLabelId(props.labelItem)
      return false
    })
    // 监听params 如果变化 重新发送请求
    watch(
      params,
      () => {
        if (myLabelFlag.value === true) {
          getBlogs()
        } else {
          getBlogsByLabelId(props.labelItem)
        }
      },
      {
        immediate: true
      }
    )

    return {
      routes,
      total,
      pageSize,
      pageNum,
      layout,
      blogList,
      blogsLabel,
      myLabelFlag,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.my-item {
  width: var(--my-weight);
  .main-item {
    // border-right: 2px dotted rgb(238, 53, 7);
    .list-content {
      height: 155px;
      margin: 10px;
      padding: 24px 24px 24px 40px;
      border-bottom: 1px solid #eee;
      background-color: white;
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.3s ease-in-out;
      &:hover {
        cursor: pointer;
        transform: translateY(-3px);
      }
      h1 {
        font-size: 30px;
        font-weight: 700;
      }
      &:active {
        background-color: rgb(250, 250, 250);
      }
      .header {
        display: flex;
        justify-content: space-between;
        .title {
          color: #000;
          font-size: 24px;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          &:hover {
            color: rgb(199, 170, 127);
          }
        }
      }

      .desc {
        font-size: 13px;
        color: var(--color-text);
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        padding-right: 100px;
        letter-spacing: 0.2px;
        line-height: 1.5em;
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        span {
          margin: 5px;
        }
      }
    }

    .footer {
      background: white;
      border-radius: 20px;
      padding: 10px;
      margin-top: 15px;
      text-align: center;
    }
  }
}
</style>
<style lang="less" scoped>
@media screen and (max-width: 750px) {
  .my-item {
    width: 100%;
  }
}
</style>
