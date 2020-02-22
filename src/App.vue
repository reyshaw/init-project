<template>
  <div id="app" :data-theme="`${theme}-theme`">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'App',
  created() {
    this.$store.dispatch('PublicStore/SET_CONFIG') // 如果对该配置有依赖的且先执行，应该放在router.beforeEach()里,并且要返回结果再next()
  },
  computed: {
    ...mapGetters({
      theme: 'PublicStore/theme'
    })
  },
  methods: {
    ...mapMutations({
      setTheme: 'PublicStore/SET_THEME'
    }),
    handleTheme() {
      this.setTheme(this.theme === 'light' ? 'dark' : 'light')
    }
  }
}
</script>
<style scoped lang="scss">
  @import "theme/index";
  .test {
    .t1 {
      h2 {
        @include base-background()
      }
    }
  }
</style>
