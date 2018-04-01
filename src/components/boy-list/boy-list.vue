<template>
  <div>
    <head-top title="同城女神"></head-top>
    <div class="banner">
      <img src="/static/images/boy-list-banner_02.jpg" alt="背景图">
    </div>
    <athlete-list sex="boy" @loadmore="loadmore" :list="list"></athlete-list>
    <more></more>
    <bottom></bottom>
  </div>
</template>
<script>
import headTop from "@/common/header/head";
import more from "@/common/more/more";
import bottom from "@/common/bottom/bottom";
import athleteList from "@/common/athlete-list/athlete-list";
import {parseTj} from "@/tools.js"
export default {
  components: {
    headTop,
    athleteList,
    more,
    bottom
  },
  data () {
    return {
      list:[]  
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData(){
      let _this = this;
      _this.$api.get("http://boy-list-mock",{},response => {
        _this.list = parseTj(response.data.list);
      })
    },
    loadmore(obj){
      let _this = this;
      setTimeout(function() {
        _this.getData();
      }, 1000);
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner{
  img{
    width:100%;
    height:200px;
  }
}
</style>


