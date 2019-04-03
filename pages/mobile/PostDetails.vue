<template>
  <div>
    <div class="postDetails_container">
      <div class="header">
        <router-link class="back" to="/Contact">
          <img src="~static/mobile/back-arrow.png">
        </router-link>
        <span>招聘详情</span>
      </div>
      <div class="box1">
        <b>{{name}}</b>
        <p>{{desc}}</p>
        <span>{{release}}</span>
      </div>
      <div class="box2">
        <b>职位详情</b>
        <div v-html="content"></div>
        <div
          class="jobs-butn copy"
          v-clipboard:copy="sysAppIds"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
          @click="shearPlate($event)"
        >投递简历</div>
      </div>
    </div>
    <div class="shearPlate" :style="shear">
      <div class="shearPlate-text">邮箱：zhangjin@shui.cn已复制到剪贴板可通过邮箱直接发送求职简历</div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'mobile_noheader',
  data() {
    return {
      name: '',
      desc: '',
      release: '',
      content: '',
      sysAppIds: 'zhangjin@shui.cn',
      shear: 'display: none'
    }
  },
  methods: {
    onCopy(e) {
      console.log(e)
    },
    // 复制失败
    onError(e) {
      alert('失败')
    },
    shearPlate(e) {
      this.shear = 'display: block'
      setTimeout(() => {
        this.shear = 'display: none'
      }, 3000)
    },
    getlist() {
      this.name = this.$route.query.name
      this.desc = this.$route.query.desc
      this.release = this.$route.query.release
      this.content = this.$route.query.content
      console.log(this.$route.query)
    }
  },
  activated() {
    this.getlist()
  },
  created() {
    this.getlist()
  }
}
</script>

<style scoped>
.postDetails_container .header {
  height: 44px;
  line-height: 44px;
  text-align: center;
  position: relative;
  background: #fcfcfc;
}
.postDetails_container .header .back {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  width: 6px;
  height: 12px;
}
.postDetails_container .header .back img {
  display: block;
  width: 100%;
  height: 100%;
}
.postDetails_container .header span {
  font-size: 16px;
}
.postDetails_container .box1 {
  background: #ffffff;
  padding: 10px;
  border-top: 5px solid #f5f5f5;
  border-bottom: 5px solid #f5f5f5;
}
.postDetails_container .box1 b {
  font-size: 15px;
  font-family: SourceHanSansCN-Regular;
  font-weight: normal;
}
.postDetails_container .box1 p {
  color: #999999;
  margin: 20px 0px 10px;
}
.postDetails_container .box1 span {
  color: #999999;
  margin-bottom: 5px;
  display: block;
}
.postDetails_container .box2 {
  background: #ffffff;
  padding: 20px 10px;
}
.postDetails_container .box2 b {
  font-size: 13px;
  font-family: SourceHanSansCN-Regular;
  font-weight: normal;
}
.postDetails_container .box2 p {
  color: #999999;
  font-size: 11px;
  margin: 20px 0px 10px;
}
.postDetails_container .box2 span {
  font-size: 11px;
  color: #999999;
  line-height: 1.6;
}
.postDetails_container .box2 .space {
  height: 40px;
}
.postDetails_container .box2 .jobs-butn {
  display: block;
  height: 40px;
  background-color: #f18e2b;
  border-radius: 2px;
  color: #fcfcfc;
  font-size: 13px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1px;
  margin: 40px 0px 25px;
}
.shearPlate {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
}
.shearPlate-text {
  width: 160px;
  height: 160px;
  background: rgba(51, 51, 51, 0.6);
  border-radius: 10px;
  color: #fbfbfb;
  font-size: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -100px;
  text-align: center;
  text-align: center;
  padding: 20px;
}
</style>
