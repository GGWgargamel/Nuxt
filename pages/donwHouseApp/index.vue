<template>
<div class="pages-cgrey">
  <div class="appguide" style="display: none;" ref="appguide">
          <img src="~static/guanjiawx.png">
      </div>
      <div class="appdown" style="display: none;" ref="appdown">
          <div class="butnzu">
              <div class="appdown-butn" @click="downApp()">
                  <img src="~static/downappbutn.png">
              </div>
          </div>
      </div>
      <div class="appdown" style="display: none;" ref="appios">
          <div class="butnzu">
              <div class="appdown-butn" @click="iosApp()">
                  <img src="~static/downappios.png">
              </div>
          </div>
      </div>
</div>
</template>

<script>
export default {
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
          'android': 'http://juranfile.oss-cn-beijing.aliyuncs.com/file/user/Android/%E5%B1%85%E7%84%B6%E7%AE%A1%E5%AE%B6.apk',
          // 'ios':'https://itunes.apple.com/cn/app//id1454189948?mt=8',
        };
      if (isAndroid) {
        window.location.href = urls.android;
      }
      // else if(isiOS){
      //     window.location.href=urls.ios;
      // }
    },
    iosApp() {
      var u = navigator.userAgent,
        isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        urls = {
          // 'android':'http://juranfile.oss-cn-beijing.aliyuncs.com/file/user/Android/app-release.apk',
          'ios': 'https://itunes.apple.com/cn/app//id1454189948?mt=8',
        };
      if (isiOS) {
        window.location.href = urls.ios;
      }
      // else if(isiOS){
      //     window.location.href=urls.ios;
      // }
    }
  }
}
</script>

<style scoped>
.appdown{background: url(~static/guanjiadown.png) bottom center no-repeat;background-size:cover;position: fixed;bottom:0;width: 100%;height: 100%;}
.appdown .butnzu{width: 80%;position: absolute;bottom:15%;left: 10%;}
.appdown .butnzu .appdown-butn{width: 47%;margin: 0 auto;}
.appdown .butnzu .appdown-butn img{display: block;width: 100%;}
.appguide{background: url(~static/guanjiadown.png) bottom center no-repeat;background-size:cover;width: 100%;height: 100%;}
.appguide img{display: block;width: 100%;margin: 0 auto;}
</style>

