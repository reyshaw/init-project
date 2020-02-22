import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 样式格式化
// import '@/assets/css/normalize.css'
import '@/assets/css/reset.css'
import '@/assets/css/global_set.css'
import 'animate.css'
// 注册全局指令
import '@/directive'
// 注册全局过滤器
import '@/filter'
// 国际化
import i18n from './i18n'
// 注册全局组件
import MessageBox from '@/components/MessageBox/index'
import Alert from '@/components/Alert'

Vue.use(MessageBox)
Vue.use(Alert)

/** 线上环境需要注销 **/
require('./mock')
// 解决移动端点击延迟的问题
const fastClick = require('fastclick')
fastClick.attach(document.body || document.documentElement.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
