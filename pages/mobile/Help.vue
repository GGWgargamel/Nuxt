<template>
  <div>
    <div class="helpCenter_container">
      <div class="header">
        <!-- <a class="back" href="<?php echo $S_ROOT;?>index"><img src="~static/mobile/back-arrow.png"/></a> -->
        <router-link to="/mobile" class="back">
          <img src="~static/mobile/back-arrow.png">
        </router-link>
        <span>帮助中心</span>
      </div>
      <div class="main">
        <div class="tab-nav">
          <span
            :class="{active:index == ind}"
            v-for="(i,index) in meaus"
            :key="index"
            @click="changemeau($event,index)"
          >{{i.meau}}</span>
          <!-- <span>服务保障</span>
          <span class="active">下单说明</span>
          <span>订单处理</span>-->
        </div>
        <div class="tab-content">
          <div class="isShow" v-if="ind == 0">
            <ul>
              <li>
                <p>Q：如何在居然管家平台上操作下单？？</p>
                <span>A：进入平台界面，选择所需的服务项目，根据不同产品要求选择服务地址、服务时间段、选择产品规格与数量，确定服务金额，完成支付即下单完成。</span>
              </li>
              <li>
                <p>Q：平台上怎么选择不了当天的服务时间？</p>
                <span>A：由于需要提前安排服务人员，居然管家平台目前不支持当天的服务预约（部分特例商品除外）</span>
              </li>
              <li>
                <p>Q：急需服务，希望当天能提供服务的情况怎么办？</p>
                <span>A：您可以拔打我们的客服电话或选择在线客服说明您的情况，如果当前有服务人员库存，您可以在线操作可选的任何时间下单支付后，告知客服对时间进行修改，并安排服务。</span>
              </li>
              <li>
                <p>Q：在线可选的最长预约时间是多久？</p>
                <span>A：居然管家平台目前最长可以预约14天之内的订单（不含当天）。</span>
              </li>
              <li>
                <p>Q：预约了服务，未完成支付，再来支付的时候，怎么找不到待付款的订单了？</p>
                <span>A：订单支付需要在下单30分钟内完成，超时系统会自动取消订单。</span>
              </li>
              <li>
                <p>Q：使用居然管家平台下单，可以现金支付吗？目前支持哪些支付方式？</p>
                <span>A：居然管家不支持现金支付，只支持线上支付，包括微信支付和支付宝支付。</span>
              </li>
            </ul>
          </div>
          <div class="isShow" v-if="ind == 1">
            <ul>
              <li>
                <p>Q：在线客服的工作时间？</p>
                <span>A：早8：00至晚21：00，节假日不限。</span>
              </li>
              <li>
                <p>Q：上门的服务人员安全可靠吗？</p>
                <span>A：居然管家平台会对所有服务人员都进行了身份认证，服务人员工作和家庭背景双重认证，身份证全国联网查证，确保本人服务。</span>
              </li>
              <li>
                <p>Q：服务人员来自全国各地，会不会发生疾病的传染？</p>
                <span>A：居然管家的服务人员全员持有健康证，定期体检，针对住家服务人员，可根据用户要求定制体检。</span>
              </li>
              <li>
                <p>Q：服务人员参加过相关的培训吗？</p>
                <span>A：居然管家的服务人员全员通过对应的服务技术、礼仪、沟通技能培训，并经过理论及实操考核、技能认证。</span>
              </li>
              <li>
                <p>Q：服务效果不好怎么办？</p>
                <span>A：居然管家对最终服务的效果负责，如果对服务效果有疑问，请及时通过在线客服、400热线等方式反馈，我们将快速解决。</span>
              </li>
              <li>
                <p>Q：如果服务人员在我家服务时不小心摔伤了怎么办？</p>
                <span>A：居然管家为每一位服务人员提供意外险，工作产生的意外，我们会协助服务人员进行保险报销及理赔。</span>
              </li>
              <li>
                <p>Q：如果服务人员在我家服务时损坏了我家的物品怎么办？</p>
                <span>A：居然管家百分百提供家政服务责任险，我们将尽快通过合法流程进行理赔。</span>
              </li>
            </ul>
          </div>
          <div class="isShow" v-if="ind == 2">
            <ul>
              <li>
                <p>Q：使用平台下单，费用已经在线支付，但是没有完成服务，需要申请订单退款，会扣费吗？</p>
                <span>A：由于您的行程有变时：</span>
                <span>①距离服务时间6个小时外，客户取消可全额退款；</span>
                <span></span>
                <span>②距离服务时间0-6小时，客户取消需扣除20%预付款；</span>
                <span>③已到服务时间，客户取消需扣除100%预付款</span>
                <span>如是由于服务人员的行程或库存原因：请联系客服取消订单，全额退款，不会扣费。</span>
              </li>
              <li>
                <p>Q：我已取消订单，为什么订单费用没有退回我的账户？</p>
                <span>A：已经取消的订单，我们会在1-3个工作日内进行审核处理，审核后，进行相应的退款操作。如有疑虑可直接联系我们的客服。</span>
              </li>
              <li>
                <p>Q：订单退款会退回到哪儿？</p>
                <span>A：支付金额会按原路径退回至您的支付账户。</span>
              </li>
              <li>
                <p>Q：订单退款金多长时间能够到账？</p>
                <span>A：进行退款操作后，由于微信、支付宝第三方支付系统流程原因，预计1-3个工作日可到账。</span>
              </li>
              <li>
                <p>Q：产生额外增加费用时，可以直接将服务费用交给服务人员吗？</p>
                <span>A：不可以。我们无法对这种结算方式提供安全和质量保证，为了避免不必要的损失，并保障您的合法权益，务必在居然管家平台上进行支付结算。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="foot">©2009-2018 居然管家·智能家居服务平台 版权所有 京ICP备18060047号</div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'mobile_noheader',
  data() {
    return {
      ind: 0,
      number: -1,
      meaus: [{ meau: '服务保障' }, { meau: '下单说明' }, { meau: '订单处理' }]
    }
  },
  //     mounted(){
  //       document.querySelector('.tab-nav span').className = 'active'
  //     },
  methods: {
    changemeau(e, index) {
      this.ind = index
      this.number = index
    }
  }
}
</script>

<style scoped>
.helpCenter_container {
}
.helpCenter_container .header {
  height: 44px;
  line-height: 44px;
  text-align: center;
  position: relative;
  background: #fcfcfc;
}
.helpCenter_container .header .back {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  width: 6px;
  height: 12px;
}
.helpCenter_container .header .back img {
  display: block;
  width: 100%;
  height: 100%;
}
.helpCenter_container .header span {
  font-size: 16px;
}
.helpCenter_container .main .tab-nav {
  height: 54px;
  margin: 5px 0px;
  padding: 0px 48px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fcfcfc;
}
.helpCenter_container .main .tab-nav .active {
  background: #f18e2b;
  color: #ffffff;
  border: 1px solid #f18e2b;
}
.helpCenter_container .main .tab-nav span {
  display: inline-block;
  width: 80px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  border: 1px solid #999999;
  color: #666666;
}
.helpCenter_container .main .tab-content {
}
.helpCenter_container .main .tab-content > div {
  display: none;
  background: #ffffff;
}
.helpCenter_container .main .tab-content .isShow {
  display: block;
}
.helpCenter_container .main .tab-content > div ul {
  padding: 0px 10px;
}
.helpCenter_container .main .tab-content > div li {
  line-height: 1.5;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 0px;
  box-sizing: border-box;
}
.helpCenter_container .main .tab-content > div li p {
  color: #278fcf;
  font-size: 13px;
  margin-bottom: 5px;
}
.helpCenter_container .main .tab-content > div li span {
  color: #666666;
  font-size: 13px;
}
.helpCenter_container .foot {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  color: #fdfdfd;
  font-size: 10px;
  background: #130b05;
}
</style>
