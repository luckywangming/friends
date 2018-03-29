<template>
  <ul>
    <li class="on">
      <i class="iconfont icon-home"></i>
      <p>首页</p>
    </li>
    <li>
      <i class="iconfont icon-xin2"></i>
      <p>邂逅爱情</p>
    </li>
    <li>
      <i class="iconfont icon-me"></i>
      <p>我的</p>
    </li>
  </ul>
</template>
<style lang="stylus" scoped>
@import '../../../static/stylus/mixin.styl';

ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding: 10px 0;
  background-color: #f5f5f5;
  color: #666;
  font-size: 20px;
  borderHalf(#ccc);

  li {
    &.on {
      color: #b734f4;
    }
  }

  i {
    margin-bottom: 10px;
    display: inline-block;
    font-weight: bold;
  }
}
</style>

