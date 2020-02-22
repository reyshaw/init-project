<template lang="pug">
  div.layout
    Header
    router-view
    Footer
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  },
  beforeRouteEnter(to, from, next) {
    // 经过该路由的都是需要经过登录授权的
    next()
  }
}
</script>
