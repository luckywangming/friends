<template>
  <div>
    <div class="top">
      <img class="bg-img" :src="list.img" alt="头像">
      <header-top title="交友平台" :bg="true"></header-top>
      <div class="tx">
        <img :src="list.img" alt="头像">
        <i class="iconfont icon-nv1"></i>
      </div>
      <div class="info">
        <p>阴谋yang <i class="iconfont icon-vip"></i></p>
        <p><span>24岁</span><span>165cm</span></p>
      </div>
      <ul class="charm">
        <li>
          <p>魅力</p>
          <p>120121</p>
        </li>
        <li>
          <p>被喜欢</p>
          <p>506</p>
        </li>
        <li>
          <p>鲜花</p>
          <p>121</p>
        </li>
      </ul>
    </div>
    <div class="modul">
      <p class="module-tit">TA的相册</p>
      <photo-list></photo-list>
    </div>
  </div>
</template>
<script>
import headerTop from "@/common/header/head";
import photoList from "@/common/photo-list/photo-list";
export default {
  components: {
    headerTop,
    photoList
  },
  data() {
    return {
      list: []
    };
  },
  created() {
    this.list = this.$route.query.item;
    this.getData();
  },
  methods: {
    getData() {
      this.$api.get("http://detail-mock", {}, response => {
        this.list = response.data.list[0];
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.top {
  background: -webkit-linear-gradient(to bottom right, rgba(185, 52, 244, 0.7) 30%, rgba(166, 68, 242, 0.7) 60%, rgba(100, 84, 242, 0.7));
  background: linear-gradient(to bottom right, rgba(185, 52, 244, 0.7) 30%, rgba(166, 68, 242, 0.7) 60%, rgba(100, 84, 242, 0.7));
  overflow: hidden;
  position: relative;
  text-align: center;
  color: #fff;

  .bg-img {
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }
}

.charm {
  display: flex;
}

.tx {
  margin-top: 15px;

  img {
    width: 136px;
    height: 136px;
    border-radius: 50%;
  }

  display: inline-block;
  padding: 8px;
  background-color: #cda8f7;
  border-radius: 50%;
  position: relative;

  .icon-nv1 {
    position: absolute;
    bottom: 5px;
    right: 30px;
    color: #f39;
    background-color: #fff;
    border-radius: 50%;
  }
}

.info {
  margin-top: 15px;
  font-size: 32px;

  i {
    background-color: #f90;
  }

  p:first-child {
    margin-bottom: 10px;

    +p {
      font-size: 20px;

      span:first-child {
        margin-right: 10px;
      }
    }
  }
}

.charm {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  margin-top: 20px;
  background: -webkit-linear-gradient(left, rgba(195, 31, 246, 0.2) 30%, rgba(98, 72, 248, 0.2));

  li {
    p:first-child {
      margin-bottom: 15px;
    }
  }
}


</style>


