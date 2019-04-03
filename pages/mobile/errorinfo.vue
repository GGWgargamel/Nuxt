<template>
  <div>
    <div class="error404">
      <img src="~static/mobile/404.png">
      <h2>小管家溜号了</h2>
      <h3>
        抱歉你访问的网站已丢失，
        <span id="sp">{{count}}</span>
        <span>秒</span>后将返回首页
      </h3>
      <div class="error-butn">
        <router-link to="/mobile">返回首页</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'mobile',
  data() {
    return {
      count: '' // 倒计时
    }
  },
  created() {
    this.delayURL()
  },
  methods: {
    delayURL() {
      const TIME_COUNT = 3
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
            // 跳转的页面写在此处
            this.$router.push('/mobile')
          }
        }, 1000)
      }
    }
  }
}
</script>

<style scoped>
.error404 {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: #fff;
}
.error404 img {
  display: block;
  margin: 0 auto;
  width: 300px;
  height: 299px;
}
.error404 h2 {
  color: #333;
  padding-top: 40px;
  font-size: 25px;
  text-align: center;
}
.error404 h3 {
  color: #666;
  padding-top: 30px;
  font-size: 16px;
  text-align: center;
}
.error404 h3 span {
  color: #f18e2b;
}
.error404 .error-butn {
  background: #f18e2b;
  height: 50px;
  line-height: 50px;
  width: 150px;
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 25px;
  font-size: 20px;
}
.error404 .error-butn a {
  display: block;
  color: white;
}
</style>
