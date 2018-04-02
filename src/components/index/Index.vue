<template>
  <div>
    <div v-if="loaded">
      <head-top></head-top>
      <swiper></swiper>
    </div>
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <div class="nav">
        <li @click.stop="girlList">
          <i class="i-bg1"></i>
          <p>找女友</p>
        </li>
        <li>
          <i @click.stop="boyList" class="i-bg2"></i>
          <p>找男友</p>
        </li>
        <li>
          <i class="i-bg3"></i>
          <p>上推荐</p>
        </li>
      </div>
      <list v-if="list.length" :data="list"></list>
      <div v-else class="loading">
        <mt-spinner color="#26a2ff" type="fading-circle" :size="24"></mt-spinner>
      </div>
      <more></more>
      <bottom></bottom>
    </mt-loadmore>
  </div>
</template>

<script>
import headTop from "@/common/header/head";
import swiper from "@/common/swiper/swiper";
import list from "@/common/list/list";
import more from "@/common/more/more";
import bottom from "@/common/bottom/bottom";
import { Loadmore, Spinner } from "mint-ui";
import { index_list } from "@/mock.js";
import { parseTj } from "@/tools.js";
export default {
  name: "Index",
  components: {
    headTop,
    swiper,
    Loadmore,
    Spinner,
    list,
    more,
    bottom
  },
  data() {
    return {
      loaded: true,
      list: []
    };
  },
  methods: {
    loadTop(e) {
      let _this = this;
      console.log(e)
      setTimeout(() => {
        _this.getData();
        _this.$refs.loadmore.onTopLoaded();
      }, 1000); 
    },
    girlList() {
      // console.log(this.$route)
      this.$router.push({
        path:'/girlList'
      })
    },
    boyList() {
      // console.log(this.$route)
      this.$router.push({
        path:'/boyList'
      })
    },
    getData() {
      let _this = this;
      _this.$api.get("http://index-mock", {}, response => {
        _this.list = parseTj(response.data.list);
      });
    }
  },
  created() {
    this.getData();
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