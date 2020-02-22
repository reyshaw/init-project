import AlertVue from './index.vue'

const Alert = {
  install(Vue) {
    // Vue.component(AlertVue.name, AlertVue)
    const ExtendAlert = Vue.extend(AlertVue)
    Vue.prototype.$alert = {
      show(options) {
        const instanceAlert = new ExtendAlert()
        document.body.appendChild(instanceAlert.$mount().$el)
        if (typeof options !== 'object') {
          throw new Error('options must be an object, type and message must given')
        }
        Object.assign(instanceAlert, options)
        return instanceAlert.show(options)
      }
    }
  }
}

export default Alert
