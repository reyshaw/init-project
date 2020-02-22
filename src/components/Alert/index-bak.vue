<template>
<!--  <transition name="slide" mode="out-in">-->
  <transition
    :duration="{ enter: 500, leave: 800 }"
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled">
    <div :class="`alert ${type}-alert`" v-if="isShow">
      <i :class="`iconfont ${TYPES[type]}`"></i>
      <span>{{message}}</span>
      <i class="iconfont iconclose float-right" v-pointer @click="hide"></i>
    </div>
  </transition>
</template>

<script>
const TYPE_CLASSES_MAP = {
  success: 'iconsuccess',
  warning: 'iconwarning',
  error: 'iconerror'
}
export default {
  name: 'Alert',
  props: {
    type: {
      type: String,
      default: 'success',
      validator: value => Object.keys(TYPE_CLASSES_MAP).includes(value)
    },
    message: {
      type: String,
      default: 'alert message'
    }
  },
  data() {
    return {
      isShow: false,
      TYPES: TYPE_CLASSES_MAP,
      timeout: null
    }
  },
  methods: {
    beforeEnter(el) {
      console.log('before enter')
    },
    enter(el, done) {
      console.log('enter')
      done()
    },
    afterEnter(el) {
      console.log('after enter')
    },
    enterCancelled() {
      console.log('enterCancelled')
    },
    beforeLeave(el, done) {
      console.log('beforeLeave')
      done()
    },
    leave(el, done) {
      console.log('leave')
      done()
    },
    afterLeave() {
      console.log('afterLeave')
    },
    leaveCancelled() {
      console.log('leaveCancelled')
    },
    show() {
      this.isShow = true
      // this.timeout = setTimeout(() => {
      //   this.hide()
      // }, 1500)
    },
    hide() {
      clearTimeout(this.timeout)
      this.isShow = false
      this.destroy()
    },
    destroy() {
      this.$destroy()
      document.body.removeChild(this.$el)
    }
  }
}
</script>

<style scoped lang="sass">
.slide-enter-active
  transition: all .3s ease
.slide-leave-active
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.slide-enter, .slide-leave-to
  transform: translateY(500%)
  /*top: 0*/

.alert
  background: red
  position: absolute
  top: 30px
  z-index: 2
  left: 50%
  transform: translateX(-50%)
  padding: 10px
  min-width: 400px
  /*transition: all 2s ease-in-out*/
  /*animation-duration: .6s*/
  &.success-alert
    background: green
  &.warning-alert
    background: orange
  &.error-alert
    background: red
  i
    font-size: 18px
    &.float-right
      &:hover
        color: #fff
        font-size: 19px
        transition: transform 2s ease-in
  span
    display: inline-block
    margin: 0 10px
    color: #fff
</style>
