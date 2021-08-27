import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface IRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: IInterceptors<T>
  showLoading?: boolean
}
