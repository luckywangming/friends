<template>

  <div>
    <mt-loadmore :top-method="loadmore" ref="loadmore">
      <ul v-if="list.length">
        <li v-for="item in list" :key="item.id">
          <div class="photo">
            <img :src="item.img" alt="照片">
            <span v-show="item.tj" class="tj">推荐</span>
          </div>
          <div class="info">
            <p class="name">
              <span>{{item.name}}</span>
              <i class="iconfont icon-vip"></i>
              <i :class="[sex == 'girl' ? 'iconfont icon-nv' : 'iconfont icon-nan']"></i>
            </p>
            <p class="age">
              <span>{{item.age}}岁</span>
              <span>{{item.height}}cm</span>
              <span>{{item.work}}</span>
            </p>
            <p class="motto">{{item.des}}</p>
            <p class="num">
              <span>
                <i class="iconfont icon-hot"></i>{{item.hot}}</span>
              <span>
                <i class="iconfont icon-xin"></i>{{item.dz}}</span>
              <span>
                <i class="iconfont icon-hua"></i>{{item.hua}}</span>
            </p>
          </div>
        </li>
      </ul>
      <div v-else class="loading">
        <mt-spinner color="#26a2ff" type="fading-circle" :size="24"></mt-spinner>
      </div>
    </mt-loadmore>
  </div>
</template>
<script>
import {Loadmore,Spinner} from 'mint-ui'
export default {
  components:{
    Spinner,
    Loadmore
  },
  props: {
    list:{
      type:Array,
      default:[]
    },
    sex:{
      type:String,
      default:'girl'
    }
  },
  methods: {
    loadmore(){
      this.$emit('loadmore')
    }
  },
  watch: {
    list:function(){
      this.$refs.loadmore.onTopLoaded()
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../static/stylus/mixin.styl';

ul {
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;

  li {
    display: flex;
    padding: 30px 24px 35px;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;

    &:not(:first-child) {
      margin-top: 20px;
    }
  }
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.name {
  color: #333;
  font-size: 32px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  .icon-vip {
    color: #ffc600;
    margin-left: 20px;
  }

  .icon-nv {
    color: #ff4b9e;
    margin-left: 5px;
  }
  .icon-nan {
    color: #5ebaf5;
    margin-left: 5px;
  }
}

.age {
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  span {
    padding: 10px 20px;
    color: #bd25f5;
    font-size: 18px;
    border: 1px solid #bd25f5;
    border-radius: 40px;
    margin-right: 10px;
  }
}

.motto {
  color: #666;
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
}

.photo {
  position: relative;
  margin-right: 28px;

  img {
    width: 180px;
    height: 180px;
  }
}

.num {
  display: flex;
  align-items: center;

  span {
    margin-right: 27px;
  }

  i {
    color: #f77;
    vertical-align: middle;
    margin-right: 10px;
  }

  .icon-hot {
    font-size: 12px;
  }

  .icon-xin {
    font-size: 26px;
  }

  .icon-hua {
    font-size: 32px;
    vertical-align: -4px;
    margin-right: 5px;
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


