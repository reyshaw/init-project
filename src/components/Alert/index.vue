<template>
  <transition
    enter-active-class="animated bounceInDown"
    leave-active-class="animated bounceOutUp">
    <div :class="`alert ${type}-alert`" v-if="isShow">
      <section :class="`alert-content alert-content-${type}`">
        <i :class="`iconfont ${TYPES[type]}`"></i>
        <span>{{message}}</span>
        <i class="iconfont iconclose float-right" v-pointer @click="hide"></i>
      </section>
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
    show() {
      this.isShow = true
      this.$nextTick(() => {
        this.timeout = setTimeout(() => {
          this.hide()
        }, 2000)
      })
    },
    hide() {
      clearTimeout(this.timeout)
      this.isShow = false
      this.$nextTick(() => {
        this.destroy()
      })
    },
    destroy() {
      this.$destroy()
      document.body.removeChild(this.$el)
    }
  }
}
</script>

<style scoped lang="sass">
$--alert-background-success: #f0f9eb
$--alert-color-success: #67c23a
$--alert-background-warning: #fdf6ec
$--alert-color-warning: #e6a23c
$--alert-background-error: #fef0f0
$--alert-color-error: #f56c6c

@mixin set_alert_box($bg, $color)
  background: $bg
  color: $color
  border: 1px solid $bg
  box-shadow: 1px 1px 3px $color

.alert
  position: absolute
  top: 35px
  z-index: 2
  left: 50%
  min-width: 400px
  section
    position: relative
    left: -50%
    padding: 10px
    border-radius: 2px
    &.alert-content-success
      @include set_alert_box($--alert-background-success, $--alert-color-success)
    &.alert-content-warning
      @include set_alert_box($--alert-background-warning, $--alert-color-warning)
    &.alert-content-error
      @include set_alert_box($--alert-background-error, $--alert-color-error)
    i
      font-size: 18px
      &.float-right
        &:hover
          font-size: 20px
          transform: rotate(90deg)
          transition: transform .5s ease-in
    span
      display: inline-block
      margin: 0 10px
</style>
