import Vue from 'vue'
import Vuex from 'vuex'
import PublicStore from './modules/public.store'
import createPersistedState from 'vuex-persistedstate' // 持久化vuex

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const createPersisted = createPersistedState({
  storage: window.sessionStorage
  // storage: {
  //   getItem: key => Cookies.get(key),
  //   setItem: (key, value) => Cookies.set(key, value, { expires: 1, secure: false }),
  //   removeItem: key => Cookies.remove(key)
  // }
})

const store = new Vuex.Store({
  modules: {
    PublicStore
  },
  strict: debug,
  plugins: [createPersisted]
})

export default store
