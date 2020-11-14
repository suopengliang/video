<template>
  <div class="va-heightt">
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      finished-text="没有更多了"
      title="更多图片"
    />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="imgDiv" v-for="(item, index) in resData" :key="index">
          <img v-image-preview :src="item.url" alt="" srcset="">
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data () {
    return {
      resData: [],
      loading: false,
      finished: false,
      refreshing: false,
      currentPage: 0,
      current: 0
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        if (this.refreshing) {
          this.currentPage = 1
          this.resData = []
          this.refreshing = false
        }
        var endPage = this.currentPage * 4 + 4
        if (endPage >= 30) {
          endPage = 30
        }
        for (var i = this.currentPage * 4; i < this.currentPage * 4 + 4; i++) {
          var str = {
            url: '/static/image/' + i + '.jpg',
            preview: '1'
          }
          this.resData.push(str)
        }
        this.currentPage++
        this.loading = false
        if (this.resData.length >= 31) {
          this.finished = true
        }
      }, 1000)
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    },
    onClickLeft () {
      this.$router.push('/cindex')
    }
  }
}
</script>
<style lang="less" scoped>
.van-nav-bar {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99999;
}
.van-pull-refresh {
  margin-top: 2.5rem;
}
.imgDiv {
  width: 100%;
  height: 7rem;
  margin: 0.5rem 0;
  border-radius: 0.2rem;
}
.imgDiv img {
  width: 100%;
  height: 7rem;
}
</style>
