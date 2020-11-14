<template>
  <div class="pdf">
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      title="亭亭玉立作品"
    />
    <div class="main" v-if="!isloading">
      <pdf ref="pdf"
           :src="pdfUrl"
           :page="pageNum"
           :rotate="pageRotate"
           @password="password"
           @progress="loadedRatio = $event"
           @page-loaded="pageLoaded($event)"
           @num-pages="pageTotalNum=$event"
           @error="pdfError($event)"
           @link-clicked="page = $event">
      </pdf>
    </div>
    <van-loading color="#1989fa" v-else />
    <van-button class="btn-def btn-pre"
            @click.stop="prePage">上一页</van-button>
            {{pageNum}}/{{pageTotalNum}}
    <van-button class="btn-def btn-next"
            @click.stop="nextPage">下一页</van-button>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  name: 'Pdf',
  components: {
    pdf
  },
  data () {
    return {
      pdfUrl: '../../static/image/2.pdf',
      pageNum: 1,
      pageTotalNum: 1,
      pageRotate: 0,
      loadedRatio: 0,
      curPageNum: 0,
      scale: 100,
      idx: -1,
      isloading: true
    }
  },
  mounted () {
    this.isloading = false
  },
  methods: {
    prePage () {
      var p = this.pageNum
      p = p > 1 ? p - 1 : this.pageTotalNum
      this.pageNum = p
    },
    nextPage () {
      var p = this.pageNum
      p = p < this.pageTotalNum ? p + 1 : 1
      this.pageNum = p
    },
    clock () {
      this.pageRotate += 90
    },
    counterClock () {
      this.pageRotate -= 90
    },
    password (updatePassword, reason) {
      updatePassword(prompt('password is "123456"'))
    },
    pageLoaded (e) {
      this.curPageNum = e
    },
    pdfError (error) {
      console.error(error)
    },
    pdfPrintAll () {
      this.$refs.pdf.print()
    },
    onClickLeft () {
      this.$router.push('/cindex')
    }
  }
}
</script>
<style lang="less" scoped>
  .main {
    overflow: auto;
    max-width: 375px;
    max-height: 30rem;
    margin-top: 1.5rem;
    margin: 0 auto;
  }
</style>
