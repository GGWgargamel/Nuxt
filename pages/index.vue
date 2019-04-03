<template>
  <div>
    <div class="banner index-banner">
      <p class="wow slideInLeft">居然管家 品质好管家</p>
      <div class="butn-box">
        <div
          class="butn wow bounceInUp"
          data-wow-delay="0.5s"
          @mouseover="bannerover(0)"
          @mouseleave="bannerleave('')"
        >
          <span>居然管家APP</span>
          <img src="~static/index-banner-gjAPP.png" v-if="index == 0" />
        </div>
        <div
          class="butn wow bounceInUp"
          data-wow-delay="0.7s"
          @mouseover="bannerover(1)"
          @mouseleave="bannerleave('')"
        >
          <span>技师APP</span>
          <img src="~static/index-banner-jsAPP.png" v-if="index == 1" />
        </div>
        <div
          class="butn wow bounceInUp"
          data-wow-delay="0.9s"
          @mouseover="bannerover(2)"
          @mouseleave="bannerleave('')"
        >
          <span>微信小程序</span>
          <img src="~static/index-banner-xcx.png" v-if="index == 2" />
        </div>
        <div
          class="butn wow bounceInUp"
          data-wow-delay="1.1s"
          @mouseover="bannerover(3)"
          @mouseleave="bannerleave('')"
        >
          <span>微信公众号</span>
          <img src="~static/index-banner-wxggh.png" v-if="index == 3" />
        </div>
      </div>
    </div>
    <div class="index-section">
      <div class="service">
        <div class="pattern"></div>
        <div class="title">我们为您管家</div>
        <div class="text">
          从智能家居电器产品解决方案、设备安装、清洁保养、翻新改造到回收换新，我们提供一站式服务。
        </div>
      </div>
      <div class="content">
        <div class="item">
          <div class="list fl wow bounceInDown">
            <a href="JavaScript:;" title="设备安装"
              ><img src="~static/2-sbaz.png"
            /></a>
          </div>
          <div class="list wow fl bounceInDown">
            <a href="JavaScript:;" title="家政服务"
              ><img src="~static/2-jzfw.png"
            /></a>
          </div>
        </div>
        <div class="item item1">
          <div class="list list1 fl wow bounceInLeft">
            <a href="JavaScript:;" title="解决方案"
              ><img src="~static/2-jjfa.png"
            /></a>
          </div>
          <div
            class="list-big fl wow pulse"
            data-wow-iteration="4"
            data-wow-duration="0.25s"
          >
            <a href="JavaScript:;" title="一站式服务"
              ><img src="~static/2-yzs.png"
            /></a>
          </div>
          <div class="list list1 fl wow bounceInRight">
            <a href="JavaScript:;" title="清洁保养"
              ><img src="~static/2-qjby.png"
            /></a>
          </div>
        </div>
        <div class="item">
          <div class="list fl wow bounceInUp">
            <a href="JavaScript:;" title="回收换新"
              ><img src="~static/2-hshx.png"
            /></a>
          </div>
          <div class="list fl wow bounceInUp">
            <a href="JavaScript:;" title="翻新改造"
              ><img src="~static/2-fxgz.png"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="index-box">
      <div class="index-section">
        <div class="service clear">
          <div class="pattern fr"></div>
          <div class="title">我们提供高标准服务</div>
          <div class="text">
            从服务流程、服务工具、人员培训、安全保障，我们尽量做的更多。
          </div>
        </div>
        <div class="content clear">
          <div class="flowsheet fl">
            <img :src="flowsheet[num].img" :alt="flowsheet[num].alt" />
          </div>
          <ul class="procedure fl">
            <li
              class="step"
              v-for="(i, index) in procedure"
              :key="index"
              @mouseover="step(index, $event)"
              @mouseleave="stepleave(index, $event)"
            >
              <i :class="i.style"></i>
              <span class="feature">
                <span>{{ i.name }}</span>
                <p :class="[errorClass, i.isActive ? activeClass : '']">
                  {{ i.xq }}
                </p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="index-section">
      <div class="service">
        <div class="pattern"></div>
        <div class="title">公司动态</div>
        <div class="text">
          居然管家实时资讯， 随时掌握智能家居服务动态。<span class="fr"
            ><router-link to="/consult">动态列表 ►</router-link></span
          >
        </div>
      </div>
      <div class="consult">
        <div class="dynamic">
          <div class="lists">
            <h5>
              <router-link to="/content/news"
                >居然之家2018年销售额750亿元，门店数量达303家。</router-link
              >
            </h5>
            <div class="lists-bot">
              <span>2019-01-06</span>
              <span class="details-btn"
                ><router-link to="/content/news" class="details-hover"
                  >进入详情</router-link
                ></span
              >
            </div>
          </div>
        </div>
        <div class="dynamic dynamic-mid">
          <img src="~static/consult/3-3.jpg" />
        </div>
        <div class="dynamic">
          <div class="lists">
            <h5>
              <router-link to="/content/newsone"
                >居然管家CEO周速华：云上服务
                物联生活—居然管家的数字化转型探索。</router-link
              >
            </h5>
            <div class="lists-bot">
              <span>2018-12-13</span>
              <span><router-link to="/content/newsone">进入详情</router-link></span>
            </div>
          </div>
          <div class="lists">
            <h5>
              <router-link to="/content/newstwo"
                >居然之家强势加码 智能家居市场或迎新变局。</router-link
              >
            </h5>
            <div class="lists-bot">
              <span>2018-07-30</span>
              <span><router-link to="/content/newstwo">进入详情</router-link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var WOWfs
if (process.client) {
  WOWfs = require('wowjs')
}
export default {
  layout: 'default',
  data() {
    return {
      isActive: false,
      errorClass: 'discss',
      activeClass: 'display',
      bannerpic: false,
      index: -1,
      num: 0,
      flowsheet: [
        {
          img: '/images/index-3-5.png',
          alt: ''
        },
        {
          img: '/images/index-3-4.png',
          alt: ''
        },
        {
          img: '/images/index-3-3.png',
          alt: ''
        },
        {
          img: '/images/index-3-2.png',
          alt: ''
        },
        {
          img: '/images/index-3-1.png',
          alt: ''
        }
      ],
      procedure: [
        {
          style: 'icons icons-flow',
          name: '流程标准化',
          xq: '针对不同服务产品重新定义服务流程标准',
          isActive: false
        },
        {
          style: 'icons icons-tool',
          name: '工具标准化',
          xq: '采用目前市场上优质的服务工具和耗材',
          isActive: false
        },
        {
          style: 'icons icons-train',
          name: '培训标准化',
          xq: '所有服务人员经过严格的培训考核上岗机制',
          isActive: false
        },
        {
          style: 'icons icons-personnel',
          name: '人员员工化',
          xq: '组建自营化服务团队，保证服务品质',
          isActive: false
        },
        {
          style: 'icons icons-guarantee',
          name: '保障全面化',
          xq: '为用户和服务人员提供周全的安全保障',
          isActive: false
        }
      ]
    }
  },
  mounted() {
    if (process.client) {
      new WOWfs.WOW().init()
    }
  },
  methods: {
    bannerover(index) {
      this._data.bannerpic = true
      this._data.index = index
    },
    bannerleave(index) {
      this._data.bannerpic = false
      this._data.index = -1
    },
    step(index, e) {
      this.num = index
      this.procedure[index].isActive = true
      for (let i = 0; i < e.currentTarget.parentElement.children.length; i++) {
        e.currentTarget.parentElement.children[i].className = 'step'
      }
      e.currentTarget.className = 'step step-on'
    },
    stepleave(index, e) {
      this.num = index
      this.procedure[index].isActive = false
      e.currentTarget.className = 'step'
      for (let i = 0; i < e.currentTarget.parentElement.children.length; i++) {
        e.currentTarget.parentElement.children[i].className = 'step'
      }
      e.currentTarget.className = 'step step-on'
    }
  }
}
</script>

<style scoped>
#text {
  text-align: center;
  text-indent: 0;
}
.index-banner {
  background: url(~static/banner-1.jpg) top center no-repeat;
  background-size: cover;
  height: 876px;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.index-banner p {
  font-size: 58px;
  color: #f18e2b;
  font-weight: bold;
  position: absolute;
  top: 235px;
  display: inline-block;
  font-family: 'regular';
}
.index-banner .butn-box {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 357px;
}
.index-banner .butn-box .butn {
  width: 140px;
  height: 45px;
  margin: 0 20px;
  border: 1px solid #070002;
  border-radius: 10px;
  line-height: 45px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
}
.index-banner .butn-box .butn:hover {
  border: 1px solid #f18e2b;
  background: #f18e2b;
  color: #fdfdfd;
  height: 45px;
  line-height: 45px;
}
.index-banner .butn-box .butn img {
  width: 188px;
  height: 208px;
  display: block;
  margin-left: -29px;
}
.index-section .service {
  padding-top: 72px;
}
.index-section .service .pattern {
  width: 76px;
  height: 6px;
  background: #f18e2b;
}
.index-section .service .title {
  width: 100%;
  font-size: 32px;
  font-weight: 500;
  margin-top: 30px;
}
.index-section .service .text {
  width: 100%;
  font-size: 18px;
  color: #666666;
  margin-top: 20px;
}
.index-section .content {
  margin: 48px 0 49px;
}
.index-section .content .item {
  width: 562px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}
.index-section .content .item .list img {
  width: 124px;
  height: 124px;
}
.index-section .content .item .list a:after {
  content: attr(title);
  display: block;
  font-size: 20px;
  text-align: center;
}
.index-section .content .item1 {
  width: 662px;
}
.index-section .content .item .list1 img {
  margin-top: 48px;
}
.index-section .content .item .list-big img {
  width: 364px;
  height: 260px;
}
.index-box {
  background: #fff;
  text-align: right;
}
.index-box .index-section .content .flowsheet {
  width: 706px;
  height: 700px;
  position: relative;
}
.index-box .index-section .content .flowsheet img {
  max-width: 100%;
  position: absolute;
  bottom: 0;
  display: block;
}
.index-box .index-section .content .procedure {
  margin-left: 90px;
  margin-top: 60px;
  text-align: left;
}
.index-box .index-section .content .procedure .step {
  margin-bottom: 20px;
}
.index-box .index-section .content .procedure .step-on {
  color: #f18e2b;
}
.index-box .index-section .content .procedure .step .icons {
  vertical-align: top;
}
.index-box .index-section .content .procedure .step-on .icons-flow {
  background-position: -20px -20px;
  width: 80px;
  height: 80px;
}
.index-box .index-section .content .procedure .step-on .icons-tool {
  background-position: -215px -20px;
  width: 80px;
  height: 80px;
}
.index-box .index-section .content .procedure .step-on .icons-train {
  background-position: -412px -20px;
  width: 80px;
  height: 80px;
}
.index-box .index-section .content .procedure .step-on .icons-personnel {
  background-position: -610px -20px;
  width: 80px;
  height: 80px;
}
.index-box .index-section .content .procedure .step-on .icons-guarantee {
  background-position: -806px -20px;
  width: 80px;
  height: 80px;
}
.index-box .index-section .content .procedure .step .feature {
  display: inline-block;
  font-size: 24px;
  line-height: 64px;
  text-align: left;
  padding-left: 31px;
}
.index-box .index-section .content .procedure .step .feature .discss {
  display: none;
  color: #666666;
  font-size: 16px;
  width: 220px;
  line-height: 30px;
}
.index-box .index-section .content .procedure .step .feature .display {
  display: block;
  color: #666666;
  font-size: 16px;
  width: 220px;
  line-height: 30px;
}
.index-main {
  background: url(~static/4-contactbackground.jpg) top center no-repeat;
  z-index: 999;
  width: 100%;
}
.index-main .index-section .content {
  margin-top: 160px;
  position: relative;
  padding-left: 450px;
  padding-bottom: 60px;
}
.index-main .index-section .content .contact {
  color: #666666;
  width: 250px;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
}
.index-main .index-section .content .contact .mobile {
  font-size: 40px;
  margin-bottom: 20px;
}
.index-main .index-section .content .contact .text {
  font-size: 22px;
  margin-bottom: 20px;
}
.index-main .index-section .content .contact .butn {
  width: 200px;
  margin: 0 25px;
  border-radius: 25px;
  height: 50px;
  color: #fcfcfc;
  font-size: 24px;
  background: #f18e2b;
  line-height: 50px;
}
.index-main .index-section .content .myself {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.index-main .index-section .content .myself .follow img {
  width: 125px;
  height: 125px;
  margin-left: 54px;
}
.index-main .index-section .content .myself .follow .app {
  margin-top: 37px;
}
.index-main .index-section .content .myself .follow .app .appr {
  margin-left: 10px;
  font-size: 18px;
}
.index-main .index-section .content .myself .follow .app .appr .small {
  font-size: 16px;
}
.consult {
  display: flex;
  justify-content: space-between;
  padding: 42px 0 85px;
}
.dynamic {
  width: 390px;
  padding: 0 10px 0 0;
}
.dynamic-mid {
  width: 420px;
}
.dynamic h3 {
  color: #333333;
  font-size: 26px;
  font-weight: 400;
  padding-top: 106px;
  width: 100%;
}
.dynamic h3 a {
  display: block;
  width: 100%;
}
.dynamic h6 {
  color: #999999;
  font-size: 16px;
  padding-top: 40px;
  font-weight: 400;
}
.dynamic .details {
  padding-top: 80px;
  color: #666;
  font-size: 16px;
  height: 60px;
  line-height: 60px;
}
.dynamic .details a {
  display: flex;
  justify-content: flex-start;
}
.dynamic .details .details-btn {
  color: #333;
}
.dynamic .details .details-btn .details-hover:hover {
  color: #f18e2b;
}
.lists-bot a:hover {
  color: #f18e2b;
}
.dynamic-mid img {
  width: 420px;
  height: 420px;
  border-radius: 50%;
}
.dynamic:first-child {
  margin-right: 120px;
  width: 270px;
}
.dynamic:first-child .lists {
  margin-top: 105px;
}
.dynamic:last-child {
  margin-left: 120px;
  width: 270px;
}
.dynamic .lists {
  padding-top: 106px;
}
.dynamic .lists:last-child {
  margin-top: 40px;
}
.dynamic h5 {
  color: #333333;
  font-size: 18px;
  font-weight: 400;
}
.dynamic .lists-bot {
  width: 100%;
  font-size: 16px;
  color: #999999;
  position: relative;
}
.dynamic .lists-bot span:first-child {
  position: absolute;
  bottom: 0;
  left: 0;
  top: 20px;
}
.dynamic .lists-bot span:last-child {
  position: absolute;
  bottom: 0;
  right: 0;
  top: 20px;
}
</style>
