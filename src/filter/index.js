import Vue from 'vue'

/**
 * 全局过滤器
 */

// 保留两位小数的过滤器
Vue.filter('float2', function(val) {
  return parseFloat(val).toFixed(2)
})
