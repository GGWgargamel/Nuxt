<template>
<div>
  <div class="banner bizreg-banner">
    <p class="title wow slideInLeft">居然管家 品质好管家</p>
    <p class="content wow bounceInUp" data-wow-delay="0.5s">居然管家通过直营化服务员工、职业化技能培训、标准化服务流程以及周全的保障服务，
  为每位用户打造健康舒适的居家生活。</p>
  </div>
  <div class="index-section about-part bizerg-part">
    <div class="service">
      <div class="title">技师类型</div>
      <div class="pattern"></div>
    </div>
    <div class="cateson">
      <div class="meau" @mouseover="meau(index,$event)" @mouseleave="meauleave(index,$event)" v-for="(i,index) in meaus" :key="index">
        {{i.meau}}
        <div class="pattern pattern-on"></div>
      </div>
      <div id="border-bot"></div>
    </div>
      <!-- 智能家居租赁 -->
      <div class="type type-on clear" v-if='ind==0'>
        <div class="typelist fl">
          <div class="img">
            <img src="~static/anzhuang.png">
          </div>
          <div class="butn">安装工程师</div>
        </div>
        <div class="typelist fl">
          <div class="img">
            <img src="~static/ntgcs.png">
          </div>
          <div class="butn">暖通工程师</div>
        </div>
      </div>
      <!-- 净水服务 -->
      <div class="type clear" v-if='ind==1'>
        <div class="typelist fl">
          <div class="img">
            <img src="~static/jtbys.png">
          </div>
          <div class="butn">家庭保洁师</div>
        </div>
        <div class="typelist fl">
          <div class="img">
            <img src="~static/jjbys.png">
          </div>
          <div class="butn">家居保养师</div>
        </div>
        <div class="typelist fl">
          <div class="img">
            <img src="~static/jtsns.png">
          </div>
          <div class="butn">家庭收纳师</div>
        </div>
      </div>
      <!-- 到家服务 -->
      <div class="type clear" v-if='ind==2'>
        <div class="typelist fl">
          <div class="img">
            <img src="~static/baomu.png">
          </div>
          <div class="butn">保姆（家务做饭）</div>
        </div>
        <div class="typelist fl">
          <div class="img">
            <img src="~static/yuesao.png">
          </div>
          <div class="butn">月嫂（母婴护理）</div>
        </div>
        <div class="typelist fl">
          <div class="img">
            <img src="~static/yuershi.png">
          </div>
          <div class="butn">育儿师</div>
        </div>
      </div>
  </div>
  <div class="pages-cwhite">
    <div class="index-section about-part">
      <div class="service">
        <div class="title">在线报名</div>
        <div class="pattern pattern-on"></div>
      </div>
        <form action="" method="post" id="bizregForm" class="bizreg-formed" name="bizregForm">
          <input type="hidden" name="title" value="居然技师招募">
          <div class="input">
            <div class="lable">您的姓名（name）:</div>
            <input type="text" id="name" name="name" placeholder="请填写您的真实姓名" v-model="name">
          </div>
          <div class="input">
            <div class="lable">所在城市（city）:</div>
            <select name="" class="servecity" @change='updateSheng' v-model="city">
              <option :value="sheng.code" v-for='(sheng,shengKey) in json' :key='shengKey'>{{ sheng.name }}</option>
            </select>
          </div>
          <div class="input">
            <div class="lable" id="gender">性别（gender）:</div>
            <label><input name="gender" type="radio" value="男" checked v-model="gender"/>  男</label>
            <label><input name="gender" type="radio" value="女" v-model="gender"/>  女</label>
          </div>
          <div class="input">
            <div class="lable">服务城市（city）:</div>
            <select name="" class="servecity" @change='updateSheng' v-model="serviceCity">
              <option :value="sheng.code" v-for='(sheng,shengKey) in json' :key='shengKey'>{{ sheng.name }}</option>
            </select>
          </div>
          <div class="input">
            <div class="lable">出生日期（birth）:</div>
            <input type="date" id="birth" name="birth" placeholder="请填写您的出生日期" v-model="birthday">
          </div>
          <div class="input">
            <div class="lable">联系方式（tel）:</div>
            <input type="text" id="mobile" name="mobile" placeholder="请填写本人的联系电话" v-model="mobile">
          </div>
          <div class="input input-big">
            <div class="lable" id="project">服务项目（project）:</div>
            <template v-for="(i,index) in projects">
              <label :key="index"><input id="project" name="project" type="radio" :value="i.name" v-model="serviceCategory"/>  {{i.name}}</label>
            </template>
          </div>
          <div class="error cred"><b id="hintbox" ref='hintbox'></b></div>
        </form>
      <div class="bizreg-button" id="bizregButn" @click="bizreginfo($event)">提交报名</div>
    </div>
  </div>
  <div class="shearPlate" style="display: none;">
    <div class="shearPlate-text">&nbsp;&nbsp;</div>
  </div>
</div>
</template>

<script>
import data from '../../static//mobile/json.js'
import Axios from 'axios'
var WOWfs
if (process.client) {
  WOWfs = require('wowjs')
}
export default {
  data () {
    return {
      ind: 0,
      name: null,
      city: null,
      gender: null,
      serviceCity: null,
      birthday: null,
      mobile: null,
      serviceCategory: null,
      meaus: [
        { meau: '安装维修类' },
        { meau: '到家服务类' },
        { meau: '住家服务类' }
      ],
      projects: [
        { name: '保洁服务' },
        { name: '家电清洗' },
        { name: '家居保养' },
        { name: '空气治理' },
        { name: '安装维修' },
        { name: '家居租赁' },
        { name: '换芯保养' },
        { name: '地暖清洗' },
        { name: '专题活动' },
      ],
      json: data,
      shiCode: '110000',
      xianCode: '110000',
    }
  },
  mounted() {
    if (process.client) {
      document.querySelector('.meau').className = 'meau meauon'
      new WOWfs.WOW().init()
    }
  },
  computed: {
    shiData () {
      var result
      this.json.forEach(val => {
        if (val.code === this.shiCode) {
          result = val.cityList
        }
      })
      return result
    },
    xianData () {
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
    bizreginfo(e) {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.name === '') {
        this.$refs.hintbox.innerText = '您的姓名不能为空！'
      } else if (this.city === '') {
        this.$refs.hintbox.innerText = '您的所在城市不能为空'
      } else if (this.serviceCity === '') {
        this.$refs.hintbox.innerText = '您的服务城市不能为空！'
      } else if (this.birthday === '') {
        this.$refs.hintbox.innerText = '您的出生日期不能为空！'
      } else if (this.mobile === '') {
        this.$refs.hintbox.innerText = '您的手机号码不能为空！'
      } else if (!reg.test(this.mobile)) {
        this.$refs.hintbox.innerText = '您的手机格式不正确！'
      } else if (this.serviceCategory === '') {
        this.$refs.hintbox.innerText = '您的服务项目不能为空！'
      } else if (this.name !== '' && this.city !== '' && this.serviceCity !== '' && this.birthday !== '' && this.mobile !== '' && this.serviceCategory !== '') {
        e.target.style.backgroundColor = '#F18E2B';
        this.$refs.hintbox.innerText = ''
        Axios({
          method: 'post',
          url: '/api/web/area/insertUserTechnicianRecruit',
          data: {
            name: this.name,
            city: this.city,
            gender: this.gender,
            serviceCity: this.serviceCity,
            birthday: this.birthday,
            mobile: this.mobile,
            serviceCategory: this.serviceCategory
          }
        }).then(res => {
          if (res.status === 200) {
            console.log(res.data.data)
            this.tableData = res.data.data
            setTimeout(function() {
              document.querySelector('.meau').className = 'meau meauon'
            }, 20)
            alert('恭喜你，报名成功！')
          }
        })
      }
    },
    meau(index, e) {
      this._data.ind = index
      for (let i = 0; i < e.currentTarget.parentElement.children.length;i++) {
        e.currentTarget.parentElement.children[i].className = 'meau'
      }
      e.currentTarget.className = 'meau meauon'
    },
    meauleave(index, e) {
      // e.currentTarget.className = 'meau'
      for (let i = 0; i < e.currentTarget.parentElement.children.length;i++) {
        e.currentTarget.parentElement.children[i].className = 'meau'
      }
      e.currentTarget.className = 'meau meauon'
    },
    updateSheng (e) {
      this.shiCode = e.target.value
      this.xianCode = this.shiData[0].code
    },
    updateShi (e) {
      this.xianCode = e.target.value
    }
  },
  created () {
    setTimeout(() => {
    }, 500)
  },

}
</script>

<style scoped>
.servecity{display: inline-block;width: 30%;}
.about-part .service .title{width: 100%;font-size: 32px;font-weight:500;margin-top: 30px;}
.about-part .service{padding: 100px 0 0;text-align: center;}
.about-part .service .pattern{width:116px;display: inline-block;margin-top: 30px;height: 6px;background:#F18E2B;}
.about-part .service .pattern-on{width: 80px;}
.bizreg-banner{background: url(~static/banner-4.png) top center no-repeat;background-size:cover;height: 876px;}
.bizreg-banner .title{font-family:"regular";font-size: 58px;color: #16181C;font-weight:bold;padding: 155px 0 0 363px;}
.bizreg-banner .content{margin-top: 39px;margin-left: 363px;width:800px;line-height: 40px;font-size: 18px;color: #2F3439;}
.bizerg-part .cateson{display: flex;justify-content: center;font-size: 18px;margin: 60px 0 40px;padding: 0 319px;position: relative;color: #666;}
.bizerg-part .cateson .meau{margin:0 30px;}
.bizerg-part .cateson .meau .pattern{width: 60px;height: 4px;background: transparent;margin:0 auto;margin-top: 12px;}
.bizerg-part .cateson .meauon .pattern{width: 60px;height: 4px;background: #F18E2B;}
.bizerg-part .cateson #border-bot{width: 100%;height: 1px;background: #EEEEEE;position: absolute;top: 40px;left:0;}
.bizerg-part .type{margin-bottom: 60px;}
.bizerg-part .type-on{margin: 0 155px 60px;}
.bizerg-part .type .typelist{width:380px;height:478px;background:#BAD5F5;border-radius:6px;position: relative;transition: all 0.5s;-webkit-transition:all 0.5s;}
.bizerg-part .type .typelist:nth-child(2){margin: 0 30px;}
.bizerg-part .type-on .typelist{margin: 0 15px;}
.bizerg-part .type .typelist .img{width: 380px;height: 388px;overflow: hidden;}
.bizerg-part .type .typelist .img img{max-width: 100%;height: 100%;}
.bizerg-part .type .typelist:hover .img img{transform: scale(1.1);}
.bizerg-part .type .butn{width:100%;height:90px;line-height: 90px;background:rgba(86,160,250,1);border-radius:0 0 6px 6px;position: absolute;bottom: 0;left: 0;text-align: center;font-size: 26px;color: #FCFCFC;}
.bizreg-formed{color: #666666;margin: 60px 0 10px;display: flex;justify-content: space-between;flex-wrap: wrap;}
.bizreg-formed .input{width: 480px;padding: 15px 0;border:1px solid #CCCCCC;border-radius:4px;margin-bottom: 20px;position: relative;padding-left: 200px;color: #666666;}
.bizreg-formed .input-big{width: 100%;}
.bizreg-formed .input .lable{color: #666666;font-size: 18px;width: 180px;text-align: right;position: absolute;left: 0;}
.bizreg-formed .input select option{font-size: 18px;color:#666666;}
.bizreg-formed .input select{font-size: 18px;border:0;color: #cccccc;}
.bizreg-formed .input input{font-size: 18px;}
.bizreg-formed .input input[type="text"],.bizreg-formed .input input[type="date"]{border:0;}
.bizreg-formed .input label{margin:0 40px;font-size: 18px;}
.bizreg-formed .input-big label{margin:0 5px;height: 30px;line-height: 30px;}
/* input::-webkit-inner-spin-button {display: none;} */
.bizreg-formed .error{text-align: center;height: 30px;line-height: 30px;font-size: 18px;width: 100%;}
.bizreg-formed .city{position: relative;}
.bizreg-formed .city .dropdown{height:300px;position: absolute;top: 60px;left: 0;width: 100%;border:1px solid #ccc;background: #FCFCFC;z-index: 999;overflow-y:scroll;}
.bizreg-formed .city .dropdown dd{height: 50px;line-height: 50px;text-indent: 19px;font-size: 20px;color: #666666;}
.bizreg-formed .city .dropdown .dd-on{background: #74A0F1;color: #FCFCFC;}
.bizreg-button{width:500px;height:80px;background:rgba(241, 142, 43, 0.5);border-radius:10px;line-height: 80px;color: #FBFBFB;font-size: 24px;margin:0 0 100px 350px;text-align: center;}
</style>
