import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { IBackState } from './types'

import {
  deletePageData,
  editPageData,
  createPageData,
  editBlogLabelsById
} from '@/serve/backAll'

const backModule: Module<IBackState, IRootState> = {
  namespaced: true,
  state() {
    return {}
  },
  actions: {
    async deletePageDataAction({ dispatch }, payload: any) {
      // 1 pageName -> /users
      // 2 id -> /users/id
      // 1 获取信息
      const { pageName, id } = payload
      const pageUrl = `${pageName}/${id}`
      console.log(pageUrl)

      // 调用删除的网络请求
      await deletePageData(pageUrl)

      // 3 重新请求数据
      dispatch(
        'getPageListAction',
        {
          pageName,
          queryInfo: {
            offset: 0,
            limit: 10
          }
        },
        { root: true }
      )
    },

    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `${pageName}/${id}`
      await editPageData(pageUrl, editData)
      // 3 重新请求数据
      dispatch(
        'getPageListAction',
        {
          pageName,
          queryInfo: {
            offset: 0,
            limit: 10
          }
        },
        { root: true }
      )
    },

    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      console.log(pageUrl, newData)

      await createPageData(pageUrl, newData)

      // 2 请求最新的数据
      dispatch(
        'getPageListAction',
        {
          pageName,
          queryInfo: {
            offset: 0,
            limit: 10
          }
        },
        { root: true }
      )
    },

    async editPageDataById({ dispatch }, payload: any) {
      const { pageName, id, labels } = payload
      const pageUrl = `${pageName}/${id}/labels`
      console.log(pageUrl, labels)
      await editBlogLabelsById(pageUrl, [...labels])

      dispatch(
        'getPageListAction',
        {
          pageName,
          queryInfo: {
            offset: 0,
            limit: 10
          }
        },
        { root: true }
      )
    }
  }
}

export default backModule
