<template>
  <div>
    <van-nav-bar
      title="亭亭玉立作品"
    />
    <div class="van-doc-demo-block">
      <video-player  class="video-player vjs-custom-skin margintop"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
      <div class="van-doc-demo-block__title">图片<span class="va-span" @click="routerImgae">更多</span></div>
      <div class="imgDiv" v-for="(item, index) in resData" :key="index">
        <img v-image-preview :src="item.url" alt="" srcset="">
      </div>
      <div class="van-doc-demo-block__title">解决方案</div>
      <div class="imgDiv">
        <van-card
          desc="点击某地方效果图"
          title="某地方效果图"
          thumb="/static/image/1.jpeg"
          @click="imgclick"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: 'auto',
        language: 'zh-CN',
        aspectRatio: '16:9',
        fluid: true,
        sources: [{
          src: '/static/video/lightmv.mp4'
        }],
        poster: '/static/image/2.jpg',
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          fullscreenToggle: false
        }
      },
      resData: [],
      currentPage: 1
    }
  },
  mounted () {
    this.loadList()
  },
  methods: {
    loadList () {
      for (var i = 2; i < 4; i++) {
        var str = {
          url: '/static/image/' + i + '.jpg',
          preview: '1'
        }
        this.resData.push(str)
      }
    },
    imgclick () {
      this.$router.push('/pdf')
    },
    routerImgae () {
      this.$router.push('/image')
    }
  }
}
</script>

<style lang="less">
body {
  background:#ffffff;
  margin: 0px !important;
}
.van-nav-bar {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99999;
}
.video-js .vjs-icon-placeholder {
  width: 100%;
  height: 100%;
  display: block;
}
.margintop {
  margin-top: 1rem;
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
.van-doc-demo-block__title {
  margin: 0;
  padding: 20px 8px 8px;
  color: #1989FA;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  text-align: left;
  .va-span {
    float: right;
    cursor: pointer;
  }
  .va-span:hover {
    border-bottom: 1px solid #e5e5e5;
  }
}
.van-card__title, .van-card__desc {
  text-align: left !important;
}
</style>
