<template>
<div class="pages-cgrey">
  <!-- 弹出职位详情 -->
  <div class="join-head">
    <div class="index-section">
      <router-link to='contact'>返回加入我们</router-link>
    </div>
  </div>
  <div class="job-details contact-part index-section">
    <div class="screen-head">
      <h3>{{name}}</h3>
      <div class="likes">
        <div class="tools">
          <span>{{desc}}</span>
          <span>发布时间：{{release}}</span>
        </div>
        <span class="jianli copy" v-clipboard:copy="sysAppIds"  @click='shearPlate($event)'>投递简历</span>
      </div>
    </div>
    <div class="screen-foot">
      <div class="job-details">
        <h3>职位详情</h3>
        <div v-html="content"></div>
      </div>
      <div class="jobs-butn copy" v-clipboard:copy="sysAppIds"  @click='shearPlate($event)'>投递简历</div>
    </div>
  </div>
  <div class="back-to-top"><img src="~static/top.png"></div>
  <div class="shearPlate" :style="shear">
    <div class="shearPlate-text">邮箱：zhangjin@shui.cn已复制到剪贴板可通过邮箱直接发送求职简历</div>
  </div>
</div>
</template>

<script>
export default {
  layout: 'content',
  data() {
    return {
      sysAppIds: 'zhangjin@shui.cn',
      shear: 'display: none',
      name: '',
      desc: '',
      release: '',
      content: ''
    };
  },
  methods: {
    shearPlate(e) {
      this._data.shear = 'display: block'
      setTimeout(() => {
        this._data.shear = 'display: none'
      }, 3000)
    },
    getlist() {
      this.name = this.$route.query.name
      this.desc = this.$route.query.desc
      this.release = this.$route.query.release
      this.content = this.$route.query.content
    }

  },
  activated () {
    this.getlist()
  },
  created() {
    this.getlist()
  }
}
</script>

<style>
.join-head{background: #fff;height: 84px;line-height: 84px;font-size: 20px;}
.join-head a{padding-left: 30px;display: block;}
.job-details{margin-top: 20px;margin-bottom: 128px;}
.job-details .screen-head,.job-details .screen-foot{background: #fff;padding-bottom: 20px;margin-bottom: 20px;}
.job-details .screen-head h3{display:block;font-size: 30px;font-weight:400;line-height:44px;padding: 30px 0 30px 30px;}
.job-details .screen-foot{padding-bottom: 92px;}
.job-details .screen-foot .job-details h3{padding: 30px 0 30px 30px;font-size: 24px;font-weight:400;}
.job-details .likes{display: flex;justify-content: space-between;padding: 0 30px;}
.job-details .likes .tools span{color: #999999;font-size: 20px;line-height: 24px;display: block;}
.job-details .likes .tools span:last-child{font-size: 16px;margin-top: 10px;}
.job-details .likes .jianli{width: 160px;height: 50px;background: #F18E2B;border-radius: 4px;color: #FCFCFC;font-size: 20px;line-height: 50px;text-align: center;}
.job-details .require{margin-bottom: 81px;}
.job-details .require p{font-size: 18px;color: #999999;line-height: 40px;margin:0;padding-left: 30px;}
.job-details .require .title{color: #999999;line-height: 24px;margin-bottom: 20px;}
.job-details .jobs-butn{margin: 0 370px;background: #F18E2B;font-size: 20px;color: #FCFCFC;width: 460px;height: 60px;line-height: 60px;text-align: center;border-radius: 4px;}
.shearPlate{width: 100%;height: 100%;position: fixed;top:0;}
.shearPlate-text{width:452px;height:260px;background:rgba(51,51,51,0.6);border-radius:10px;color: #FBFBFB;font-size: 20px;position: fixed;top:50%;left: 50%;margin-left: -226px;margin-top:-130px;text-align: center;padding:98px 45px;}
#copytext{opacity: 0;}
</style>
