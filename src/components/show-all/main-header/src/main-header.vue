<template>
  <div class="main-container">
    <div class="blog">
      <transition
        name="wzp"
        enter-active-class="animate__animated animate__bounce"
      >
        <div class="myBlogName"><span>我 的</span> <span>博 客</span></div>
      </transition>
      <main class="myBlogMain">
        <p>{{ text }}</p>
      </main>
    </div>

    <div class="footer">
      <ul class="main-footer">
        <template v-for="(item, index) in list" :key="index">
          <li
            @click="navClick(item.path)"
            :class="{ active: item.path === newPath }"
          >
            <span icon="item.icon"></span>{{ item.name }}
          </li>
        </template>

        <template v-if="tit">
          <li class="lis-five gradient-bg">
            {{ tit }}
          </li>
        </template>
      </ul>

      <span class="footer-slider"></span>
    </div>

    <div class="main-right"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  computed,
  onMounted,
  getCurrentInstance
} from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  setup() {
    const { appContext }: any = getCurrentInstance() // 创建实例

    const text = ref(' 一个努力的大三学子...')
    const list = ref([
      { name: '首页', path: '/showAll/home', icon: 'icon-home' },
      { name: '标签', path: '/showAll/label', icon: 'icon-fenlei' },
      { name: '工具', path: '/showAll/tools', icon: 'icon-label' },
      { name: '关于', path: '/showAll/about', icon: 'icon-mine' }
    ])

    const tit = ref<string>()

    const router = useRouter()
    const route = useRoute()

    const navClick = (path: string) => {
      if (newPath.value !== path) {
        router.push(path)
      }
    }
    const newPath = computed(() => route.path)

    watch(
      () => route.path,
      (newValue) => {
        if (newValue !== '/showAll/home') {
          tit.value = ''
        }
      }
    )

    // 接受点击标签传过来的值
    onMounted(() => {
      appContext.config.globalProperties.$emitter.on(
        'itemLabel',
        (title: string) => {
          tit.value = `${title}#`
        }
      )
    })
    return {
      text,
      list,
      tit,
      newPath,
      navClick
    }
  }
})
</script>

<style lang="less" scoped>
.main-container {
  width: 100%;
  padding: 3vw 0 0 4vw;
  overflow: hidden;
  .myBlogName {
    font-weight: 600;
    font-size: 60px;
    color: antiquewhite;
    text-shadow: 5px 5px 10px rgb(133, 143, 233);
    span {
      &:first-child {
        font-size: 50px;
      }
    }
  }
  .myBlogMain {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 500;
    color: var(--color-text);
    overflow: hidden;
  }
  .footer {
    width: 100%;

    .main-footer {
      position: relative;
      padding: 10px;
      top: 10px;
      li {
        display: inline-block;
        padding: 10px 20px;
        font-size: 20px;
        font-weight: normal;
        color: rgb(246, 248, 250);
        margin: 0 20px;
        &:first-child {
          margin-left: 60px;
        }
        &:nth-child(-n + 4) {
          &:hover {
            color: black;
            cursor: pointer;
            background-color: #fff;
            border-radius: 30px;
          }
        }
      }
      .lis-five {
        font-size: 30px;
      }
    }
  }

  .main-right {
    position: absolute;
    top: 20%;
    right: 20px;
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 50%;
    overflow: hidden;
    background: url(~@/assets/svg/bg.svg) no-repeat;
    background-size: cover;
  }
}
.active {
  color: black !important;
  cursor: pointer;
  background-color: #fff;
  border-radius: 30px;
}

.gradient-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 30px;
  background: linear-gradient(135deg, #f66, #f90, #3c9, #09f, #66f) left
    center/400% 400%;
  font-weight: bold;
  font-size: 100px;
  color: #fff;
  animation: move 10s infinite;
}
@keyframes move {
  0%,
  100% {
    background-position-x: left;
  }
  50% {
    background-position-x: right;
  }
}
</style>

<style lang="less" scoped>
@media screen and (max-width: 576px) {
  .el-header {
    padding-left: 0;
  }
}
@media screen and (max-width: 576px) {
  .blog {
    display: none;
  }
  .main-footer {
    display: flex;
  }
  .main-right {
    display: none;
  }
}
</style>
