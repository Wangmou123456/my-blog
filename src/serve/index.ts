import RequestServe from './request'
import router from '@/router'
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '@/utils/cache'

const request = new RequestServe({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    responseInterceptor: (res) => {
      return res.data
    }
  }
})

export const backRequest = new RequestServe({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache('blog-token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      // console.log('请求成功的拦截')
      return config
    },
    responseInterceptor: (config) => {
      // console.log('响应成功的拦截')
      switch (config.data.status) {
        case 401:
          localCache.deleteCache('blog-token')
          router.replace('/login')
          break

        default:
          break
      }
      return config.data
    }
  }
})

export default request
