<template>
  <div :class="[bg ? 'head bg' : 'head']">
    <i @click="back" class="iconfont icon-zjt"></i>
    <p>{{title}}</p>
    <i class="iconfont icon-more"></i>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "同城交友"
    },
    bg: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back() {
      if (window.history.length > 0) {
        window.history.back();
      } else {
        window.location.href = "/";
      }
    }
  },
  mounted: function() {}
};
</script>
<style lang="stylus" scoped>
.head {
  font-size: 40px;
  height: 96px;
  text-align: center;
  line-height: 96px;
  color: #fff;
  background: -webkit-linear-gradient(left, #c31ff6 30%, #8941f2 80%, #6248f8);
  display: flex;
  padding: 0 20px;

  p {
    flex: 1;
  }

  i {
    font-size: 40px;
  }

  .icon-more {
    font-size: 60px;
  }
}

.bg {
  background: transparent;
}
</style>