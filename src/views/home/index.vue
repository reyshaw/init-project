<template lang="pug">
  div.home
    carousel(height="400")
    div.content-center
      h2 热门商品
      //test
      div.list
        button(@click="showModal(0)") 成功
        button(@click="showModal(1)") 警告
        button(@click="showModal(2)") 错误
      transition(name="slide" mode="in-out")
        div.tran(v-if="show" ref="oDiv")
          h1 hello world
</template>
<script>
import Carousel from '@/components/Carousel'
export default {
  name: 'Home',
  components: {
    Carousel
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    transitionDiv() {
      this.show = !this.show
    },
    showModal(index) {
      const types = [
        { type: 'success', message: '这是一条成功的消息提示' },
        { type: 'warning', message: '这是一条警告' },
        { type: 'error', message: '哎呀，出错了' }
      ]
      this.$alert.show(types[index])
      // this.$msgBox.showMsgBox({
      //   title: '添加分类',
      //   content: '请填写分类名称',
      //   isShowInput: false
      // }).then(async(val) => {
      //   console.log(val)
      // }).catch((e) => {
      //   console.log(e)
      //   // ...
      // })
    }
  }
}
</script>
<style scoped lang="sass">
.slide-enter-active
  transition: all .3s ease
.slide-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.slide-enter, .slide-leave-to
  transform: translateX(50%)
.home
  .tran
    width: 500px
    height: 500px
    background: blue
    opacity: 1
</style>
