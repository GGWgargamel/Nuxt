<template>
<div>
  <div class="error">
          <img src="~static/404.png">
          <h2>小管家溜号了</h2>
          <h3>抱歉你访问的网站已丢失，<span id="sp">{{count}}</span><span>秒</span>后将返回首页</h3>
          <div class="error-butn"><router-link to="/">返回首页</router-link></div>
      </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      count: '', // 倒计时
    }
  },
  created() {
    this.delayURL();
  },
  methods: {
    delayURL() {
      const TIME_COUNT = 30000;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            // 跳转的页面写在此处
            window.location.href = 'https://www.juranguanjia.com';
          }
        }, 1000)
      }
    }
  }
}
</script>

<style>
.error{width: 100%;height: 100%;position: fixed;top: 0;}
.error img{display: block;margin: 0 auto;}
.error h2{color: #333;padding-top: 40px;font-size: 30px;text-align: center;}
.error h3{color: #666;padding-top: 30px;font-size: 20px;text-align: center;}
.error h3 span{color:#F18E2B;}
.error .error-butn{background:#F18E2B;height: 50px;line-height: 50px;width: 150px;text-align: center;margin:0 auto;margin-top: 50px;border-radius: 25px;font-size: 20px;}
.error .error-butn a{display: block;color:white;}
</style>
