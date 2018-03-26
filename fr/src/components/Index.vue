<template>
  <div v-if="loaded">
    <head-top></head-top>
    <swiper></swiper>
  </div>
</template>

<script>
  import headTop from '@/common/header/head'
  import swiper from '@/common/swiper/swiper'
  import {Indicator} from "mint-ui"
  export default {
    name: 'Index',
    components: {
      headTop,
      swiper
    },
    data() {
      return {
        loaded: false
      }
    },
    created () {
      Indicator.open({
        text:"加载中...",
        spinnerType:"fading-circle"
      })
      console.log(this.loaded)
      setTimeout(()=>{
        this.loaded = true
        Indicator.close()
      },1000)
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>