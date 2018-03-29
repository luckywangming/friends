<template>
  <mt-loadmore>
    <div v-if="loaded">
      <head-top></head-top>
      <swiper></swiper>
    </div>
    <div class="nav">
      <li>
        <i class="i-bg1"></i>
        <p>找女友</p>
      </li>
      <li>
        <i class="i-bg2"></i>
        <p>找男友</p>
      </li>
      <li>
        <i class="i-bg3"></i>
        <p>上推荐</p>
      </li>
    </div>
    <list :data="list"></list>
  </mt-loadmore>
</template>

<script>
import headTop from "@/common/header/head";
import swiper from "@/common/swiper/swiper";
import list from "@/common/list/list";
import { Indicator, Loadmore } from "mint-ui";
import {api_index} from '@/mock.js'
export default {
  name: "Index",
  components: {
    headTop,
    swiper,
    Loadmore,
    list
  },
  data() {
    return {
      loaded: true,
      list:[]
    };
  },
  created() {
    let _this = this;
    _this.$api.get('http://index-mock',{},response=>{
      _this.list = response.data.list;
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.nav {
  display: flex;
  justify-content: space-around;
  padding: 30px 0;

  li {
    text-align: center;
    color: #666;

    p {
      font-size: 24px;
    }
  }

  i {
    display: inline-block;
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
    background-size: cover;
  }
}

.i-bg1 {
  background: url('/static/images/index-girl.png') no-repeat;
}

.i-bg2 {
  background: url('/static/images/index-boy.png') no-repeat;
}

.i-bg3 {
  background: url('/static/images/index-hot.png') no-repeat;
}
</style>