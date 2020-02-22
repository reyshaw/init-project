<template lang="pug">
  div.nav-bar
    nav.content-center
      h2
        i.iconfont.iconlocation
        span 成都
        router-link(to="/login") {{$t('public.login')}}
        router-link(to="/register") {{$t('public.register')}}
      ul.nav
        li(v-for="(nav, index) in navs" :key="index")
          a(href="/") {{nav.name}}
          p
            span(v-for="(menu, idx) in nav.menus" :key="idx" to="test" @click="handleSpan(menu)") {{menu.name}}
</template>

<script>
import data from './data'
import { mapMutations } from 'vuex'
export default {
  name: 'NavBar',
  data() {
    return {
      ...data
    }
  },
  methods: {
    ...mapMutations({
      setTheme: 'PublicStore/SET_THEME'
    }),
    handleSpan(menu) {
      const { id } = menu
      const ids = id.split('-')
      const CURRENT_LANG = ['CN', 'TW', 'US'][ids[1] / 1]
      const CURRENT_THEME = ['default', 'dark', 'light'][ids[1] / 1]
      switch (ids[0]) {
        case '2': // 切换语言
          localStorage.setItem('lang', CURRENT_LANG)
          this.$i18n.locale = CURRENT_LANG
          break
        case '3': // 改变主题
          this.setTheme(CURRENT_THEME)
          break
        default:
          console.log('其他')
      }
    }
  }
}
</script>

<style scoped lang="sass">
  @import '~theme/index.scss'
  $--font-color-hover: #FE8C00
  .nav-bar
    @include base-background()
    width: 100%
    font-size: 12px
    @include base-font-color()
    .content-center
      h2
        display: inline-block
        line-height: 30px
        >a
          margin-left: 10px
          text-decoration: none
          @include base-font-color()
          &:hover
            text-decoration: underline
            color: $--font-color-hover
      ul.nav
        float: right
        >li
          display: inline-block
          line-height: 30px
          box-sizing: border-box
          text-align: center
          max-width: 80px
          position: relative
          top: 0
          >a
            @include base-font-color()
            text-decoration: none
            margin: auto 15px
          &:hover
            cursor: pointer
            color: $--font-color-hover
            background: #fff
            box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1)
            p
              display: block
              background: #fff
              box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1)
              position: absolute
              box-sizing: border-box
              right: 0
              top: 30px
              padding: 0 10px
              min-width: 100%
              z-index: 2
          p
            display: none
            >span
              @include base-font-color()
              display: block
              box-sizing: border-box
              text-decoration: none
              line-height: 40px
              height: 40px
              word-break: keep-all
              &:hover
                color: $--font-color-hover
        &:after
          content: " "
          display: table
</style>
