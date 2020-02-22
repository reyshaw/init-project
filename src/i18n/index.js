import Vue from 'vue'
import VueI18n from 'vue-i18n'

import US from './lang/en_US'
import CN from './lang/zh_CN'
import TW from './lang/zh_TW'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'CN',
  messages: {
    US,
    CN,
    TW
  },
  silentTranslationWarn: process.env.NODE_ENV === 'production' // 是否输出警告
})

export default i18n
