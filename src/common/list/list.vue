<template>
  <ul class="list">
    <li v-for="item in data" :key="item.id">
      <div class="box"><img :src="item.img" alt="照片"></div>
      <div class="info">
        <div>
          <p class="name">{{item.name}}</p>
          <p class="age">{{item.age}}岁 | {{item.height}}cm</p>
        </div>
        <div>
          <i class="iconfont icon-hot"></i>
          <p class="num">{{item.hot}}</p>
        </div>
      </div>
      <span v-if="item.tj" class="tuijian">推荐</span>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    data: Array
  },
  data() {
    return {};
  },
  mounted() {
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../static/stylus/mixin.styl';

.list {
  padding: 30px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  mt(-20px);

  li {
    width: calc(50% - 15px);
    box-shadow: 0px 10px 10px #f0f0f0;
    position: relative;
    margin-top: 30px;

    &:first-child {
      margin-top: 0;

      +li {
        margin-top: 0;
      }
    }

    img {
      width: 100%;
    }
  }
}

.box {
  height: 330px;
  overflow: hidden;
}

.info {
  text-align: center;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name {
  color: #333;
  font-size: 28px;
  margin-bottom: 15px;
  text-align: left;
}

.age {
  font-size: 20px;
  color: #999;
}

.icon-hot {
  color: #ff5955;
  margin-bottom: 5px;
  display: inline-block;
  font-size:12px;
}

.num {
  color: #666;
  font-size: 28px;
}

.tuijian {
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

