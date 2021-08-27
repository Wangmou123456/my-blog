import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { IInterceptors, IRequestConfig } from './types'

import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

import { ElLoading } from 'element-plus'

const DEFAULT_LOADING = true
class RequestServe {
  instance: AxiosInstance
  showLoading: boolean
  interceptors?: IInterceptors
  loading?: ILoadingInstance
  constructor(config: IRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading)
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据。。。',
            background: 'rgba(0,0,0,.5)'
          })
        return config
      },
      (err) => {
        Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (config) => {
        // 将loading移除
        this.loading?.close()
        return config
      },
      (err) => {
        Promise.reject(err)
      }
    )
  }

  request<T = any>(config: IRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          // 3 将结果返回出去
          resolve(res)
        })
        .catch((err) => {
          return err
        })
    })
  }

  get<T>(config: IRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: IRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'post' })
  }

  delete<T>(config: IRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'delete' })
  }

  patch<T>(config: IRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'patch' })
  }
}

export default RequestServe
