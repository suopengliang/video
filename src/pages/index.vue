<template>
  <div class="top">
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style src="../assets/home/home.less" lang="less" scoped></style>
<style lang="less" scoped>
.van-nav-bar {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99999;
}
.el-container {
  min-width: 0px !important;
}
</style>
