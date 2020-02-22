<template lang="pug">
  div.header
    NavBar
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'Header',
  components: {
    NavBar
  },
  data() {
    return {
      name: 'header'
    }
  }
}
</script>

<style scoped lang="sass">
  #header
</style>
