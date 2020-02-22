import { loginService, getSettings } from '@/api/modules/auth.api'
const types = {
  SET_LOADING: 'SET_LOADING',
  SET_TOKEN: 'SET_TOKEN',
  SET_CONFIG: 'SET_CONFIG',
  SET_THEME: 'SET_THEME'
}
const PublicStore = {
  namespaced: true,
  state: {
    theme: 'default',
    settings: {}, // 从接口获取的配置信息
    isLoading: false, // 1. 加载状态 [false / true]
    token: null // 2.是否登录 [null / token]
  },
  getters: {
    theme: state => state.theme,
    settings: state => state.settings,
    isLoading: state => state.isLoading,
    token: state => state.token
  },
  actions: {
    [types.SET_LOADING]: ({ commit }, isLoading) => {
      commit(types.SET_LOADING, isLoading)
    },
    [types.SET_CONFIG]: ({ commit }) => {
      getSettings().then(res => {
        commit(types.SET_CONFIG, res)
      })
    },
    [types.SET_TOKEN]: async({ commit }, user) => { // 登录操作
      const loginRes = await loginService(user)
      commit(types.SET_TOKEN, loginRes)
    }
  },
  mutations: {
    [types.SET_THEME](state, theme) {
      state.theme = theme
    },
    [types.SET_LOADING](state, isLoading) {
      state.isLoading = isLoading
    },
    [types.SET_CONFIG](state, settings) {
      state.settings = settings
    },
    [types.SET_TOKEN](state, token) {
      state.token = token
    }
  }
}

export default PublicStore
