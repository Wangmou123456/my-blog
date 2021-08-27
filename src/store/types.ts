import { ILoginState } from './login/types'
import { IShowState } from './showAll/types'
import { IBackState } from './backAll/types'

export interface IRootState {
  name: string
  age: number
  labelId: number
  blogList: any[]
  blogListCount: number
  labelList: any[]
  labelListCount: number
}

export interface IRootWithModule {
  show: IShowState
  login: ILoginState
  back: IBackState
}

export type IStoreType = IRootState & IRootWithModule
