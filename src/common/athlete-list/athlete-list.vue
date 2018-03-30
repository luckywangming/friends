<template>
  <ul>
    <li>
      <div class="photo">
        <img src="/static/images/index-photo3.jpg" alt="照片">
        <span class="tj">推荐</span>
      </div>
      <div class="info">
        <p class="name">
          <span>张大仙</span>
          <i class="iconfont icon-vip"></i>
          <i class="iconfont icon-nv"></i>
        </p>
        <p class="age">
          <span>19岁</span>
          <span>165cm岁</span>
          <span>私人教练</span>
        </p>
        <p class="motto">没有不可起的两个人，只有靠不到一起的两颗心，茫茫人海中，说不定就会遇到！</p>
        <p class="num">
          <span>
            <i class="iconfont icon-hot"></i>23654</span>
          <span>
            <i class="iconfont icon-xin"></i>54</span>
          <span>
            <i class="iconfont icon-hua"></i>1154</span>
        </p>
      </div>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
ul {
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    padding: 30px 24px 35px;
    align-items: center;
    justify-content: space-between;
  }
}

.info {
  flex: 1;
  display flex
  flex-direction column
}

.name {
  color: #333;
  font-size: 32px;
  display flex
  align-items center
  margin-bottom 10px

  .icon-vip {
    color: #ffc600;
    margin-left 20px
  }

  .icon-nv {
    color: #ff4b9e;
    margin-left 5px
  }
}
.age{
  display flex
  align-items center
  margin-bottom 30px
  span{
    padding 10px 20px
    color #bd25f5
    font-size 18px;
    border 1px solid #bd25f5
    border-radius 40px
    margin-right 10px
  }
}
.motto{
  color #666
  font-size 20px
  line-height 1.4
  margin-bottom 10px
}
.photo {
  position: relative;
  margin-right: 28px;

  img {
    width: 180px;
    height: 180px;
  }
}
.num{
  display flex
  align-items center
  span{
    margin-right:27px
  }
  i{
    color:#f77;
    vertical-align middle
    margin-right:10px
  }
  .icon-hot{
    font-size:12px;
  }
  .icon-xin{
    font-size: 26px;
  }
  .icon-hua{
    font-size: 32px;
    vertical-align -4px
    margin-right 5px
  }
}
.tj {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 24px;
  background-color: #aa68e8;
}
</style>


