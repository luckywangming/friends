<template>
  <div>
    <mt-swipe :speed="0">
      <mt-swipe-item v-for="item in data" :key="item+Math.random()">
        <img :src="item" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  props: {
    data: {
      type: Array,
      default: function() {
        return ["static/images/index-banner.jpg"];
      }
    }
  },
  components: {
    Swipe,
    SwipeItem
  },
  data() {
    return {
      
    };
  }
};
</script>
<style lang="stylus" scoped>
.mint-swipe{
  height:300px;
}
.mint-swipe-item {
  text-align: center;
  height: 300px;
  line-height: 300px;

  img {
    width: 100%;
  }
}
</style>



