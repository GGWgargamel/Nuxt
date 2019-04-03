<template>
  <div>
    <div class="serverPage_container">
      <div class="main">
        <div class="banner">
          <img src="~static/mobile/serverPage-banner.png">
        </div>
        <div class="tabList">
          <div v-for="(val0, key0) in tableData" :key="key0" :class=" ind===key0 ? 'aa act':'aa'">
            <span @click="onmouse(key0)">{{ val0.name }}</span>
          </div>
        </div>
        <div class="listMsg" v-for="(val, key) in tableData" :key="key">
          <div class="active" v-for="(val1, key1) in val.third" :key="key1">
            <div class="info" v-if="ind == key">
              <h3>{{val1.name}}</h3>
              <ul>
                <li
                  v-for="(val2,key2) in val1.spuList"
                  :key="key2"
                  @click="openDetail(val2.images,val2.name,val2.productInfo,val2.price,val2.unit)"
                >
                  <img :src="val2.images | imgHandler" alt>
                  <p class="middle">{{val2.name}}</p>
                </li>
              </ul>
            </div>
            <div class="tip" v-if="key === 3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  layout: 'mobile',
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
      defaultPicture: require('../../static/default_head.jpg'),
      ind: 0,
      meauon: false,
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
  mounted() {
    document.querySelector('.aa').className = 'aa act'
    document.querySelector('.tabList span').className = 'span-on'
  },
  methods: {
    onmouse(key) {
      this.ind = key
    },
    openDetail(images, name, productInfo, price, unit) {
      this.$router.push({
        path: '/mobile/ProductDetail',
        query: {
          images: images,
          name: name,
          productInfo: productInfo,
          price: price,
          unit: unit
        }
      })
    }
  }
}
</script>

<style scoped>
.serverPage_container .main .banner img {
  width: 100%;
}
.serverPage_container .main .tabList {
  display: flex;
  padding: 13px 0px;
  background: #ffffff;
}
.serverPage_container .main .tabList .act {
  color: #f18e2b;
}
.serverPage_container .main .tabList > div {
  width: 33.33%;
  text-align: center;
  box-sizing: border-box;
  font-size: 14px;
}
.serverPage_container .main .tabList div:nth-of-type(2) {
  border-left: 1px solid #999999;
  border-right: 1px solid #999999;
}
.serverPage_container .main .tabList > div .spancss {
  position: relative;
}
.serverPage_container .main .tabList .act .span-on {
  padding-bottom: 13px;
  border-bottom: 1px solid #f18e2b;
}
.serverPage_container .main .listMsg .info {
  padding: 10px;
  box-sizing: border-box;
  background-color: #fcfcfc;
  margin-top: 10px;
}
.serverPage_container .main .listMsg .info h3 {
  position: relative;
  margin-left: 7px;
}
.serverPage_container .main .listMsg .info h3::after {
  position: absolute;
  display: block;
  content: '';
  width: 2px;
  height: 16px;
  background-color: #f18e2b;
  top: 0;
  left: -7px;
}
.serverPage_container .main .listMsg .info ul {
  display: flex;
}
.serverPage_container .main .listMsg .info li {
  float: left;
  width: 25%;
  box-sizing: border-box;
  padding: 20px 0px;
  text-align: center;
}
.serverPage_container .main .listMsg .info li img {
  display: block;
  width: 42px;
  height: 42px;
  margin: 0 auto;
}
.serverPage_container .main .listMsg .info li p {
  color: #666666;
  padding-top: 10px;
  text-align: center;
}
.info ul {
  display: flex;
  flex-wrap: wrap;
}
.serverPage_container .main .listMsg .tip {
  padding: 25px 10px;
}
.serverPage_container .main .listMsg .tip img {
  width: 100%;
  padding: 25px 0px;
}
.serverPage_container .main .listMsg > div {
  display: none;
}
.serverPage_container .main .listMsg .active {
  display: block;
}
</style>
