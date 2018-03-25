<template>
  <swiper :options='swiperOption'>
    <swiper-slide v-for="item in data" v-bind:key="item" >
      <img :src="item" alt="">
    </swiper-slide>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {
    data: {
      type: Array,
      default:function(){
        return ["./assets/image/index-banner.jpg"]
      }
    }
  },
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
.swiper-slide {
  text-align: center;
  height: 300px;
  line-height: 300px;

  img {
    width: 100%;
  }
}
</style>



