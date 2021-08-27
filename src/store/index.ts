import { createStore, Store, useStore as useRootStore } from 'vuex'

import show from './showAll/show-all'
import login from './login/login'
import back from './backAll'

import { IRootState, IStoreType } from './types'

import {
  getLabels as getLabel,
  getBlogsList,
  getBlogsListByLabelId,
  getPageListData
} from '@/serve/showAll'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'wmm',
      age: 18,
      labelId: 0,
      blogList: [],
      blogListCount: 0,
      labelList: [],
      labelListCount: 0
    }
  },
  mutations: {
    changeLabelId(state, labelId) {
      state.labelId = labelId
    },
    changeLabelList(state, list) {
      state.labelList = list.data
      state.labelListCount = list.data[0].count
    },
    changeBlogList(state, list) {
      state.blogList = list.data
      state.blogListCount = list.count
    }
  },
  actions: {
    async getLabels({ commit }, payload: any) {
      const result = await getLabel({ ...payload })
      commit('changeLabelList', result)
    },
    // async getBlogs({ commit }, payload: any) {
    //   const result = await getBlogsList({ ...payload })
    //   commit('changeBlogList', result)
    // },

    // 获取用户信息
    async getPageListAction({ commit }, payload: any) {
      const { pageName } = payload
      const pageUrl = `/${pageName}`

      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      switch (pageName) {
        case 'blog':
          commit('changeBlogList', pageResult)
          break
        case 'label':
          commit('changeLabelList', pageResult)
          break
      }
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => (state as any)[`${pageName}List`]
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}ListCount`]
      }
    }
  },
  modules: {
    show,
    login,
    back
  }
})

export function useStore(): Store<IStoreType> {
  return useRootStore()
}

export function getAllInfo() {
  store.dispatch('getPageListAction', {
    pageName: 'blog',
    queryInfo: { offset: 0, limit: '100' }
  })
  store.dispatch('getPageListAction', {
    pageName: 'label',
    queryInfo: { offset: 0, limit: '100' }
  })
}

export default store
