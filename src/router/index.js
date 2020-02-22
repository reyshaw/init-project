import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '../store'

Vue.use(VueRouter)
const _import = require(`./env/_import_${process.env.NODE_ENV}`)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: _import('Layout'),
    redirect: '/home',
    children: [
      { path: 'home', name: 'Home', component: _import('home/index') },
      { path: 'About', name: 'About', component: _import('help/About') }
    ]
  }, {
    path: '/login',
    name: 'Login',
    component: _import('auth/Login')
  }, {
    path: '/register',
    name: 'Register',
    component: _import('auth/Register')
  }, {
    path: '/404',
    name: '404',
    component: _import('exception/404')
  }, {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

let isRefresh = false // 是否是刷新操作
// 路由守卫
router.beforeEach((to, from, next) => {
  // const settings = store.getters['PublicStore/settings']
  if (!isRefresh) { // 刷新操作
    console.log('refresh...')
  }
  isRefresh = true
  NProgress.start()
  next()
  // if (!WHITE_LIST.includes(to.name)) {
  //   ROUTER.push('/login')
  // } else {
  //   next()
  // }
})

router.afterEach(() => { // finish progress bar
  NProgress.done()
})

export default router
