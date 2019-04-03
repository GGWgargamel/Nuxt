<template>
<div class="pages-cgrey">
  <div class="appguide" style="display: none;" ref="appguide">
      <img src="~static/jishiwx.png">
  </div>
  <div class="appdown" style="display: none;" ref="appdown">
      <div class="butnzu">
          <div class="appdown-butn" @click="downApp()">
              <img src="~static/downappbutn.png">
          </div>
      </div>
  </div>
  <div class="appios" style="display: none;" ref="appios">
      <div class="text">
          <p>iOS app技师服务端敬请期待，</p>
          <p>使用请关注微信公众号“居然管家”，移步至居然服务—管家技师栏目</p>
      </div>
  </div>
</div>
</template>

<script>
export default {
  layout: 'mobile_noheader',
  data() {
    return {
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    getlist() {
      var e = navigator.userAgent;
      var t = 'micromessenger';
      var n = new RegExp(t, 'i');
      var isiOS = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (n.test(e) ? !0 : !1) {
        // 微信操作
        this.$refs.appguide.style.display = 'block'
      } else if (isiOS) {
        // 苹果
        this.$refs.appios.style.display = 'block'
      } else {
        // 普通浏览器操作
        this.$refs.appdown.style.display = 'block'
      }
    },
    downApp() {
      var u = navigator.userAgent,
        isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
        urls = {
          'android': 'http://juranfile.oss-cn-beijing.aliyuncs.com/file/worker/app-realese.apk',
          // 'ios':'https://file.juranguanjia.com/file/worker.0.0.4.apk',
        };
      if (isAndroid) {
        window.location.href = urls.android;
      }
      // else if(isiOS){
      //     window.location.href=urls.ios;
      // }
    }
  }
}
</script>

<style scoped>
.appdown{background: url(~static/jishidown.png) bottom center no-repeat;background-size:cover;position: fixed;bottom:0;width: 100%;height: 100%;}
.appdown .butnzu{width: 80%;position: absolute;bottom:15%;left: 10%;}
.appdown .butnzu .appdown-butn{width: 47%;margin: 0 auto;}
.appdown .butnzu .appdown-butn img{display: block;width: 100%;}
.appguide{background: url(~static/jishiwx.png) bottom center no-repeat;background-size:cover;width: 100%;height: 100%;}
.appguide img{display: block;width: 100%;margin: 0 auto;}
.appios{background: url(~static/jishidown.png) bottom center no-repeat;background-size:cover;position: fixed;bottom:0;width: 100%;height: 100%;}
.appios .text{color: #fff;font-size: 12px;width: 80%;text-align: center;height: 50px;line-height: 25px;position: absolute;bottom: 10%;left: 10%;}
</style>

