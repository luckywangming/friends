<template>
  <swiper :options='swiperOption'>
    <swiper-slide>1</swiper-slide>
    <swiper-slide>2</swiper-slide>
    <swiper-slide>3</swiper-slide>
    <swiper-slide>4</swiper-slide>
    <swiper-slide>5</swiper-slide>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoPlay: 1000,
        direction: "horizontal"
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
@import 'swiper/dist/css/swiper.css';

.swiper-slide {
  text-align: center;
}
</style>



