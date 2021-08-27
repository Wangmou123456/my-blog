import { Module } from 'vuex'

import { IRootState } from '../types'

import { IShowState } from './types'

const showModule: Module<IShowState, IRootState> = {
  namespaced: true,
  state() {
    return {
      blogList: []
    }
  },
  mutations: {
    changeBlogList(state): void {
      console.log('123')
    }
  },
  actions: {}
}

export default showModule
