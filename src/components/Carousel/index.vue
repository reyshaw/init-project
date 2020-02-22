<template lang="pug">
  section.carousel
    swiper(:options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" :style="{height: height + 'px'}")
      swiper-slide(v-for="(item,index) in sliders" :key="index")
        img(:src="require(`@/components/Carousel/${item.url}`)" :alt="item.id")
      div.swiper-pagination(slot="pagination")
      div.swiper-button-prev(slot="button-prev")
      div.swiper-button-next(slot="button-next")
      div.swiper-scrollbar(slot="scrollbar")
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import data from './data'
export default {
  name: 'Home',
  props: {
    height: {
      type: [Number, String],
      default: 100
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      sliders: data,
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteractive: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    callback() {
      console.log(111)
    }
  }
}
</script>

<style>
</style>
<style scoped lang="sass">
  .carousel
    img
      width: 100%
      height: 100%
</style>
