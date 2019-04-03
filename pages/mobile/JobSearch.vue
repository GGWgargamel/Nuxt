<template>
  <div>
    <div class="jobSearch_container">
      <div class="header">
        <router-link class="back" to="/mobile/Contact">
          <img src="~static/mobile/back-arrow.png">
        </router-link>
        <span>招聘职位</span>
      </div>
      <div class="search">
        <div class="div-L">
          <input type="text" placeholder="请输入职位关键字">
          <img src="~static/mobile/jobSearch-icon2.png" alt>
        </div>
        <div class="div-R">
          <select name id @change="updateSheng">
            <option
              :value="sheng.code"
              v-for="(sheng,shengKey) in json"
              :key="shengKey"
            >{{ sheng.name }}</option>
          </select>
          <!-- <select name="" id=""  @change='updateShi' >
           <option :value="shi.code" v-for='(shi,shikey) in shiData' :key='shikey'>{{ shi.name }}</option>
        </select>
        <select name="" id="">
          <option :value="xian.code" v-for='(xian,xianKey) in xianData' :key='xianKey'>{{ xian.name }}</option>
          </select>-->

          <!-- <div class="box1" @click='num == 0 ? bot() : top()'>
             <p>工作地点</p>
             <span>
            <img :src="srcpic"/>
             </span>
          </div>-->
          <!-- <div class="box2">
            <p>工作地点</p>
            <span>
             <img src="~static/mobile/jobSearch-icon4.png"/>
            </span>
          </div>-->
        </div>
      </div>
      <div class="list">
        <ul>
          <li>
            <router-link to="/mobile/PostDetails">
              <b>高级Java工程师）</b>
              <p>运维中心 | 全职 | 上海</p>
              <span>发布时间：2018-12-10</span>
              <img src="~static/mobile/jobSearch-icon1.png" alt>
            </router-link>
          </li>
          <li>
            <router-link to="/mobile/PostDetails">
              <b>城市经理</b>
              <p>运维中心 | 全职 | 上海</p>
              <span>发布时间：2018-12-10</span>
              <img src="~static/mobile/jobSearch-icon1.png" alt>
            </router-link>
          </li>
          <li>
            <router-link to="/mobile/PostDetails">
              <b>净水工程师</b>
              <p>无忧服务事业部 | 全职 | 北京</p>
              <span>发布时间：2018-12-10</span>
              <img src="~static/mobile/jobSearch-icon1.png" alt>
            </router-link>
          </li>
          <li>
            <router-link to="/mobile/PostDetails">
              <b>新风技术支持</b>
              <p>无忧服务事业部 | 全职 | 北京</p>
              <span>发布时间：2018-12-10</span>
              <img src="~static/mobile/jobSearch-icon1.png" alt>
            </router-link>
          </li>
          <li>
            <router-link to="/mobile/PostDetails">
              <b>后端产品经理</b>
              <p>产品研发中心 | 全职 | 北京</p>
              <span>发布时间：2018-12-10</span>
              <img src="~static/mobile/jobSearch-icon1.png" alt>
            </router-link>
          </li>
          <li>
            <router-link to="/mobile/PostDetails">
              <b>测试工程师</b>
              <p>产品研发中心 | 全职 | 北京</p>
              <span>发布时间：2018-12-10</span>
              <img src="~static/mobile/jobSearch-icon1.png" alt>
            </router-link>
          </li>
          <li>
            <router-link to="/mobile/PostDetails">
              <b>高级JAVA工程师</b>
              <p></p>
              <span>发布时间：2018-12-10</span>
              <img src="~static/mobile/jobSearch-icon1.png" alt>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../static/json.js'
export default {
  layout: 'mobile',
  data() {
    return {
      json: data,
      shiCode: '110000',
      xianCode: '110000',
      meaus: [
        { meau: '安装维修类' },
        { meau: '到家服务类' },
        { meau: '住家服务类' }
      ],
      num: 0,
      srcpic: '../static/images/jobSearch-icon3.png'
    }
  },
  computed: {
    shiData() {
      var result
      this.json.forEach(val => {
        if (val.code === this.shiCode) {
          result = val.cityList
        }
      })
      return result
    },
    xianData() {
      var result
      this.shiData.forEach(val => {
        if (val.code === this.xianCode) {
          result = val.areaList
        }
      })
      return result
    }
  },
  methods: {
    bot() {
      this.srcpic = './static/images/jobSearch-icon4.png'
      this.num = 1
    },
    top() {
      this.srcpic = './static/images/jobSearch-icon3.png'
      this.num = 0
    },
    changemeau(e) {
      e.currentTarget.className = 'active'
    },
    updateSheng(e) {
      this.shiCode = e.target.value
      this.xianCode = this.shiData[0].code
    },
    updateShi(e) {
      this.xianCode = e.target.value
    }
  },
  created() {
    setTimeout(() => {
      console.log(this)
    }, 500)
  }
}
</script>

<style scoped>
.jobSearch_container {
  padding-bottom: 30px;
}
.jobSearch_container .header {
  height: 44px;
  line-height: 44px;
  text-align: center;
  position: relative;
  background: #fcfcfc;
}
.jobSearch_container .header .back {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  width: 6px;
  height: 12px;
}
.jobSearch_container .header .back img {
  display: block;
  width: 100%;
  height: 100%;
}
.jobSearch_container .header span {
  font-size: 16px;
}
.jobSearch_container .search {
  height: 35px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.jobSearch_container .search .div-L {
  height: 100%;
  width: 65%;
  position: relative;
  display: flex;
  align-items: center;
}
.jobSearch_container .search .div-L input {
  height: 35px;
  width: 100%;
  border: none;
  color: #999999;
  padding-left: 30px;
  box-sizing: border-box;
}
.jobSearch_container .search .div-L img {
  width: 12px;
  height: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
}
.jobSearch_container .search .div-R {
  height: 100%;
  width: 25%;
  background-color: #fcfcfc;
  border-radius: 2px;
}
.jobSearch_container .search .div-R select {
  height: 100%;
  width: 100%;
  background-color: #fcfcfc;
  border-radius: 2px;
}
/* .jobSearch_container .search .div-R>div{
  height: 100%;
  width: 100%;

}
.jobSearch_container .search .div-R img{
  width: 12px;
  height: 12px;
  vertical-align: middle;
} */
/* .jobSearch_container .search .div-R p{
  display: inline-block;
  color: #666666;
  font-size: 13px;
  margin: 10px 5px 10px 10px;
} */
/* .jobSearch_container .search .div-R .box2{
  display: none;
}
.jobSearch_container .search .model{
  width: 100%;
  height: 300px;
  /*border: 1px solid pink;*/
/*   background: #FFFFFF;
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 2;
  overflow: auto;
  padding-bottom: 20px;
  display: none;
}
.jobSearch_container .search .model li{
  height: 45px;
  line-height: 45px;
  text-align: center;
  color: #666666;
  font-size: 13px;
  border-bottom: 1px solid #fafafa;
} */
.jobSearch_container .list {
}
.jobSearch_container .list li {
  height: 80px;
  background: #ffffff;
  margin-bottom: 10px;
  position: relative;
}
.jobSearch_container .list li a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
}
.jobSearch_container .list li a img {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
}
.jobSearch_container .list li a b {
  color: #333333;
  font-size: 13px;
}
.jobSearch_container .list li a p {
  font-size: 11px;
  color: #666666;
  margin: 8px 0px 3px;
}
.jobSearch_container .list li a span {
  color: #999999;
  font-size: 10px;
}
</style>
