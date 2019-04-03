<template>
  <div>
    <div class="aboutUs_container">
      <div class="main">
        <div class="banner">
          <img src="~static/mobile/aboutUs-banner.png" />
        </div>
        <div class="slogn">
          <div>
            <p>定位</p>
            <span>会员制智能家居服务平台</span>
            <img src="~static/mobile/aboutUs-slogn1.png" />
          </div>
          <div>
            <p>使命</p>
            <span>人人都享有健康舒适的生活</span>
            <img src="~static/mobile/aboutUs-slogn2.png" />
          </div>
          <div>
            <p>愿景</p>
            <span>会员制智能家居服务的开创者和领导者</span>
            <img src="~static/mobile/aboutUs-slogn3.png" />
          </div>
        </div>
        <div class="info1">
          <img src="~static/mobile/aboutUs-p1.png" />
          <div class="msg">
            <h2>大家居服务闭环</h2>
            <p>
              作为智能家居服务平台，将与居然之家设计家平台、连锁卖场、智慧物流等业务形成完善的大家居业务闭环。
            </p>
          </div>
        </div>
        <div class="info2">
          <h2>董事及管理团队</h2>
          <ul>
            <li>
              <img src="~static/mobile/aboutUs-t1 .png" />
              <div>
                <b>汪林朋</b>
                <span>董事长、法人</span>
              </div>
              <p>居然之家集团董事长</p>
            </li>
          </ul>
          <ul>
            <li>
              <img src="~static/mobile/aboutUs-t2.png" />
              <div>
                <b>王宁</b>
                <span>董事</span>
              </div>
              <p>居然之家集团总裁</p>
            </li>
            <li>
              <img src="~static/mobile/aboutUs-t3.png" />
              <div>
                <b>周速华</b>
                <span>董事</span>
              </div>
              <p>居然管家CEO</p>
            </li>
          </ul>
          <ul>
            <li>
              <img src="~static/mobile/aboutUs-t4.png" />
              <div>
                <b>肖爱民</b>
                <span>董事</span>
              </div>
              <p>居然管家副总裁</p>
            </li>
            <li>
              <img src="~static/mobile/aboutUs-t5.png" />
              <div>
                <b>李韶芳</b>
                <span>董事</span>
              </div>
              <p>居然之家集团运营总监</p>
            </li>
          </ul>
          <ul>
            <li>
              <img src="~static/mobile/aboutUs-t6.png" />
              <div>
                <b>胡浩松</b>
                <span>董事</span>
              </div>
              <p>居然设计家总经理</p>
            </li>
            <li>
              <img src="~static/mobile/aboutUs-t7.png" />
              <div>
                <b>雷平</b>
                <span>董事</span>
              </div>
              <p>居然管家无忧服务总经理</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'mobile',
  data() {
    return {}
  }
}
</script>

<style scoped>
.aboutUs_container .main .banner {
  margin-bottom: 10px;
}
.aboutUs_container .main .banner img {
  width: 100%;
}
.aboutUs_container .main .slogn {
  display: flex;
  justify-content: space-between;
  padding: 50px 10px;
  background: #fcfcfc;
  margin-bottom: 10px;
}
.aboutUs_container .main .slogn > div {
  height: 150px;
  background-color: #f0f4f8;
  border-radius: 5px;
  width: 31.6%;
  text-align: center;
  position: relative;
}
.aboutUs_container .main .slogn > div img {
  width: 75px;
  height: 75px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%) translateY(-50%);
}
.aboutUs_container .main .slogn > div p {
  margin: 50px 0px 20px;
  font-size: 15px;
}
.aboutUs_container .main .slogn > div span {
  display: block;
  color: #666666;
  line-height: 1.6;
  height: 35px;
  overflow: hidden;
  padding: 0 10px;
}
.aboutUs_container .main .info1 {
  position: relative;
  margin-bottom: 10px;
}
.aboutUs_container .main .info1 img {
  width: 100%;
}
.aboutUs_container .main .info1 .msg {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 10px;
}
.aboutUs_container .main .info1 .msg h2 {
  font-size: 20px;
  font-family: SourceHanSansCN-Medium;
  font-weight: normal;
  margin: 20px 0;
  position: relative;
}
.aboutUs_container .main .info1 .msg h2::after {
  display: block;
  content: '';
  width: 38px;
  height: 3px;
  background-color: #f18e2b;
  position: absolute;
  bottom: -10px;
  left: 0;
}
.aboutUs_container .main .info1 .msg p {
  color: #666666;
  line-height: 1.6;
}
.aboutUs_container .main .info2 {
  background-color: #fcfcfc;
  padding: 10px 0px;
  margin-bottom: 10px;
}
.aboutUs_container .main .info2 h2 {
  font-size: 20px;
  font-family: SourceHanSansCN-Medium;
  font-weight: normal;
  text-align: center;
  position: relative;
  margin: 15px 0px 45px;
}
.aboutUs_container .main .info2 h2::after {
  display: block;
  content: '';
  width: 59px;
  height: 3px;
  background-color: #f18e2b;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}
.aboutUs_container .main .info2 ul {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}
.aboutUs_container .main .info2 li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  box-sizing: border-box;
}
.aboutUs_container .main .info2 li > div {
  margin: 5px 0px;
}
.aboutUs_container .main .info2 li img {
  width: 86px;
  height: 86px;
  border-radius: 43px;
}
.aboutUs_container .main .info2 li b {
  font-size: 13px;
  margin-right: 5px;
}
.aboutUs_container .main .info2 li span {
  color: #666666;
}
.aboutUs_container .main .info2 li p {
  text-align: center;
  color: #666666;
}
</style>
