<template>
  <div class="more">
    <p>{{title}}</p>
    <i class="iconfont icon-yjt2"></i>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "点击查看更多"
    }
  }
};
</script>
<style lang="stylus" scoped>
.more {
  display: flex;
  justify-content center;
  align-items center;
  background-color #fafafa
  height 80px
  font-size 24px
  p{
    color:#666
  }
  i{
    color:#aaa
  }
}
</style>

