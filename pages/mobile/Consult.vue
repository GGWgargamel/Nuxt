<template>
  <div>
    <div class="aboutUs_container consult_container">
      <div class="main">
        <div class="banner">
          <img src="~static/mobile/consult.png">
        </div>
        <div class="consult-meau">
          <div
            class="meau"
            :class="{ meauon:ind == key}"
            v-for="(val,key) in meauList"
            :key="key"
            @click="djmeau(key)"
          >
            <span>{{val.meau}}</span>
          </div>
        </div>
        <!-- <div class="consult-search">
          <i class="icons icons-consuslt-search"></i>
          <input type="text" name="search" placeholder="关键词搜索居然管家动态">
        </div>-->
        <div class="content-block">
          <div v-if="ind==0">
            <div class="news">
              <router-link to="/mobile/News">
                <img src="~static/mobile/consult/1.jpg">
                <h3>居然之家2018年销售额750亿元，门店数量达303家</h3>
                <p>2019 / 01 / 06</p>
              </router-link>
            </div>
            <div class="news">
              <router-link to="/mobile/newsone">
                <img src="~static/mobile/consult/2.jpg">
                <h3>居然管家CEO周速华：云上服务 物联生活—居然管家的数字化转型探索</h3>
                <p>2018 / 12 / 13</p>
              </router-link>
            </div>
            <div class="news news-on">
              <router-link to="/mobile/newstwo">
                <img src="~static/mobile/consult/3.jpg">
                <h3>居然之家强势加码 智能家居市场或迎新变局</h3>
                <p>2018 / 07 / 30</p>
              </router-link>
            </div>
          </div>
          <div v-if="ind==1">
            <div class="news">
              <router-link to="/mobile/newsone">
                <img src="~static/mobile/consult/2.jpg">
                <h3>居然管家CEO周速华：云上服务 物联生活—居然管家的数字化转型探索</h3>
                <p>2018 / 12 / 13</p>
              </router-link>
            </div>
            <div class="news news-on">
              <router-link to="/mobile/newstwo">
                <img src="~static/mobile/consult/3.jpg">
                <h3>居然之家强势加码 智能家居市场或迎新变局</h3>
                <p>2018 / 07 / 30</p>
              </router-link>
            </div>
            <div class="news">
              <router-link to="/mobile/News">
                <img src="~static/mobile/consult/1.jpg">
                <h3>居然之家2018年销售额750亿元，门店数量达303家</h3>
                <p>2019 / 01 / 06</p>
              </router-link>
            </div>
          </div>
        </div>
        <!-- <div class="paging paging-on">
        <ul>
          <li><span class="no"> < </span></li>
          <li class="active"><a href="JavaScript:;">1</a></li>
          <li><span class="no"> > </span></li>
        </ul>
        </div>-->
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
      meauList: [{ meau: '公司动态' }, { meau: '媒体报道' }]
    }
  },
  methods: {
    djmeau(key) {
      console.log(key)
      this.ind = key
    }
  }
}
</script>

<style scoped>
.aboutUs_container .main .banner img {
  width: 100%;
}
.consult_container .main {
  margin-bottom: 0;
}
.consult_container .main .banner {
  margin-bottom: 0;
}
.consult-meau {
  width: 100%;
  background: #fff;
  text-align: center;
}
.consult-meau .meau {
  font-size: 14px;
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.consult-meau .meauon {
  color: #f18e2b;
  border-bottom: 3px solid #f18e2b;
}
.consult-meau .meau span {
  border-right: 1px solid #999999;
  padding: 0 35px;
}
.consult-meau .meau:last-child span {
  border-right: 0;
}
/*.consult-search{height: 30px;padding:0 5%;width: 90%;position: relative;margin:10px 0 15px;padding-left: 10%;}
.consult-search i{width: 16px;height: 16px;position: absolute;left:10%;}
.consult-search input{width: 90%;height: 30px;}*/
.news {
  margin: 30px 5% 0;
  border-bottom: 1px solid #e6e6e6;
}
.news-on {
  border-bottom: 0px;
}
.news img {
  width: 100%;
}
.news p {
  color: #666666;
  font-size: 11px;
  padding-bottom: 20px;
}
.news h3 {
  color: #333333;
  font-size: 13px;
  font-weight: 400;
  padding: 10px 0;
}
/*分页器*/
.paging {
  margin: 50px 0;
  display: flex;
  justify-content: center;
}
.paging ul {
  display: flex;
  justify-content: center;
}
.paging li {
  text-align: center;
  line-height: 10px;
  height: 10px;
  width: 20px;
  color: #999999;
  font-size: 13px;
  float: left;
  background: #f7f7f7;
  margin: 0 5px;
}
.paging li.active {
  cursor: default;
}
.paging li a {
  display: block;
  color: #333333;
}
.paging li.active a {
  cursor: default;
  color: #f18e2b;
}
.paging-on {
  margin: 30px 0 15px;
}
</style>
