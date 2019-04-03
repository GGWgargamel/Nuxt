<template>
<div class="pages-cgrey">
  <div class="banner consultcenter-banner">
    <p class="wow slideInLeft">资讯中心</p>
  </div>
  <div class="help-part">
    <div class="index-section">
      <div class="consult-tab">
        <div class="text">
          <span :class='{spanon:index == ind}' v-for='(i,index) in meaus' :key="index" @click='change($event,index)'>{{i.meau}}</span>
          <!-- <span>公司动态</span>
          <span>媒体报道</span> -->
        </div>
        <!-- <div class="search">
          <i class="icons icons-consuslt-search"></i>
          <input type="text" name="search" placeholder="关键词搜索居然管家动态">
        </div> -->
      </div>
      <div class="consult-conter" v-if='ind==0'><!-- consult-conter-on -->
        <div class="lists">
          <router-link to='/content/news'>
            <img src="~static/consult/1.jpg">
            <p>2019 / 01 / 06</p>
            <h4>居然之家2018年销售额750亿元，门店数量达303家</h4>
          </router-link>
        </div>
        <div class="lists lists-on">
          <router-link to='/content/newsone'>
            <img src="~static/consult/2.jpg">
            <p>2018 / 12 / 13</p>
            <h4>居然管家CEO周速华：云上服务 物联生活—居然管家的数字化转型探索</h4>
          </router-link>
        </div>
        <div class="lists">
          <router-link to='/content/newstwo'>
            <img src="~static/consult/3.jpg">
            <p>2018 / 07 / 30</p>
            <h4>居然之家强势加码 智能家居市场或迎新变局</h4>
          </router-link>
        </div>
      </div>
      <div class="consult-conter" v-if='ind==1'><!-- consult-conter-on -->
        <div class="lists lists-on">
          <router-link to='/content/newsone'>
            <img src="~static/consult/2.jpg">
            <p>2018 / 12 / 13</p>
            <h4>居然管家CEO周速华：云上服务 物联生活—居然管家的数字化转型探索</h4>
          </router-link>
        </div>
        <div class="lists">
          <router-link to='/content/newstwo'>
            <img src="~static/consult/3.jpg">
            <p>2018 / 07 / 30</p>
            <h4>居然之家强势加码 智能家居市场或迎新变局</h4>
          </router-link>
        </div>
        <div class="lists">
          <router-link to='/content/news'>
            <img src="~static/consult/1.jpg">
            <p>2019 / 01 / 06</p>
            <h4>居然之家2018年销售额750亿元，门店数量达303家</h4>
          </router-link>
        </div>
      </div>
    </div>
    <!-- <div class="index-section">
      <div class="paging paging-on">
        <ul>
          <li><span class="no">上一页</span></li>
          <li class="active"><a href="JavaScript:;">1</a></li>
          <li><span class="no">下一页</span></li>
        </ul>
      </div>
    </div> -->
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
    return {
      num: -1,
      ind: 0,
      meaus: [
        { meau: '公司动态' },
        { meau: '媒体报道' }
      ]
    };
  },
  methods: {
    change(e, index) {
      this.ind = index
      this.num = index
    }
  },
  mounted() {
    if (process.client) {
      new WOWfs.WOW().init()
    }
  }
}
</script>

<style scoped>
.help-part{background:#FFFFFF;width: 100%;padding: 70px 0 0 0;}
.consultcenter-banner{background: url(~static/banner-zxzx.jpg) top center no-repeat;background-size:cover;height: 400px;}
.consultcenter-banner p{font-family:"regular";font-size: 60px;color: #484848;font-weight:300;padding: 79px 40px 0 0;width: 1240px;text-align: right;margin:0 auto;}
.consult-tab{height: 40px;display: flex;justify-content: space-between;margin-bottom: 30px;}
.consult-tab .text{font-size: 20px;}
.consult-tab .text span{margin-right:48px;}
.consult-tab .text .spanon{color: #F18E2B;}
.consult-tab .search{border:1px solid #666666;width: 300px;height: 40px;line-height: 40px;border-radius: 4px;position: relative;padding-left: 40px;}
.consult-tab .search i{position: absolute;left:12px;top:12px;width: 16px;height: 16px;}
.consult-tab .search input{height: 100%;border:0;background-color: transparent;color: #999999;font-size: 16px;text-indent: 0;}
.consult-conter{clear: both;overflow: hidden;}
.consult-conter-on{border-bottom: 1px solid #eee;}
.consult-conter .lists{width: 380px;float: left;margin:60px 30px 60px 0;}
.consult-conter .lists:nth-child(3n){margin-right: 0;}
.consult-conter .lists:hover{box-shadow:0px 2px 4px 0px rgba(153,153,153,0.16);}
.consult-conter .lists img{display: block;width: 380px;height: 240px;}
.consult-conter .lists p{font-size: 18px;color: #666666;margin:20px 0;}
.consult-conter .lists h4{color: #333333;font-size: 20px;font-weight: 400;}
</style>
