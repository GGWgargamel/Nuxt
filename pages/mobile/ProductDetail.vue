<template>
  <div>
    <div class="productDetail_container">
      <div class="header">
        <router-link class="back" to="/mobile/Product">
          <img src="~static/mobile/back-arrow.png">
        </router-link>
        <span>产品详情</span>
      </div>
      <div class="main">
        <div class="productImg">
          <div class="details-img">
            <img :src="this.$route.query.images | imgHandler">
          </div>
          <!-- 服务项目 -->
          <div class="mc">
            <table border="1" cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <th>产品名称</th>
                  <th>价格</th>
                  <!-- <th>会员享8折</th> -->
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{this.$route.query.name}}</td>
                  <td>{{this.$route.query.price}}元 /{{this.$route.query.unit}}</td>
                  <!-- <td>240元</td> -->
                </tr>
              </tbody>
            </table>
            <div v-html="this.$route.query.productInfo | imgHandler"></div>
          </div>
        </div>
        <div class="btn" @click="open($event)">立即预约</div>
        <div class="model-s" v-if="share" @click="close($event)">
          <div class="box">
            <img src="~static/mobile/productDetail-ss.png" alt>
            <p>长按二维码进入“居然管家小程序”，体验所选服务！</p>
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
      defaultPicture: require('../../static/default_head.jpg'),
      share: false,
      imgHandler: ''
    }
  },
  filters: {
    imgHandler: function(imgUrl) {
      if (!imgUrl) {
        return this.defaultPicture
      } else if (imgUrl.startsWith('http')) {
        return imgUrl
      }
      return 'https://file.juranguanjia.com/' + imgUrl
    }
  },
  methods: {
    open(e) {
      this._data.share = true
    },
    close(e) {
      this._data.share = false
    }
  }
}
</script>

<style scoped>
.details-img {
  width: 100%;
  height: 390px;
}
.details-img img {
  width: 100%;
  height: 100%;
}
.mc {
  padding: 5px 16px;
  max-width: 100%;
}
.mc table {
  width: 100%;
  border: solid 1px #f1f3f7;
  margin: 20px 0;
  font-size: 20px;
  border: 1px solid #666;
}
.mc table thead {
  font-weight: bold;
  background: #f1f3f7;
}
.mc table thead th,
.mc table tbody td {
  height: 32px;
  line-height: 32px;
  width: 48%;
  text-align: center;
  color: #666;
  font-size: 16px;
}
.productDetail_container {
  padding-bottom: 60px;
}
.productDetail_container .header {
  height: 44px;
  line-height: 44px;
  text-align: center;
  position: relative;
  background: #fcfcfc;
}
.productDetail_container .header .back {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  width: 6px;
  height: 12px;
}
.productDetail_container .header .back img {
  display: block;
  width: 100%;
  height: 100%;
}
.productDetail_container .header span {
  font-size: 16px;
}
.productDetail_container .main .productImg img {
  width: 100%;
}

.productDetail_container .main .btn {
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
  color: #fcfcfc;
  font-size: 21px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #f50909;
  z-index: 9999;
}
.productDetail_container .main .model-s {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.productDetail_container .main .model-s .box {
  width: 345px;
  height: 240px;
  background: #fcfcfc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-sizing: border-box;
}
.productDetail_container .main .model-s .box img {
  display: block;
  height: 130px;
  width: 130px;
  margin: 20px auto;
}
.productDetail_container .main .model-s .box p {
  color: #070721;
  font-size: 13px;
  text-align: center;
}
</style>
