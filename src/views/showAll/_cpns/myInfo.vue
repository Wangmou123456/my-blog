<template>
  <div class="my-info">
    <div class="my-header">
      <p>个人简介</p>
      <ul>
        <template v-for="item in myLists" :key="item.id">
          <li>{{ item.content }}</li>
        </template>
        <li>1749298515@qq.com</li>
      </ul>
    </div>

    <div class="my-header">
      <p>项目介绍</p>
      <div class="project">
        <div>
          前端: 使用vue3+ TypeScript等技术栈，做了简单适配
          后期可能考虑适配移动端。。。<a
            target="blank"
            href="https://github.com/Wangmou123456/my-blog"
            ><i class="el-icon-share">链接</i></a
          >
        </div>
        <div>
          后端基于node, 使用koa.js + 原生mysql(为了练习mysql语句)写成!
          <a target="blank" href="https://github.com/Wangmou123456/my-blog-end"
            >链接</a
          >
        </div>
        <div>奥里给 冲冲冲！！！</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const myLists = [
      { content: '大三的' },
      { content: '软件工程的学生' },
      { content: '爱好打游戏,敲代码' },
      { content: '---《温馨提示:学开前端就很少打游戏了》' },
      { content: '爱好白嫖' },
      { content: '女友一枚， 活泼可爱' },
      { content: '- ----（偶尔发发神经）' },
      { content: '个人邮箱:' }
    ]
    return {
      myLists
    }
  }
})
</script>

<style lang="less" scoped>
.my-info {
  width: 100%;
  height: 800px;
  // background-color: #fff;
  border-radius: 30px;
  padding: 10px;
  overflow: hidden;
  .my-header {
    p {
      font-size: 40px;
      font-weight: 700;
      color: rgb(0, 0, 0);
      margin: 20px;
      padding: 10px;
    }

    ul li {
      font-size: 20px;
      font-weight: normal;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 10px;
      margin-left: 20px;

      &:last-child {
        background-image: linear-gradient(
          180deg,
          rgba(13, 185, 215, 0.55) 0,
          rgba(13, 185, 215, 0.55)
        );
        background-position: 0 100%;
        background-repeat: repeat-x;
        background-size: 5px 5px;
        text-decoration: none;
        transition: all 0.4s ease;
        &:hover {
          background-position: 100% 100%;
        }
      }
    }

    .project {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      div {
        padding: 20px;
      }
    }

    a {
      color: rgb(0, 88, 251);
      &:hover {
        color: rgb(236, 114, 13);
      }
    }
  }
}
</style>
