<template>
<div>
  <div class="banner about-banner">
    <p class="title wow slideInLeft">居然管家 品质好管家</p>
    <p class="content wow bounceInUp" data-wow-delay="0.5s">居然管家为服务人员提供系统化的培训课程和管理运营体系。通过全封闭强
  化训练，理论结合实操，考核通过后发放相应的技能证书，并安排上门服务。</p>
  </div>
  <div class="pages-cwhite">
    <div class="about-section">
      <div class="opinion">
        <img src="~static/dw.png">
        <p class="title">使命</p>
        <p>会员制智能家居服务平台</p>
      </div>
      <div class="opinion">
        <img src="~static/sm.png">
        <p class="title">愿景</p>
        <p>人人都享有健康舒适的生活</p>
      </div>
      <div class="opinion">
        <img src="~static/yj.png">
        <p class="title">价值观</p>
        <p>全员制智能家居服务的开创者和领导者</p>
      </div>
    </div>
  </div>
  <div class="index-main about-main">
    <div class="index-section clear about-us">
      <div class="about-service fl">
        <div class="pattern"></div>
        <div class="title">联系我们</div>
        <div class="text">作为智能家居服务平台，将与居然之家设计家
  平台、连锁卖场、智慧物流等业务形成完善的大家居业务闭环。</div>
      </div>
      <div class="about-content fr">
        <div class="part1">
          <i class="icons icons-about1 forum wow bounceInDown" data-wow-delay="0.5s"></i>
          <p class="wow bounceInDown">设计家装修云平台</p>
        </div>
        <div class="part2">
          <i class="icons icons-about2 forum wow bounceInRight" data-wow-delay="0.5s"></i>
          <p class="wow bounceInRight">家具材料采购平台</p>
        </div>
        <div class="part3">
          <i class="icons icons-about3 forum wow bounceInUp" data-wow-delay="0.5s"></i>
          <p class="wow bounceInUp">家居电器连锁销售平台</p>
        </div>
        <div class="part4">
          <i class="icons icons-about4 forum wow bounceInUp" data-wow-delay="0.5s"></i>
          <p class="wow bounceInUp">施工管理平台</p>
        </div>
        <div class="part5">
          <i class="icons icons-about5 forum wow bounceInLeft" data-wow-delay="0.5s"></i>
          <p class="wow bounceInLeft">智慧物流配送平台</p>
        </div>
        <div class="part6 chosen">
          <i class="icons icons-about6 forum wow bounceInDown" data-wow-delay="0.5s"></i>
          <p class="wow bounceInDown">智能家居服务平台</p>
        </div>
      </div>
    </div>
  </div>
  <div class="pages-cwhite">
    <div class="index-section about-part">
      <div class="service">
        <div class="title">董事及管理团队</div>
        <div class="pattern"></div>
      </div>
      <div class="content">
        <div class="boss">
          <img src="~static/3-4-wanglp.jpg">
          <p><span>汪林朋</span>    董事长、法人</p>
          <p>居然之家集团董事长</p>
        </div>
        <div class="boss">
          <img src="~static/3-4-wangn.jpg">
          <p><span>王宁</span>    董事</p>
          <p>居然之家集团总裁</p>
        </div>
        <div class="boss">
          <img src="~static/3-4-zhoush.jpg">
          <p><span>周速华</span>    董事</p>
          <p>居然管家CEO</p>
        </div>
        <div class="boss">
          <img src="~static/3-4-xiaoam.jpg">
          <p><span>肖爱民</span>    董事</p>
          <p>居然管家副总裁</p>
        </div>
        <div class="boss">
          <img src="~static/3-4-lisf.jpg">
          <p><span>李韶芳</span>    董事</p>
          <p>居然之家集团运营总监</p>
        </div>
        <div class="boss">
          <img src="~static/3-4-huhs.jpg">
          <p><span>胡浩松</span>    董事</p>
          <p>居然设计家总经理</p>
        </div>
        <div class="boss">
          <img src="~static/3-4-leip.jpg">
          <p><span>雷平</span>    董事</p>
          <p>居然管家无忧服务总经理</p>
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
  data() {
    return {};
  },
  mounted() {
    if (process.client) {
      new WOWfs.WOW().init()
    }
  },
}
</script>

<style scoped>
.about-banner{background: url(~static/banner-3.jpg) top center no-repeat;background-size: cover;height: 876px;color: #FCFCFC;padding: 228px 300px 499px;text-align: center;}
.about-banner .title{font-family:"regular";font-size: 60px;font-weight: bold;}
.about-banner .content{font-size: 20px;padding-top: 40px;line-height: 35px;}
.about-section{display: flex;justify-content: center;padding: 177px 204px 84px;}
.about-section .opinion{width:300px;height:344px;background:rgba(240,244,248,1);border-radius:10px;text-align: center;position: relative;padding-top: 77px;margin:0 20px;}
.about-section .opinion img{width: 154px;height: 155px;position: absolute;top: -77px;left: 73px;}
.about-section .opinion p{width: 185px;display: inline-block;color: #666666;font-size: 20px;line-height: 52px;}
.about-section .opinion .title{color: #333333;font-size: 24px;padding: 47px 0 27px;line-height: 30px;}
.about-main{background: url(~static/3-3-fwbh-di.jpg) top center no-repeat;}
.about-us{padding: 110px 117px 100px 0;}
.about-service{width: 478px;padding: 0px;}
.about-service{padding-top: 0px;}
.about-service .pattern{width:76px;height: 6px;background:#F18E2B;}
.about-service .title{font-size: 32px;font-weight:500;margin-top: 30px;}
.about-service .text{font-size:18px;color: #666666;margin-top: 32px;}
.about-content{width:542px;height:407px;position: relative;background: url(~static/3-3-bh.png) top center no-repeat;background-size:contain;color: #333333;font-size: 20px;text-align: center;}
.about-content p{width: 143px;}
.about-content .chosen p{width: 195px;color: #ED523D;font-size: 24px;}
.about-content .part1 .forum{position: absolute;top: -50px;right: 105px;}
.about-content .part1 p{position: absolute;top: -65px;right: -15px;}
.about-content .part2 .forum{position: absolute;top: 76px;right: -59px;}
.about-content .part2 p{position: absolute;top: 192px;right: -117px;}
.about-content .part3 .forum{position: absolute;bottom: 55px;right: 82px;}
.about-content .part3 p{position: absolute;bottom: 1px;right: -33px;}
.about-content .part4 .forum{position: absolute;bottom: -14px;left: 142px;}
.about-content .part4 p{position: absolute;bottom: -35px;left: 205px;}
.about-content .part5 .forum{position: absolute;bottom: 39px;left: -42px;}
.about-content .part5 p{position: absolute;top: 211px;left: -126px;}
.about-content .part6 .forum{position: absolute;top: 37px;left: 56px;}
.about-content .part6 p{position: absolute;top: -25px;left: 89px;}
.about-content .p{position: absolute;top: 37px;left: 56px;}
.about-part .service{padding: 100px 0 0;text-align: center;}
.about-part .service .pattern{width:116px;display: inline-block;margin-top: 30px;}
.about-part .service .pattern-on{width: 80px;}
.about-part .content{display: flex;justify-content:center;flex-wrap: wrap;}
.about-part .content .boss{width: 300px;padding: 31px 0;text-align:center;}
.about-part .content .boss img{width: 200px;height: 200px;margin-bottom: 30px;}
.about-part .content .boss p{font-size: 20px;color: #666666;line-height: 52px;}
.about-part .content .boss span{color: #333333;font-weight: bold;}
</style>
