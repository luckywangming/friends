<template>
  <div>
    <head-top></head-top>
    <swiper></swiper>
  </div>
</template>

<script>
  import headTop from '@/common/header/head'
  import swiper from '@/common/swiper/swiper'
  export default {
    name: 'Index',
    components: {
      headTop,
      swiper
    },
    data() {
      return {
        msg: ''
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>