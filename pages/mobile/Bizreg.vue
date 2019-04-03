<template>
  <div>
    <div class="jisPage_container">
      <div class="main">
        <div class="banner">
          <img src="~static/mobile/jisPage-banner.png" />
        </div>
        <div class="info">
          <div class="info1">
            <div class="title">技师类型</div>
            <div class="tab-list">
              <span
                v-for="(i, index) in meaus"
                :class="{ active: index === ind }"
                :key="index"
                @click="changemeau($event, index)"
              >
                {{ i.meau }}
              </span>
            </div>
            <div class="tab-content">
              <div class="isShow" v-if="ind === 0">
                <ul>
                  <li>
                    <img src="~static/mobile/jisPage-a1.png" />
                    <p>安装工程师</p>
                  </li>
                  <li>
                    <img src="~static/mobile/jisPage-a2.png" />
                    <p>暖通工程师</p>
                  </li>
                </ul>
              </div>
              <div class="isShow" v-if="ind === 1">
                <ul>
                  <li>
                    <img src="~static/mobile/jisPage-b1.png" />
                    <p>家庭保洁师</p>
                  </li>
                  <li>
                    <img src="~static/mobile/jisPage-b2.png" />
                    <p>家居保养师</p>
                  </li>
                  <li>
                    <img src="~static/mobile/jisPage-b3.png" />
                    <p>家庭收纳师</p>
                  </li>
                </ul>
              </div>
              <div class="isShow" v-if="ind==2">
                <ul>
                  <li>
                    <img src="~static/mobile/jisPage-c1.png" />
                    <p>保姆（家务做饭）</p>
                  </li>
                  <li>
                    <img src="~static/mobile/jisPage-c2.png" />
                    <p>月嫂（母婴护理）</p>
                  </li>
                  <li>
                    <img src="~static/mobile/jisPage-c3.png" />
                    <p>育儿师</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="info2">
            <div class="title">在线报名</div>
            <form action name="btnform" id="btnform">
              <ul>
                <li>
                  <p>您的姓名（name）:</p>
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="请填写您的真实姓名"
                      v-model="name"
                    />
                  </div>
                </li>
                <li>
                  <p>性别（gender）:</p>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      id="men"
                      value="男"
                      v-model="gender"
                    />
                    <label for="men">男</label>
                    <input
                      type="radio"
                      name="gender"
                      id="women"
                      value="女"
                      v-model="gender"
                    />
                    <label for="women">女</label>
                  </div>
                </li>
                <li>
                  <p>出生日期（birth）:</p>
                  <div>
                    <input
                      type="date"
                      id="birth"
                      name="birth"
                      placeholder="请填写您的出生日期"
                      v-model="birthday"
                    />
                  </div>
                </li>
                <li>
                  <p>所在城市（city）:</p>
                  <div>
                    <select @change="updateSheng" v-model="city" ref="mybox">
                      <option value="请选择城市">请选择所在城市</option>
                      <option
                        :value="sheng.code"
                        v-for="(sheng, shengKey) in json"
                        :key="shengKey"
                      >
                        {{ sheng.name }}
                      </option>
                    </select>
                  </div>
                </li>
                <li>
                  <p>服务城市（city）:</p>
                  <div>
                    <select
                      @change="updateSheng"
                      v-model="serviceCity"
                      ref="mybox"
                    >
                      <option value="请选择城市">请选择服务城市</option>
                      <option
                        :value="sheng.code"
                        v-for="(sheng, shengKey) in json"
                        :key="shengKey"
                      >
                        {{ sheng.name }}
                      </option>
                    </select>
                  </div>
                </li>
                <li>
                  <p>联系方式（mobile）:</p>
                  <div>
                    <input
                      type="number"
                      id="mobile"
                      name="mobile"
                      placeholder="请填写本人的联系电话"
                      v-model="mobile"
                    >
                  </div>
                </li>
                <li class="tip tip1">
                  <p>服务项目（project）:</p>
                  <div>
                    <input
                      type="radio"
                      name="project"
                      id="baoJ"
                      checked="checked"
                      value="保洁服务"
                      v-model="serviceCategory"
                    >
                    <label for="baoJ">保洁服务</label>
                    <input
                      type="radio"
                      name="project"
                      id="jiaD"
                      value="家电清洗"
                      v-model="serviceCategory"
                    >
                    <label for="jiaD">家电清洗</label>
                  </div>
                </li>
                <li class="tip tip2">
                  <p></p>
                  <div>
                    <input
                      type="radio"
                      name="project"
                      id="jiaJ"
                      value="家居保养"
                      v-model="serviceCategory"
                    />
                    <label for="jiaJ">家居保养</label>
                    <input
                      type="radio"
                      name="project"
                      id="kongQ"
                      value="空气治理"
                      v-model="serviceCategory"
                    />
                    <label for="konQ">空气治理</label>
                  </div>
                </li>
              </ul>
              <input
                type="button"
                id="btned"
                value="提交报名"
                @click="checkservice($event)"
              />
              <input type="hidden" name="title" value="居然技师招募" />
              <div class="cred">
                <b id="hintbox" ref="hintbox"></b>
              </div>
            </form>
          </div>
        </div>
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
      ind: 0,
      name: '',
      gender: '男',
      birthday: '',
      city: '',
      serviceCity: '',
      mobile: '',
      serviceCategory: '保洁服务'
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
    changemeau(e, index) {
      this.ind = index
      this.number = index
    },
    checkservice(e) {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
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
      } else if (
        this.name !== ''
        && this.city !== ''
        && this.serviceCity !== ''
        && this.birthday !== ''
        && this.mobile !== ''
        && this.serviceCategory !== ''
      ) {
        e.target.style.backgroundColor = '#F18E2B'
        this.$refs.hintbox.innerText = ''
        this.$axios({
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
            alert('报名成功！')
          }
        })
      }
    },
    updateSheng(e) {
      this.shiCode = e.target.value
      this.xianCode = this.shiData[0].code
      if (this.shiCode !== '') {
        this.$refs.mybox.style.color = '#666'
      } else {
        this.$refs.mybox.style.color = '#ccc'
      }
    },
    updateShi(e) {
      this.xianCode = e.target.value
    }
  },
  created() {
    setTimeout(() => {}, 500)
  }
}
</script>

<style scoped>
.jisPage_container .main .banner {
  margin-bottom: 10px;
}
.jisPage_container .main .banner img {
  width: 100%;
}
.jisPage_container .main .info .title {
  font-family: SourceHanSansCN-Medium;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  margin: 25px 0px 43px;
  position: relative;
}
.jisPage_container .main .info .title::after {
  display: block;
  content: '';
  width: 40px;
  height: 3px;
  background-color: #f18e2b;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}
.jisPage_container .main .info1 {
  background: #fcfcfc;
  overflow: hidden;
}
.jisPage_container .main .info1 .tab-list .active {
  color: #f18e2b;
  border: 1px solid #f18e2b;
}
.jisPage_container .main .info1 .tab-list {
  display: flex;
  justify-content: space-around;
}
.jisPage_container .main .info1 .tab-list span {
  display: inline-block;
  width: 80px;
  height: 30px;
  border-radius: 3px;
  border: solid 1px #666666;
  line-height: 30px;
  text-align: center;
}
.jisPage_container .main .info1 .tab-content > div {
  padding: 30px 10px 0px 10px;
  display: none;
}
.jisPage_container .main .info1 .tab-content ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.jisPage_container .main .info1 .tab-content li {
  margin-bottom: 20px;
}
.jisPage_container .main .info1 .tab-content li img {
  width: 115px;
  height: 135px;
  display: block;
}
.jisPage_container .main .info1 .tab-content li p {
  width: 115px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #56a0fa;
  border-radius: 0px 0px 3px 3px;
  color: #fcfcfc;
  font-size: 15px;
}
.jisPage_container .main .info1 .tab-content .isShow {
  display: block;
}

.jisPage_container .main .info2 {
  background: #fcfcfc;
  padding: 10px;
  margin-bottom: 10px;
}
.jisPage_container .main .info2 li {
  width: 100%;
  height: 40px;
  border-radius: 2px;
  border: solid 1px #cccccc;
  margin-bottom: 10px;
  color: #666666;
  position: relative;
}
.jisPage_container .main .info2 li p {
  height: 40px;
  width: 130px;
  padding-left: 5px;
  line-height: 40px;
  display: inline-block;
  box-sizing: border-box;
  margin-right: 5px;
  position: absolute;
  top: 0;
  left: 0;
}
.jisPage_container .main .info2 li > div {
  height: 100%;
  margin-left: 130px;
  display: flex;
  align-items: center;
}
.jisPage_container .main .info2 li input {
  border: 0;
  padding-left: 10px;
  background: transparent;
}
.jisPage_container .main .info2 li input[type='text'] {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  /*border: 0;*/
  /*background: transparent;*/
}
.jisPage_container .main .info2 li input[type='radio'] {
  border: 1px solid #ccc;
  margin-right: 5px;
}
.jisPage_container .main .info2 li input[type='date'] {
  width: 100%;
  height: 100%;
}
.jisPage_container .main .info2 li input[type='number'] {
  width: 100%;
  height: 100%;
}
.jisPage_container .main .info2 li label {
  display: inline-block;
  margin-right: 10px;
}
.jisPage_container .main .info2 ul .tip {
  margin-bottom: 0px;
}
.jisPage_container .main .info2 ul .tip p {
  width: 130px;
}
.jisPage_container .main .info2 ul .tip1 {
  border-bottom: 0;
}
.jisPage_container .main .info2 ul .tip2 {
  border-top: 0;
}
.jisPage_container .main .info2 li select {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  color: #333;
  border: 0;
  background: transparent;
}
.jisPage_container .main .info2 li select option {
  color: #333;
}
.jisPage_container .main .info2 input[type='button'] {
  display: block;
  color: #fbfbfb;
  font-size: 15px;
  width: 245px;
  height: 40px;
  background-color: rgba(241, 142, 43, 0.5);
  border-radius: 5px;
  border: 0;
  margin: 20px auto;
}
.cred {
  width: 100%;
  margin-bottom: 10px;
}
#hintbox {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: red;
  display: block;
}
.jisPage_container .main .info2 li input[type='radio'] {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  margin: 0;
  cursor: pointer;
  vertical-align: bottom;
  background: #fff;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  border: 1px solid #999999;
  vertical-align: middle;
  margin-right: 5px;
}
.jisPage_container .main .info2 li input[type='radio']:active {
  background: #8aa5f3;
}
.jisPage_container .main .info2 li input[type='radio']:hover {
  background: #8aa5f3;
}
.jisPage_container .main .info2 li input[type='radio']:checked {
  background: #8aa5f3;
}
.jisPage_container .main .info2 li input[type='radio']:checked::after {
  background: #8aa5f3;
}
.jisPage_container .main .info2 li input[type='radio']:focus {
  outline: none;
  background: #8aa5f3;
}
</style>
