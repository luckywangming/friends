<template>
  <div>
    <head-top title="同城女神"></head-top>
    <div class="banner">
      <img src="/static/images/girl-list-banner_02.jpg" alt="背景图">
    </div>
    <athlete-list></athlete-list>
  </div>
</template>
<script>
import headTop from "@/common/header/head";
import athleteList from "@/common/athlete-list/athlete-list";
export default {
  components: {
    headTop,
    athleteList
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


