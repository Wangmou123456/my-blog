import { Module } from 'vuex'

import router from '@/router/index'

import localCache from '@/utils/cache'

import { accountLoginRequest } from '@/serve/login/login'

import { IAccount } from '@/serve/login/type'
import { ILoginState } from './types'
import { IRootState } from '../types'

const showModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      name: '',
      token: ''
    }
  },
  mutations: {
    changeName(state, name: string) {
      state.name = name
    },
    changeToken(state, token: string) {
      state.token = token
    }
  },
  actions: {
    async accountLogAction({ commit }, payload: IAccount) {
      // 实现登录逻辑
      const { data: res } = await accountLoginRequest(payload)

      if (!res) {
        throw Error('账号密码错误')
      }
      const { name, token } = res
      commit('changeName', name)
      commit('changeToken', token)
      localCache.setCache('blog-token', token)

      // 4 跳到首页
      router.push('/back-all')
    }
  }
}

export default showModule
