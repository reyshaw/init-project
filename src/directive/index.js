import Vue from 'vue'

/****
 * 全局指令
 */

// 鼠标移动到元素显示手形
Vue.directive('pointer', {
  bind: function(el, binding) { // 只调用一次，指令第一次绑定到元素调用，用这个钩子函数可以定义一个绑定时执行一次的初始化作用
    el.addEventListener('mouseenter', function() {
      el.style.cursor = 'pointer'
    }, false)
  },
  inserted: function() { // 被绑定元素插入父节点时调用(父节点存在即可调用，不必存在于document中)

  },
  updated: function() { // 被绑定元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更前后的绑定值，可以忽略不必要的模板更新

  },
  componentUpdated: function() { // 被绑定元素所在模板完成一次更新周期时调用

  },
  unbind: function(el) { // 只调用一次，指令与元素解绑时调用
    el.removeEventListener('mouseenter', function() {
      // destroyed
    })
  }
})
