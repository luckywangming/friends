<template>
  <swiper :options='swiperOption'>
    <swiper-slide v-for="item in data" v-bind:key="item" >
      <img :src="item" alt="">
    </swiper-slide>
    <div v-if="data.length > 1" class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {
    data: {
      type: Array,
      default:function(){
        return ["static/image/index-banner.jpg"]
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
        autoplay: 3000,
        direction : 'horizontal',
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        mousewheelControl : true,
        observeParents:true
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



