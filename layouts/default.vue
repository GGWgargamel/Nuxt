<template>
<div id="app">
  <!-- 头部 -->
  <div class="header" v-if="!getUser">
    <div class="head clear">
      <div class="logo fl"><router-link to='/'><img src="~static/jrgj-logo.png"></router-link></div>
      <ul class="fr">
        <li @click='backtop()'><router-link to='/'>品牌介绍</router-link></li>
        <li @click='backtop()'><router-link to='/product'>我们的服务</router-link></li>
        <li @click='backtop()'><router-link to='/about'>关于我们</router-link></li>
        <li @click='backtop()'><router-link to='/bizreg'>技师招募</router-link></li>
        <li @click='backtop()'><router-link to='/contact'>联系我们</router-link></li>
      </ul>
    </div>
  </div>
  <nuxt />
  <!-- 底部 -->
  <div class="footer" v-if="!getUser">
    <div class="index-section">
      <ul class="ucenter">
        <li class="title" @click='backtop()'><router-link to='/about'>关于我们</router-link></li>
        <li @click='backtop()'><router-link to='/about'>关于我们</router-link></li>
        <li @click='backtop()'><router-link to='/contact'>加入我们</router-link></li>
        <li @click='backtop()'><router-link to='/contact'>联系我们</router-link></li>
      </ul>
      <ul class="ucenter">
        <li class="title" @click='backtop()'><router-link to='/consult'>资讯中心</router-link></li>
        <li @click='backtop()'><router-link to='/consult'>公司动态</router-link></li>
        <li @click='backtop()'><router-link to='/consult'>媒体报道</router-link></li>
      </ul>
      <ul class="ucenter">
        <li class="title" @click='backtop()'><router-link to='help'>帮助中心</router-link></li>
        <li @click='backtop()'><router-link to='help'>下单说明</router-link></li>
        <li @click='backtop()'><router-link to='help'>服务保障</router-link></li>
        <li @click='backtop()'><router-link to='help'>订单处理</router-link></li>
      </ul>
      <ul class="ucenter friendship">
        <li class="title">友情链接</li>
        <div class="company">
          <a href="http://www.juran.com.cn/">
            <img src="~static/footer/juran.png">
          </a>
          <a href="https://www.homestyler.com/cn/">
            <img src="~static/footer/sjj.png" class="paddingzy">
          </a>
          <a href="http://www.yijiacorp.com/">
            <img src="~static/footer/yijia.png">
          </a>
          <a href="https://www.xdjd.cn/">
            <img src="~static/footer/xdjd.png">
          </a>
          <a href="https://www.wuyoufuwu.com/">
            <img src="~static/footer/wy.png" class="paddingzy">
          </a>
        </div>
        <div class="company">
          <a href="https://juranguanjia.jd.com/">
            <img src="~static/footer/jd.png">
          </a>
          <a href="https://yijiajinshui.tmall.com/">
            <img src="~static/footer/tm.png" class="paddingzy">
          </a>
        </div>
      </ul>
    </div>
    <div class="copyright">©2009-2018 居然管家·智能家居服务平台 版权所有 京ICP备18060047号</div>
  </div>
  <div class="back-to-top" @click='backtop($event)' ref='backtop' v-show="scrollTop > 300"><img src="~static/top.png"></div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      route: this.$route.path,
      scrollTop: 0
    }
  },
  created: function() {
    this.route = this.$route.path
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
    backtop(e) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    handleScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    },
    mobile_device_detect(url) {
      var thisOS = navigator.platform;
      var os = new Array(['iPhone', 'iPod', 'iPad', 'android', 'Nokia', 'SymbianOS', 'Symbian', 'Windows Phone', 'Phone', 'Linux armv71', 'MAUI', 'UNTRUSTED/1.0', 'Windows CE', 'BlackBerry', 'IEMobile']);
      for (let i = 0;i < os.length;i++) {
        if (thisOS.match(os[i])) {
          window.location = url;
        }
      }
      // 因为相当部分的手机系统不知道信息,这里是做临时性特殊辨认
      if (navigator.platform.indexOf('iPad') !== -1) {
        window.location = url;
      }
      // 做这一部分是因为Android手机的内核也是Linux
      // 但是navigator.platform显示信息不尽相同情况繁多,因此从浏览器下手，即用navigator.appVersion信息做判断
      let check = navigator.appVersion;
      if (check.match(/linux/i)) {
        // X11是UC浏览器的平台 ，如果有其他特殊浏览器也可以附加上条件
        if (check.match(/mobile/i) || check.match(/X11/i)) {
          window.location = url;
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style>
/*固定窗*/
.head,.index-section{width: 1200px;margin: 0 auto;overflow: hidden;}
.popup{width: 100%;height:100%;background:rgba(0,0,0,0.5);position:fixed;top: 0;z-index: 9999;overflow:hidden;}
.popup-small{width: 100%;height:100%;left:0;background:rgba(0,0,0,0.5);position: fixed;top:0;z-index: 9999;}
/*页面背景色*/
.pages-cgrey{background: #FAFAFA;}
.pages-cwhite{background: #ffffff;width: 100%;}
/*精灵图标*/
.icons{background:url(~static/icons.png) no-repeat;vertical-align:middle;display:inline-block;background-size:1200px 1062px;-webkit-background-size:1200px 1062px;}
.icons-flow{background-position:-118px -20px;width:80px;height:80px;}
.icons-tool{background-position:-314px -20px;width:80px;height:80px;}
.icons-train{background-position:-510px -20px;width:80px;height:80px;}
.icons-personnel{background-position:-708px -20px;width:80px;height:80px;}
.icons-guarantee{background-position:-905px -20px;width:80px;height:80px;}
.icons-weibo{background-position:-1003px -55px;width:44px;height:44px;}
.icons-toutiao{background-position:-1066px -55px;width:44px;height:44px;}
.icons-gongzhonghao{background-position:-1129px -55px;width:44px;height:44px;}
.icons-phone{background-position:-50px -973px;width:20px;height:20px;}
.icons-about1{background-position:-20px -835px;width:90px;height:90px;}
.icons-about2{background-position:-115px -810px;width:120px;height:120px;}
.icons-about3{background-position:-255px -835px;width:90px;height:90px;}
.icons-about4{background-position:-360px -835px;width:90px;height:90px;}
.icons-about5{background-position:-465px -810px;width:120px;height:120px;}
.icons-about6{background-position:-595px -797px;width:130px;height:130px;}
.icons-contact-adr{background-position:-20px -710px;width:80px;height:80px;}
.icons-contact-mobile{background-position:-118px -710px;width:80px;height:80px;}
.icons-contact-brand{background-position:-216px -710px;width:80px;height:80px;}
.icons-contact-media{background-position:-316px -710px;width:80px;height:80px;}
.icons-contact-business{background-position:-413px -710px;width:80px;height:80px;}
.icons-contact-emergency{background-position:-240px -635px;width:30px;height:30px;}
.icons-contact-search{background-position:-340px -635px;width:30px;height:30px;}
.icons-contact-down{background-position:-440px -645px;width:30px;height:30px;}
.icons-contact-up{background-position:-540px -645px;width:30px;height:30px;}
.icons-consuslt-search{background-position: -103px -972px;width:16px;height:16px;}
.icons-news-weibo{background-position: -178px -972px;width:22px;height:20px;}
.icons-news-weixin{background-position: -279px -972px;width:22px;height:20px;}
.icons-news-qq{background-position: -349px -972px;width:22px;height:20px;}
/*头部导航*/
.header{width: 100%;background: #fff;height: 84px;position: fixed;top: 0;left: 0;z-index: 999;border-bottom:1px solid #eee;}
.header .head{text-align: center;height: 84px;}
.header .head .logo{width: 150px;height: 41px;margin: 22px 0 21px;}
.header .head .logo img{width: 100%;height: 100%;}
.header .head ul{height: 84px;}
.header .head ul li{font-size: 20px;line-height: 84px;margin: 0 20px;display: inline-block;width: 100px;}
.header .head ul .on,.header .head ul li:hover{line-height: 76px;border-bottom:4px solid #F18E2B;color: #F18E2B;}
.header .head ul li a{display: block;}
.index-banner{margin-top: 84px;}
/*底部footer*/
.footer{width: 100%;}
.footer .index-section{height:470px;display: flex;justify-content: space-between;padding-top: 160px;}
.footer .index-section .ucenter{width: 88px;}
.footer .index-section .friendship{width: 410px;}
.footer .index-section .friendship li{text-align: left;}
.footer .index-section .ucenter li{font-size: 16px;line-height: 40px;}
.footer .index-section .ucenter .title{color: #130B05;font-weight: bold;padding-bottom: 31px;font-size: 18px;}
.footer .index-section .friendship .company{text-align: left;}
.footer .index-section .friendship .company img{width: 100px;height: 36px;display:inline-block;}
.footer .index-section .friendship .company:last-child img{width: 170px;height: 50px;display: inline-block;margin-top: 20px;}
.paddingzy{margin: 0 24px;}
.footer .copyright{background: #130B05;color: #FDFDFD;height: 160px;text-align: center;line-height: 160px;font-size: 16px;}
/*返回顶部*/
.back-to-top{position: fixed;right:5%;bottom:50px;display:none;}
.back-to-top img{max-width: 100%;}
/*分页器*/
.paging{margin:100px 0;display: flex;justify-content: center;}
.paging ul{display: flex;justify-content: center;}
.paging li{border:1px solid #999999;border-radius: 4px;text-align: center;line-height: 40px;height: 40px;width: 80px;color: #999999;font-size: 18px;float: left;background: #f7f7f7;margin:0 5px;}
.paging li.active{border:1px solid #f18e2b;color:#f18e2b;background: #fff;cursor: default;}
.paging li a{display: block;}
.paging li.active a{cursor: default;}
.paging-on{margin:60px 0 30px;}
/* 全局样式 */
* {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;-webkit-text-size-adjust:none;}
html{-ms-touch-action: none;}
html,body,div,h1,h2,h3,h4,h5,h6,ul,dl,p,input,textarea,select,dt,dd,label{margin:0; padding:0;}
body{font-family:"思源黑体 Normal","Helvetica","Arial",sans-serif;color:#333;background-color:#fff;font-size:14px;}
header,article,section,footer{display: block;}
dl,ul,ol,li{list-style:none;}
h1,h2,h3,h4,h5,h6{font-size:100%;}
/* p{line-height:30px;} */
a{text-decoration: none;color:#333;}
a,a:hover{outline:none;}
a img{outline: none; border-style: none; border-width: 0;}
small{font-size:12px;}
.clear{clear:both;zoom:1;}
.clear:after{clear:both;content:"";display:block;height: 0;visibility:hidden;}
.fl{float:left;}
.fr{float:right;}
.del{text-decoration:line-through;font-weight:normal;color:#B3B3B3;margin-left:10px; }
.fixed{position:fixed;width:100%;bottom:0px;left:0px;z-index:999;background-color:#fff;}
.fixed-layer{width:80%;margin:0 auto;border-radius:8px;margin-top:80px;overflow:hidden;}
.fixed-mh{height:35px;line-height:35px;text-align:center;position:relative;}
.fixed-mh .close{font-size:12px;color:#A4A4A4;position:absolute;right:10px;height:35px;}
.fixed-mc{border-radius:8px;overflow:hidden;}
.fixed-tool{background-color:#f5f5f5;border-top:solid 1px #f5f5f5;}
.fixed-tool span{display:inline-block;width:49.9%;text-align:center;line-height:35px;}
.fixed-tool span:nth-child(2n){border-left:solid 1px #d5d5d5;}
/*全局样式-字体大小*/
.tsize-12{font-size:12px;}
.tsize-13{font-size:13px;}
.tsize-14{font-size:14px;}
.tsize-16{font-size:16px;}
.tsize-18{font-size:18px;}
/*全局样式-对齐方式*/
.ucenter{text-align:center;}
.uright{text-align:right;}
.uleft{text-align:left;}
.vtop{vertical-align:top;}
.vcenter{vertical-align:middle;}
.vbotm{vertical-align:bottom;}
.vbase{vertical-align:baseline;}

/*全局样式-分页样式*/
.pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:4px;}
.pagination > li{display:inline;}
.pagination > li > a,.pagination > li > span {position: relative;float: left;padding: 6px 12px; margin-left: -1px;line-height: 1.42857143;color: #47A3FF;text-decoration: none;background-color: #fff;border: 1px solid #ddd;}
.pagination > li:first-child > a,.pagination > li:first-child > span{margin-left: 0;border-top-left-radius: 4px;border-bottom-left-radius: 4px;}
.pagination > li:last-child > a,
.pagination > li:last-child > span {border-top-right-radius: 4px;border-bottom-right-radius: 4px;}
.pagination > li > a:hover,.pagination > li > span:hover,.pagination > li > a:focus,.pagination > li > span:focus {z-index: 2;color: #23527c;background-color: #eee;border-color: #ddd;}
.pagination > .active > a,.pagination > .active > span,.pagination > .active > a:hover,.pagination > .active > span:hover,.pagination > .active > a:focus,.pagination > .active > span:focus{z-index: 3;color: #fff;cursor: default;background-color: #337ab7;border-color: #337ab7;}
.pagination > .disabled > span,.pagination > .disabled > span:hover,.pagination > .disabled > span:focus,.pagination > .disabled > a,.pagination > .disabled > a:hover,.pagination > .disabled > a:focus {color: #777;cursor: not-allowed;background-color: #fff;border-color: #ddd;}
.pagination > li:last-child span input[type="text"]{color:#E2E2E2;vertical-align:top;}

/*全局样式-白色字体*/
.cwhite{color:#fff;}
.cwhite a,.cwhite a:link,.cwhite a:hover,.cwhite a:visited,.cwhite a:active{color:#fff;text-decoration:none;}
/*全局样式-黑色字体*/
.cblack{color:#000;}
.cblack a,.cblack a:link,.cblack a:hover,.cblack a:visited,.cblack a:active{color:#000;text-decoration:none;}
/*全局样式-红色字体*/
.cred{color:#FF0000;}
.cred a,.cred a:link,.cred a:hover,.cred a:visited,.cred a:active{color:#FF0000;text-decoration:none;}
/*全局样式-黄色字体*/
.cyel{color:#FFBF01;}
.cyel a,.cyel a:link,.cyel a:hover,.cyel a:visited,.cyel a:active{color:#FFBF01;text-decoration:none;}
/*全局样式-橙色字体*/
.corg{color:#ed6d1f;}
.corg a,.corg a:link,.corg a:hover,.corg a:visited,.corg a:active{color:#ed6d1f;text-decoration:none;}
/*全局样式-浅绿色字体*/
.cgreen{color:#12B15F;}
.cgreen a,.cgreen a:link,.cgreen a:hover,.cgreen a:visited,.cgreen a:active{color:#12B15F;text-decoration:none;}
/*全局样式-灰色字体*/
.cgray{color:#A4A4A4;}
.cgray a,.cgray a:link,.cgray a:hover,.cgray a:visited,.cgray a:active{color:#A4A4A4;text-decoration:none;}
/*全局样式-蓝色字体*/
.cblue{color:#2D9DE7;}
.cblue a,.cbluea:link,.cblue a:hover,.cblue a:visited,.cblue a:active{color:#2D9DE7;text-decoration:none;}

small{font-size:12px;}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder, select>option:first-child{ color:#cccccc;}
input:-moz-placeholder, textarea:-moz-placeholder { color:#cccccc;}
input::-moz-placeholder, textarea::-moz-placeholder { color:#cccccc;}
input:-ms-input-placeholder, textarea:-ms-input-placeholder { color:#cccccc;}
input[type="number"],input[type="text"],input[type="date"],button,select,textarea{outline:none;-webkit-appearance:none;appearance:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-modify:read-write-plaintext-only;}
input[type="number"],input[type="text"],input[type="date"],select,button,textarea{border:solid 1px #ECECEC; line-height: 30px;width: 100%;font-size: 14px;}
input[type="number"],input[type="text"],input[type="date"],select,textarea{text-indent:.5em;}
input[type=checkbox],input[type=radio]{-webkit-appearance: none; appearance: none;width:20px;height:20px;  margin: 0;cursor: pointer;vertical-align: bottom;background: #fff;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;position: relative;border: 1px solid #999999;vertical-align:middle;}
input[type=checkbox]:active,input[type=radio]:active {background: #8AA5F3;}
input[type=checkbox]:hover,input[type=radio]:hover {background: #8AA5F3;}
input[type=checkbox]:checked,input[type=radio]:checked {background: #8AA5F3;}
input[type=checkbox]:checked::after,input[type=radio]:checked::after{background: #8AA5F3;}
input[type=checkbox]:focus,input[type=radio]:focus{outline: none;background: #8AA5F3;}

.fr .router-link-exact-active{line-height: 76px;border-bottom:4px solid #F18E2B;color: #F18E2B;}
</style>
