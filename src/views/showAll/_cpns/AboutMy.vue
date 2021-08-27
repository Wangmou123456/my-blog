<template>
  <el-card class="about-my" shadow="always">
    <template #header>
      <div class="card-header">
        <span>简介</span>
      </div>
    </template>
    <div class="content">
      <div class="avatar">
        <img src="~@/assets/svg/avatar.svg" alt="" />
      </div>
      <div>
        <template v-for="item in infos" :key="item.id">
          <div class="my-content">
            <span class="item-title">{{ item.title }}</span>
            <span>{{ item.answer }}</span>
          </div>
        </template>
      </div>
    </div>

    <div class="footer">
      <el-popover
        placement="top-start"
        :title="content"
        :width="200"
        trigger="hover"
      >
        <template #reference>
          <div>情侣</div>
        </template>
        <div>QAQ</div>
      </el-popover>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const infos: any[] = [
      { id: 1, title: 'name:', answer: 'wmm' },
      { id: 2, title: 'work:', answer: 'student' },
      { id: 2, title: 'age:', answer: '18' },
      { id: 3, title: '...', answer: '...' }
    ]
    const content = '保密~'
    return {
      infos,
      content
    }
  }
})
</script>

<style lang="less" scoped>
.about-my {
  width: 100%;
  border-radius: 30px;
  margin: 10px auto;

  background-color: #fff;
  overflow: hidden;
  transition: all 1s;
  &:hover {
    transform: translateY(-10px);
  }
  .card-header {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }

  .content {
    display: flex;
    justify-content: space-around;
    .my-content {
      &:first-child {
        margin-top: 10px;
      }
      &:last-child {
        margin-bottom: 10px;
      }
      .item-title {
        display: inline-block;
        width: 40px;
        height: 20px;
        margin-right: 10px;
        text-align: right;
      }
    }
    .avatar {
      width: 75px;
      height: 75px;
      border-radius: 30px;
      overflow: hidden;
      margin-top: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .footer {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
<style lang="less" scoped>
@media screen and (max-width: 1000px) {
  .about-my {
    display: none;
  }
}
</style>
