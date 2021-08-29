import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import addRouter from './otherRoute'

import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/showAll'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

addRouter(router)

router.beforeEach((to) => {
  const token = localCache.getCache('blog-token')

  //  if (to.path !== '/login') {

  // if (to.path === '/login') {
  //   if (token) {
  //     return '/back-all'
  //   }
  // }

  if (to.path.includes('/back-all/')) {
    if (!token) {
      return '/login'
    }
  }

  //  } else {
  // if (token) {
  //   return '/back-all'
  // }
  //  }
})

export default router
