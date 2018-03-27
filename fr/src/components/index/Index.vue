<template>
  <mt-loadmore>
    <div v-if="loaded">
      <head-top></head-top>
      <swiper></swiper>
    </div>
    <div class="">

    </div>
  </mt-loadmore>
</template>

<script>
import headTop from "@/common/header/head";
import swiper from "@/common/swiper/swiper";
import { Indicator, Loadmore } from "mint-ui";
export default {
  name: "Index",
  components: {
    headTop,
    swiper,
    Loadmore
  },
  data() {
    return {
      loaded: false
    };
  },
  created() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle"
    });
    console.log(this.loaded);
    setTimeout(() => {
      this.loaded = true;
      Indicator.close();
    }, 1000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style lang="stylus" scoped>
</style>-->