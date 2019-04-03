<template>
  <div id="app">
    <!-- header -->
    <div id="header" v-if="!getUser">
      <div class="op1 " @click="headmeau()">
        <div class="div-L">
          <img src="~static/mobile/Header-icon1.png" alt="" />
        </div>
        <div v-if="bb" class="div-R">
          <span>菜单</span>
          <img src="~static/mobile/Header-icon2.png" alt="" />
          <!-- <img :src="meaupic" alt="" /> -->
        </div>
      </div>
      <div class="op2" @click="guanbi()">
        <div v-if="bb" class="div-L">
          <img src="~static/mobile/Header-icon1.png" alt="" />
        </div>
        <div v-if="aa" class="div-R">
          <img src="~static/mobile/Header-icon2x.png" alt="" />
        </div>
        <!--快速导航-->
        <div v-if="aa" class="list-link">
          <ul>
            <li>
              <router-link to="/mobile">
                <span>品牌介绍</span>
                <img src="~static/mobile/Header-arrow.png" />
              </router-link>
            </li>
            <li>
              <router-link to="/mobile/Product">
                <span>我们的服务</span>
                <img src="~static/mobile/Header-arrow.png" />
              </router-link>
            </li>
            <li>
              <router-link to="/mobile/About">
                <span>关于我们</span>
                <img src="~static/mobile/Header-arrow.png" />
              </router-link>
            </li>
            <li>
              <router-link to="/mobile/Bizreg">
                <span>技师招募</span>
                <img src="~static/mobile/Header-arrow.png" />
              </router-link>
            </li>
            <li>
              <router-link to="/mobile/Contact">
                <span>联系我们</span>
                <img src="~static/mobile/Header-arrow.png" />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nuxt />
    <!-- footer -->
    <div id="footer" v-if="!getUser">
      <div class="foot-items foot-items-on">
        <div class="item">
          <div @click="num == 0 ? changeDisplay($event) : change($event)">
            <div class="mh">关于我们</div>
            <i :class="styleclass"></i>
          </div>
          <div class="mc">
            <p class="p" @click="backtop()">
              <router-link to="/mobile/about">关于我们</router-link>
            </p>
            <p class="p" @click="backtop()">
              <router-link to="/mobile/contact">加入我们</router-link>
            </p>
            <p class="p" @click="backtop()">
              <router-link to="/mobile/contact">联系我们</router-link>
            </p>
          </div>
        </div>
        <div class="item">
          <div @click="num == 0 ? changeDisplay($event) : change($event)">
            <div class="mh">资讯中心</div>
            <i :class="styleclass"></i>
          </div>
          <div class="mc">
            <p class="p" @click="backtop()">
              <router-link to="/mobile/consult">公司动态</router-link>
            </p>
            <p class="p" @click="backtop()">
              <router-link to="/mobile/consult">媒体报道</router-link>
            </p>
          </div>
        </div>
        <div class="item">
          <div @click="num == 0 ? changeDisplay($event) : change($event)">
            <div class="mh">帮助中心</div>
            <i :class="styleclass"></i>
          </div>
          <div class="mc">
            <p class="p" @click="backtop()">
              <router-link to="Help">下单说明</router-link>
            </p>
            <p class="p" @click="backtop()">
              <router-link to="Help">服务保障</router-link>
            </p>
            <p class="p" @click="backtop()">
              <router-link to="Help">订单处理</router-link>
            </p>
          </div>
        </div>
        <div class="item item-on">
          <div class="mh">友情链接</div>
          <div class="mc">
            <a href="http://www.juran.com.cn/">
              <img src="~static/mobile/footer/jrzj-logo.png" alt="" />
            </a>
            <a href="https://www.homestyler.com/cn/">
              <img src="~static/mobile/footer/sjj-logo.png" alt="" />
            </a>
            <a href="http://www.yijiacorp.com/">
              <img src="~static/mobile/footer/yjjs-logo.png" alt="" />
            </a>
            <a href="https://www.xdjd.cn/">
              <img src="~static/mobile/footer/wyfw-logo.png" alt="" />
            </a>
            <a href="https://www.wuyoufuwu.com/">
              <img src="~static/mobile/footer/xdjd.png" alt="" />
            </a>
            <a href="https://juranguanjia.jd.com/">
              <img src="~static/mobile/footer/jd-logo.png" alt="" />
            </a>
            <a href="https://yijiajinshui.tmall.com/">
              <img src="~static/mobile/footer/tm-logo.png" alt="" />
            </a>
          </div>
        </div>
        <div class="txt">
          ©2009-2018 居然管家·智能家居服务平台 版权所有 京ICP备18060047号
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      num: 0,
      aa: false,
      bb: true,
      footclose: false,
      footopen: true,
      styleclass: 'icons icons-news-open',
      route: this.$route.path,
      isUser: false
    }
  },
  created() {
    this.route = this.$route.path
    this.getUser = this.$store.getters.getUser
  },
  methods: {
    headmeau() {
      this._data.aa = true
      this._data.bb = false
    },
    guanbi() {
      this._data.aa = false
      this._data.bb = true
    },
    changeDisplay(e) {
      e.currentTarget.children[1].className = 'icons icons-news-shut'
      e.currentTarget.nextElementSibling.className = 'mc mc-on'
      this._data.num = 1
    },
    change(e) {
      e.currentTarget.children[1].className = 'icons icons-news-open'
      e.currentTarget.nextElementSibling.className = 'mc'
      this._data.num = 0
    },
    backtop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style scoped>
/* 初始化 */
body,
div,
ul,
li,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
input,
textarea,
select,
p,
dl,
dt,
dd,
a,
img,
button,
form,
table,
th,
tr,
td,
tbody,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  margin: 0;
  padding: 0;
}
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  margin: 0;
  padding: 0;
}
/* *{margin: 0;padding: 0;} */
body {
  color: #333;
  background-color: #f5f5f5;
  min-width: 300px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
}
em,
i {
  font-style: normal;
}
ul,
li {
  list-style-type: none;
}
strong {
  font-weight: normal;
}
.icons {
  background: url(~static/mobile/icons.png) no-repeat;
  vertical-align: middle;
  display: inline-block;
  background-size: 1200px 1062px;
  -webkit-background-size: 1200px 1062px;
}
.icons-contact-search {
  background-position: -340px -635px;
  width: 30px;
  height: 30px;
}
.icons-news-weibo {
  background-position: -495px -970px;
  width: 22px;
  height: 20px;
}
.icons-news-open {
  background-position: -447px -974px;
  width: 13px;
  height: 13px;
}
.icons-news-shut {
  background-position: -404px -974px;
  width: 13px;
  height: 13px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clear {
  clear: both;
}

.clearfix:after {
  content: '';
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
}
.clearfix {
  zoom: 1;
}
a {
  text-decoration: none;
  /*color: #4c9bde;*/
}
a:hover {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
img {
  border: none;
}
input {
  outline: none;
}
/*单行溢出*/
.one-txt-cut {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/*多行溢出 手机端使用*/
.txt-cut {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* -webkit-line-clamp: 2; */
  -webkit-box-orient: vertical;
}
/* 移动端点击a链接出现蓝色背景问题解决 */
a:link,
a:active,
a:visited,
a:hover {
  background: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type='number'] {
  -moz-appearance: textfield;
}
.modal-open {
  position: fixed;
  width: 100%;
}

/*公共头部*/
#header {
  height: 44px;
  padding: 0px 15px;
  background: #fcfcfc;
  position: relative;
  z-index: 9999999;
  top: 0;
}
#header > div {
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}
#header .div-L {
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
}
#header .div-L img {
  display: block;
  width: 85px;
  height: 25px;
}
#header .div-R {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
#header .div-R span {
  margin-right: 7px;
  font-size: 10px;
  color: #333333;
}
#header .op1 .div-R img {
  display: block;
  width: 18px;
  z-index: 99;
  height: 15px;
}
#header .op2 .div-R img {
  display: block;
  width: 18px;
  height: 20px;
}
#header .op2 {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0px 15px;
  box-sizing: border-box;
}
#header .op2 .list-link {
  background: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 44px;
  left: 0;
  z-index: 999;
  display: block;
}
#header .op2 .list-link ul {
  width: 100%;
  background: #fcfcfc;
  padding: 20px;
  box-sizing: border-box;
  border-top: 1px solid goldenrod;
  display: block;
}
#header .op2 .list-link ul li {
  border-bottom: 1px solid #f5f5f5;
  height: 50px;
}
#header .op2 .list-link ul li a {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #666666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
}
#header .op2 .list-link ul li a img {
  width: 16px;
  height: 16px;
}
#header .active {
  visibility: hidden;
}
/*公共底部*/
#footer {
  position: relative;
  bottom: 0;
}
.foot-items {
  background: #fff;
  margin-top: 10px;
}
.foot-items .item {
  padding: 5px 0;
  position: relative;
  border-bottom: 1px solid #f1f3f7;
}
.foot-items .item:last-child {
  border-bottom: 0px;
}
.foot-items .item .mh {
  line-height: 40px;
  font-weight: bold;
  margin: 0 16px;
  font-size: 13px;
  color: #333;
}
.foot-items .item .icons {
  float: right;
  position: absolute;
  right: 2%;
  top: 15px;
}
.foot-items .item .mc {
  padding: 10px 0;
  display: none;
}
.foot-items .item .mc-on {
  padding: 10px 0;
  display: block;
}
.foot-items .item .mc p {
  line-height: 30px;
  padding: 0 16px;
  color: #666666;
  font-size: 11px;
}
.foot-items .item .mc p a {
  color: #666666;
  display: block;
}
.foot-items .item-on .mc {
  display: block;
  color: #9b9b9b;
  font-size: 12px;
}
.foot-items .item-on .mc img {
  width: 50px;
  height: 15px;
  margin: 10px;
}
.foot-items-on {
  margin-top: 0;
}
.foot-items .txt {
  height: 80px;
  color: #fdfdfd;
  font-size: 10px;
  background: #130b05;
  line-height: 80px;
  text-align: center;
}
</style>
