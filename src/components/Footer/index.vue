<template lang="pug">
  div.footer
    div.content-center
      h1 xxx版权 @2010-2020 All Rights Reserved
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      name: 'footer'
    }
  }
}
</script>

<style scoped lang="sass">
  @import "~theme/index.scss"
  .footer
    position: absolute
    bottom: 0
    width: 100%
    @include base-background()
    .content-center
      h1
        text-align: center
        @include base-font-color()
        line-height: 3
</style>
