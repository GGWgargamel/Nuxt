<template>
  <div>
    <div class="homePage_container">
      <div class="main">
        <div class="topBg">
          <div class="title">居然管家 品质好管家</div>
          <div
            :class="i.classname"
            @click="sharebtn($event,index)"
            v-for="(i,index) in sharemeau"
            :key="index"
          >
            <a href="javascript:;">{{i.name}}</a>
          </div>
          <!-- <div class="btn btn2" @click='sharebtn($event)'><a href="javascript:;">微信小程序</a></div>
          <div class="btn btn3" @click='sharebtn($event)'><a href="javascript:;">微信公众号</a></div>-->
          <img src="~static/mobile/homePage-bg.png" alt>
          <div class="model-wx" v-if="open" @click="close($event)">
            <div class="box box1" v-if="ind == 0">
              <img src="~static/mobile/Header-ss0.png" alt>
              <p>请长按二维码进入居然管家App</p>
            </div>
            <div class="box box2" v-if="ind == 1">
              <img src="~static/mobile/Header-ss1.png" alt>
              <p>请长按二维码进入技师App</p>
            </div>
            <div class="box box3" v-if="ind == 2">
              <img src="~static/mobile/Header-ss2.png" alt>
              <p>请长按识别二维码进入居然管家小程序</p>
            </div>
            <div class="box box4" v-if="ind == 3">
              <img src="~static/mobile/Header-ss3.png" alt>
              <p>请长按二维码关注居然管家公众号</p>
            </div>
          </div>
        </div>
        <div class="info">
          <div class="info1">
            <div class="title">我们提供高标准服务</div>
            <div class="line"></div>
            <p class="des">从智能家居电器产品解决方案、设备安装、清洁保养、翻新改造到回收换新，我们提供一站式服务。</p>
            <img src="~static/mobile/homePage-info1.png" alt>
          </div>
          <div class="info2">
            <div class="title">我们提供高标准服务</div>
            <div class="line"></div>
            <p class="des">从服务流程、服务工具、人员培训、安全保障，我们尽量做的更多。</p>
            <div class="list">
              <ul>
                <li>
                  <img src="~static/mobile/homePage-info2-icon1.png" alt>
                  <div>
                    <p>流程标准化</p>
                    <span>针对不同服务产品重新定义服务流程标准</span>
                  </div>
                </li>
                <li>
                  <img src="~static/mobile/homePage-info2-icon2.png" alt>
                  <div>
                    <p>工具标准化</p>
                    <span>采用目前市场上优质的服务工具和耗材</span>
                  </div>
                </li>
                <li>
                  <img src="~static/mobile/homePage-info2-icon3.png" alt>
                  <div>
                    <p>培训标准化</p>
                    <span>所有服务人员经过严格的培训考核上岗机制</span>
                  </div>
                </li>
                <li>
                  <img src="~static/mobile/homePage-info2-icon4.png" alt>
                  <div>
                    <p>人员员工化</p>
                    <span>组建自营化服务团队保证服务品质</span>
                  </div>
                </li>
                <li>
                  <img src="~static/mobile/homePage-info2-icon5.png" alt>
                  <div>
                    <p>保障全面化</p>
                    <span>为用户和服务人员提供周全的安全保障</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="info2">
            <div class="title">公司动态</div>
            <div class="line"></div>
            <p class="des">居然管家实时资讯， 随时掌握智能家居服务动态。</p>
            <div class="list-on">
              <img src="~static/mobile/consult/3-3.jpg" alt>
              <h3>
                <router-link to="/mobile/News">居然之家2018年销售额750亿元，门店数量达303家</router-link>
              </h3>
              <p>2019-01-06</p>
              <h4>
                <router-link to="/mobile/consult">查看全部动态</router-link>
              </h4>
            </div>
          </div>
          <div class="info3">
            <img class="bgp" src="~static/mobile/homePage-info3-bg.png">
            <div class="title">联系我们</div>
            <div class="line"></div>
            <p class="des">欢迎您的关注，欢迎您通过热线、社交媒体随时与我们联系。</p>
            <ul class="clearfix">
              <li>
                <p>关注微博</p>
                <span>轻松获取品牌资讯</span>
                <div class="bod">
                  <img src="~static/mobile/homePage-info3-bod.png" alt>
                </div>
                <div class="ip1">
                  <img src="~static/mobile/homePage-info3-p1.png" alt>
                </div>
                <div class="ip2">
                  <img src="~static/mobile/homePage-info3-icon1.png" alt>
                </div>
              </li>
              <li>
                <p>关注头条号</p>
                <span>随时了解服务资讯</span>
                <div class="bod">
                  <img src="~static/mobile/homePage-info3-bod.png" alt>
                </div>
                <div class="ip1">
                  <img src="~static/mobile/homePage-info3-p2.png" alt>
                </div>
                <div class="ip2">
                  <img src="~static/mobile/homePage-info3-icon2.png" alt>
                </div>
              </li>
              <li>
                <p>关注公众号</p>
                <span>随时掌握服务动态</span>
                <div class="bod">
                  <img src="~static/mobile/homePage-info3-bod.png" alt>
                </div>
                <div class="ip1">
                  <img src="~static/mobile/homePage-info3-p3.png" alt>
                </div>
                <div class="ip2">
                  <img src="~static/mobile/homePage-info3-icon3.png" alt>
                </div>
              </li>
            </ul>
            <div class="kefu">
              <p class="nmb">400-155-5151</p>
              <p class="txt">全国统一服务热线</p>
              <p class="kefuphone">
                <a href="tel:400-155-5151">
                  <img src="~static/mobile/homePage-info3-phone.png" alt>
                  <span>在线客服</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'mobile',
  data() {
    return {
      ind: 0,
      open: false,
      sharemeau: [
        { name: '居然管家APP', classname: 'btn btn1' },
        { name: '技师APP', classname: 'btn btn2' },
        { name: '微信小程序', classname: 'btn btn3' },
        { name: '微信公众号', classname: 'btn btn4' }
      ]
    }
  },
  methods: {
    sharebtn(e, index) {
      this._data.open = true
      this.ind = index
    },
    close(e) {
      this._data.open = false
    }
  }
}
</script>

<style scoped>
/*首页*/
.homePage_container .main .topBg {
  /* height: 600px; */
  background: #e0dfdb;
  position: relative;
  overflow: hidden;
}
.homePage_container .main .topBg .title {
  color: #f18e2b;
  font-size: 31px;
  text-align: center;
  font-weight: bolder;
  margin: 60px 0px 30px;
}
.homePage_container .main .topBg .btn {
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: solid 1px #333333;
  line-height: 30px;
  text-align: center;
  color: #333333;
  font-size: 14px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
}
.homePage_container .main .topBg .btn1 {
  top: 140px;
}
.homePage_container .main .topBg .btn2 {
  top: 190px;
}
.homePage_container .main .topBg .btn3 {
  top: 240px;
}
.homePage_container .main .topBg .btn4 {
  top: 290px;
}
.homePage_container .main .topBg .btn a {
  color: #333333;
  display: block;
  width: 100%;
  height: 100%;
}
.homePage_container .main .topBg > img {
  /*position: absolute;
    bottom: 0;
    left: 0;*/
  width: 100%;
  height: auto;
}
.homePage_container .main .topBg .model-wx {
  position: fixed;
  top: 0px;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
}
.homePage_container .main .topBg .model-wx .box {
  height: 260px;
  width: 260px;
  background: #fcfcfc;
  margin: 160px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  box-sizing: border-box;
}
.homePage_container .main .topBg .model-wx .box img {
  width: 140px;
  height: 140px;
  display: block;
  margin-top: 20px;
}
.homePage_container .main .topBg .model-wx .box p {
  color: #333333;
  font-size: 14px;
}
.homePage_container .main .info > div {
  box-sizing: border-box;
  padding: 0px 11px;
  overflow: hidden;
}
.homePage_container .main .info .title {
  color: #333333;
  font-size: 20px;
  font-family: SourceHanSansCN-Medium;
  text-align: center;
  margin-top: 35px;
}
.homePage_container .main .info .line {
  width: 38px;
  height: 3px;
  background-color: #f18e2b;
  margin: 10px auto 30px;
}
.homePage_container .main .info .des {
  color: #666666;
  text-align: center;
}
.homePage_container .main .info .info1 {
  text-align: center;
  padding-bottom: 50px;
  background: #fcfcfc;
  margin-bottom: 10px;
}
.homePage_container .main .info .info1 img {
  margin-top: 30px;
  width: 100%;
}
.homePage_container .main .info .info2 {
  background-color: #ffffff;
  padding-bottom: 110px;
  margin-bottom: 10px;
}
.homePage_container .main .info .info2 .list {
  margin-top: 40px;
}
.homePage_container .main .info .info2 .list li {
  display: flex;
  margin-top: 25px;
}
.homePage_container .main .info .info2 .list li img {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}
.homePage_container .main .info .info2 .list li > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.homePage_container .main .info .info2 .list li > div p {
  font-size: 16px;
  color: #666666;
}
.homePage_container .main .info .info2 .list li > div span {
  font-size: 11px;
  color: #999999;
}
.homePage_container .main .info .info2 .list-on {
  text-align: center;
}
.homePage_container .main .info .info2 .list-on img {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  margin: 60px 50px;
  display: inline-block;
}
.homePage_container .main .info .info2 .list-on h3 {
  color: #333333;
  font-size: 14px;
  width: 60%;
  margin: 0 auto;
  font-weight: 400;
}
.homePage_container .main .info .info2 .list-on h3 a {
  color: #333;
  display: block;
}
.homePage_container .main .info .info2 .list-on p {
  color: #999999;
  font-size: 10px;
  padding-top: 10px;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
}
.homePage_container .main .info .info2 .list-on h4 a {
  color: #f18e2b;
  font-size: 400;
  font-size: 9px;
  padding: 8px 22px;
  border: 1px solid #f18e2b;
  border-radius: 15px;
}
.homePage_container .main .info .info3 {
  background-color: rgba(254, 254, 254, 0.8);
  opacity: 0.8;
  padding-bottom: 110px;
  position: relative;
}
.homePage_container .main .info .info3 .bgp {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.homePage_container .main .info .info3 ul {
  display: flex;
  justify-content: center;
  margin-top: 95px;
}
.homePage_container .main .info .info3 ul li {
  width: 92px;
  height: 90px;
  position: relative;
  text-align: center;
}
.homePage_container .main .info .info3 ul li:nth-child(2) {
  margin: 0 20px;
}
.homePage_container .main .info .info3 ul li p {
  font-size: 10px;
  color: #666666;
  margin-top: 45px;
}
.homePage_container .main .info .info3 ul li span {
  font-size: 8px;
  color: #666666;
}
.homePage_container .main .info .info3 ul li img {
  width: 100%;
  height: 100%;
}
.homePage_container .main .info .info3 ul li .bod {
  width: 92px;
  height: 90px;
  position: absolute;
  top: 0;
  left: 0;
}
.homePage_container .main .info .info3 ul li .ip1 {
  width: 62px;
  height: 62px;
  position: absolute;
  top: -31px;
  left: 50%;
  transform: translateX(-50%);
}
.homePage_container .main .info .info3 ul li .ip2 {
  width: 22px;
  height: 22px;
  position: absolute;
  bottom: -11px;
  left: 50%;
  transform: translateX(-50%);
}
.homePage_container .main .info .info3 .phone {
  margin-top: 72px;
  text-align: center;
}
.homePage_container .main .info .info3 .phone .nmb {
  color: #666666;
  font-size: 24px;
  width: 100%;
  line-height: 40px;
  height: 40px;
}
.homePage_container .main .info .info3 .phone .txt {
  color: #666666;
  font-size: 12px;
  margin: 15px 0px 10px;
}
.homePage_container .main .info .info3 .phone a {
  display: block;
  width: 120px;
  height: 30px;
  background-color: #f18e2b;
  border-radius: 15px;
  padding: 0px 15px;
  box-sizing: border-box;
  margin: 0 auto;
  display: inline-block;
  /*  display: flex;
    align-items: center;
    justify-content: space-around;*/
}
.homePage_container .main .info .info3 .phone a img {
  width: 11px;
  height: 11px;
}
.homePage_container .main .info .info3 .phone a span {
  color: #fcfcfc;
  display: inline-block;
}

.homePage_container .kefu {
  text-align: center;
  margin-top: 72px;
}
.homePage_container .kefu p.nmb {
  font-size: 24px;
  color: #333;
}
.homePage_container .kefu p {
  line-height: 40px;
}
.homePage_container .kefu .kefuphone a {
  width: 120px;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  padding: 0px 15px;
  display: inline-block;
  background: #f90;
}
.homePage_container .kefu .kefuphone a img {
  width: 11px;
  height: 11px;
  vertical-align: middle;
}
.homePage_container .kefu .kefuphone a span {
  color: #fcfcfc;
  display: inline-block;
  vertical-align: middle;
}
</style>
