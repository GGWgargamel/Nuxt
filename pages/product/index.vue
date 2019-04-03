<template>
<div>
  <div class="banner display-banner">
    <div class="kuang">
      <div class="title wow slideInLeft"><span>居然管家 品质好管家</span></div>
      <div class="content wow bounceInUp" data-wow-delay="0.5s">从智能家居电器产品解决方案、设备安装、保洁保养、翻新改造，我们提供一站式服务。</div>
    </div>
  </div>
  <div class="cates">
      <div class="index-section tab-meau">
        <div class="meau" v-for="(val0,key0) in tableData" :key="key0" @mouseover="onmouse(key0)" :class="ind===key0?'meauon meau':'meau'">
          <span >{{val0.name}}</span>
        </div>
      </div>
    </div>
  <div v-for="(val,key) in tableData" :key="key">
    <div class="display-section"  v-if='ind==key'>
      <div class="index-section" v-for='(val1,key1) in val.third' :key="key1">
        <div class="cateitem">
          <div class="catetitle">{{val1.name}}</div>
          <div class="catecontent">
            <div class="catecon" v-for='(val2,key2) in val1.spuList' :key="key2" @click="openDetail(val2.images,val2.name,val2.productInfo,val3.price,val3.unit)">
              <img :src="val2.images | imgHandler" alt="">
              <p class="middle">{{val2.name}}</p>
              <p class="bottom">查看详情</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popup" v-if='popup==true' @click="pagesDetails($event)">
      <div class="pages-details">
        <!-- 服务产品图片 -->
        <div class="details-img">
          <img :src="detail_picture | imgHandler">
        </div>
        <!-- 服务产品VIP8折 -->
        <!-- <div class="discount">
          <span class="vip">VIP</span>
          <span>加入VIP会员&nbsp;最高享&nbsp;<b class="cred">8折</b>&nbsp;优惠</span>
          <span class="detail-return cred fr">
            立即购买
            <img src="~static/return-red.png">
          </span>
        </div> -->
        <!-- 服务项目 -->
        <div class="mc">
          <div class="table">
            <div class="thead">
              <div class="th">产品名称</div>
              <div class="th">价格</div>
              <!-- <div class="th">会员享8折</div> -->
            </div>
            <div class="tr">
              <div class="td">{{detail_name}}</div>
              <div class="td">{{detail_price}}元 /{{detail_unit}}</div>
              <!-- <div class="td">240元</div> -->
            </div>
          </div>
          <div v-html="detail_productInfo | imgHandler"></div>
        </div>
        <!-- 内容详情 -->
        <div class="section-detail"></div>
          <div class="popup-small" v-if='popupSmall == true'>
            <div class="app">
              <img src="~static/xcx-ewm.png">
              <p>微信扫描进入“居然管家小程序”，体现所选服务</p>
              <span id="app-sure" @click='ewmButn()'>确定</span>
            </div>
          </div>
          <div class="detail-fixed-butn" @click="detailButn()">立即预约</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
var WOWfs
if (process.client) {
  WOWfs = require('wowjs')
}
export default {
  asyncData() {
    return Axios({
      method: 'get',
      url: 'https://newserver.juranguanjia.com/api/web/prodcut/cate/secondCateProducts?cateIds=1001,1002,1003'
    }).then(res => {
      console.log(res)
      if (res.status === 200) {
        return { tableData: res.data.data }
      }
    })
  },
  data() {
    return {
      ind: '',
      popup: ''
    }
  },
  filters: {
    imgHandler: function (imgUrl) {
      if (!imgUrl) {
        return this.defaultPicture;
      } else if (imgUrl.startsWith('http')) {
        return imgUrl;
      }
      return 'https://file.juranguanjia.com/' + imgUrl;
    }
  },
  mounted() {
    if (process.client) {
      new WOWfs.WOW().init()
    }
  },
  methods: {
    onmouse (key) {
      this.ind = key
    },
    openDetail(images, name, productInfo, price, unit) {
      this.popup = true
      this.detail_picture = images
      this.detail_name = name
      this.detail_productInfo = productInfo
      this.detail_price = price
      this.detail_unit = unit
    },
    detailButn() {
      this.popupSmall = true
    },
    ewmButn() {
      this.popupSmall = false
    },
    pagesDetails(e) {
      if (e.target.className === 'popup') {
        this.popup = false
      }
    },
    mouseover(index, e) {
      for (let i = 0; i < e.currentTarget.parentElement.children.length;i++) {
        e.currentTarget.parentElement.children[i].className = 'meau'
      }
      e.currentTarget.className = 'meau meauon'
    }
  },
}

</script>

<style scoped>
/*display.php*/
.display-banner{background: url(~static/banner-2.jpg) top center no-repeat;background-size: cover;height: 876px;padding-top: 100px;padding-left: 400px;overflow: hidden;}
.display-banner .kuang{background: url(~static/banner-2-1.png) top center no-repeat;background-size: cover;height: 272px;width: 206px;padding-top: 70px;padding-left: 42px;}
.display-banner .title{width:560px;height:100px;background:rgba(55,115,206,0.79);font-size: 48px;color: #EDF4FF;text-align: center;font-weight: bold;font-family:"regular";position: relative;}
.display-banner .title span{width:100%;position: absolute;top: 50%;left:50%;display: block;transform:translate(-50%, -50%);}
.display-banner .content{font-size: 18px;color: #2F65B5;display: inline-block;width: 900px;margin-top: 22px;}
.display-section{width: 100%;background: #fff;}
.display-section .cates{border-bottom:1px solid #eee;height: 80px;text-align: right;}
.display-section .cates .meau{text-align: center;font-size: 20px;height: 65px;margin-top: 15px;display: inline-block;line-height: 50px;}
.display-section .cates .meau:last-child span{border:0;}
.display-section .cates .meau span{border-right: 1px solid #999;padding:0 30px 0px;}
.display-section .cates .meauon{color: #F18E2B;border-bottom: 3px solid #F18E2B;}
.display-section .cates .meau-ts{border-right: 0;}
.cates{border-bottom:1px solid #eee;height: 80px;text-align: right;}
.cates .meau{text-align: center;font-size: 20px;height: 65px;margin-top: 15px;display: inline-block;line-height: 50px;}
.cates .meau:last-child span{border:0;}
.cates .meau span{border-right: 1px solid #999;padding:0 30px 0px;}
.cates .meauon{color: #F18E2B;border-bottom: 3px solid #F18E2B;}
.cates .meau-ts{border-right: 0;}
.display-section .index-section .cateitem{position: relative;margin-top: 82px;padding-left: 200px;}
.display-section .index-section .cateitem:last-child{margin-bottom: 82px;}
.display-section .index-section  .cateitem .catetitle{width: 200px;font-size: 24px;padding-left: 10px;border-left: 4px solid #F18E2B;position: absolute;left: 0;}
.display-section .index-section  .cateitem .catecontent{display: flex;justify-content: flex-start;flex-wrap: wrap;}
.display-section .index-section  .cateitem .catecontent .catecon{width: 220px;text-align: center;font-size: 16px;padding: 30px 0 10px;margin: 0 15px;border:1px solid #fff;overflow: hidden;}
.display-section .index-section  .cateitem .catecontent .catecon img{width: 120px;height: 120px;border-radius: 4px;}
.display-section .index-section  .cateitem .catecontent .catecon .middle{padding: 20px 0;color: #666666;}
.display-section .index-section  .cateitem .catecontent .catecon .bottom{padding: 10px 30px;background:#AEC1F9;border-radius:20px;color:#FDFDFD;margin: 0 20px;cursor:pointer;opacity: 0;}
.display-section .index-section  .cateitem .catecontent .catecon:hover{background:#EAEEFA;border:1px solid #AEC1F9;}
.display-section .index-section  .cateitem .catecontent .catecon:hover .bottom{opacity: 1;}
.pages-details{width: 750px;height: 100%;margin: 0 auto;background: #fff;overflow-y:scroll;overflow-x:hidden;}
.pages-details .details-img{width:100%;height: 390px;}
.pages-details .details-img img{width:100%;height: 100%;}
.pages-details .discount{padding: 0 16px;background: #F1F3F7;height: 50px;line-height: 50px;}
.pages-details .discount .vip{padding: 2px 12px;font-size: 20px;color: #fff;background: #F18E2C;border-radius: 5px 10px 5px 10px;font-weight: bold;margin-right: 10px;}
.pages-details .discount span{font-size: 18px;}
.pages-details .discount .detail-return img{width: 20px;height: 20px;vertical-align: middle;}
.pages-details .mc{padding:5px 16px;max-width: 100%;}
.pages-details .mc .table{width:100%;margin:0 auto;border:solid 1px #F1F3F7;border-right:0;border-bottom:0;margin: 20px 0;font-size: 20px;}
.pages-details .mc .table .thead{font-weight: bold;background: #F1F3F7;display:flex;justify-content:space-around;}
.pages-details .mc .table .thead th{height: 32px;}
.pages-details .mc .table .tr{display:flex;justify-content:space-between;}
.pages-details .mc .table .td,.pages-details .mc .table .th{padding:10px;border-right:solid 1px #F1F3F7;border-bottom:solid 1px #F1F3F7;width:100%;text-align:center;color:#666;}
.pages-details .app{width: 670px;height: 460px;margin: 0 auto;margin-top:100px;background: url(~static/xcx-background.png) top center no-repeat;background-size: cover;text-align: center;border-radius: 10px;}
.pages-details .app img{width: 220px;height: 220px;margin: 40px 225px 0;}
.pages-details .app p{font-size: 24px;color: #070721;margin: 35px 0;}
.pages-details .app span{padding: 20px 150px;background: #F19232;border-radius: 10px;color: #FEFEFE;font-size: 36px;}
.pages-details .detail-fixed-butn{width:100%;height:105px;line-height:105px;text-align: center;position: fixed;bottom: 0;background: #FF0000;color: #FEFEFE;font-size: 40px;}
/*设计数据库内容*/
.section-detail{padding-bottom:105px;margin-top: 20px;}
.section-detail p{font-size: 20px;line-height: 20px;}
.section-detail img{max-width: 100%;vertical-align:middle;border-bottom: 10px solid #F1F3F7;}
</style>
