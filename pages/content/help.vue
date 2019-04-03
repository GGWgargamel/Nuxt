<template>
<div class="pages-cgrey">
  <div class="banner helpcenter-banner">
    <p class="wow slideInLeft">帮助中心</p>
  </div>
  <div class="help-part">
    <div class="index-section help-main">
      <div class="help-left">
        <p>帮助中心</p>
        <ul class="catalog">
          <li v-for="(i,index) in meaus" :key="index" @click='change($event,index)' :class='{lion:index == ind}'>{{i.meau}}</li>
        </ul>
      </div>
      <div class="help-right" v-if='ind == 0'>
        <h2>下单说明</h2>
        <div class="help-content">
          <div class="list">
            <p>Q：如何在居然管家平台上操作下单？</p>
            <p>A：进入平台界面，选择所需的服务项目，根据不同产品要求选择服务地址、服务时间段、选择产品规格与数量，确定服务金额，完成支付即下单完成。</p>
          </div>
          <div class="list">
            <p>Q：平台上怎么选择不了当天的服务时间？</p>
            <p>A：由于需要提前安排服务人员，居然管家平台目前不支持当天的服务预约（部分特例商品除外）。</p>
          </div>
          <div class="list">
            <p>Q：急需服务，希望当天能提供服务的情况怎么办？</p>
            <p>A：您可以拔打我们的客服电话或选择在线客服说明您的情况，如果当前有服务人员库存，您可以在线操作可选的任何时间下单支付后，告知客服对时间进行修改，并安排服务。</p>
          </div>
          <div class="list">
            <p>Q：在线可选的最长预约时间是多久？</p>
            <p>A：居然管家平台目前最长可以预约14天之内的订单（不含当天）。</p>
          </div>
          <div class="list">
            <p>Q：预约了服务，未完成支付，再来支付的时候，怎么找不到待付款的订单了？</p>
            <p>A：订单支付需要在下单30分钟内完成，超时系统会自动取消订单。</p>
          </div>
          <div class="list">
            <p>Q：使用居然管家平台下单，可以现金支付吗？目前支持哪些支付方式？</p>
            <p>A：居然管家不支持现金支付，只支持线上支付，包括微信支付和支付宝支付。</p>
          </div>
        </div>
      </div>

      <div class="help-right" v-if="ind == 1">
        <h2>服务保障</h2>
        <div class="help-content">
          <div class="list">
            <p>Q：在线客服的工作时间？</p>
            <p>A：早8：00至晚21：00，节假日不限。</p>
          </div>
          <div class="list">
            <p>Q：上门的服务人员安全可靠吗？</p>
            <p>A：居然管家平台会对所有服务人员都进行了身份认证，服务人员工作和家庭背景双重认证，身份证全国联网查证，确保本人服务。</p>
          </div>
          <div class="list">
            <p>Q：服务人员来自全国各地，会不会发生疾病的传染？</p>
            <p>A：居然管家的服务人员全员持有健康证，定期体检，针对住家服务人员，可根据用户要求定制体检。</p>
          </div>
          <div class="list">
            <p>Q：服务人员参加过相关的培训吗？</p>
            <p>A：居然管家的服务人员全员通过对应的服务技术、礼仪、沟通技能培训，并经过理论及实操考核、技能认证。</p>
          </div>
          <div class="list">
            <p>Q：服务效果不好怎么办？</p>
            <p>A：居然管家对最终服务的效果负责，如果对服务效果有疑问，请及时通过在线客服、400热线等方式反馈，我们将快速解决。</p>
          </div>
          <div class="list">
            <p>Q：如果服务人员在我家服务时不小心摔伤了怎么办？</p>
            <p>A：居然管家为每一位服务人员提供意外险，工作产生的意外，我们会协助服务人员进行保险报销及理赔。</p>
          </div>
          <div class="list">
            <p>Q：如果服务人员在我家服务时损坏了我家的物品怎么办？</p>
            <p>A：居然管家百分百提供家政服务责任险，我们将尽快通过合法流程进行理赔。</p>
          </div>
        </div>
      </div>

      <div class="help-right" v-if="ind == 2">
        <h2>订单处理</h2>
        <div class="help-content">
          <div class="list">
            <p>Q：使用平台下单，费用已经在线支付，但是没有完成服务，需要申请订单退款，会扣费吗？</p>
            <p>A：由于您的行程有变时：</p>
            <p>①距离服务时间6个小时外，客户取消可全额退款；</p>
            <p>②距离服务时间0-6小时，客户取消需扣除20%预付款；</p>
            <p>③已到服务时间，客户取消需扣除100%预付款。</p>
            <p>如是由于服务人员的行程或库存原因：请联系客服取消订单，全额退款，不会扣费。</p>
          </div>
          <div class="list">
            <p>Q：我已取消订单，为什么订单费用没有退回我的账户？</p>
            <p>A：已经取消的订单，我们会在1-3个工作日内进行审核处理，审核后，进行相应的退款操作。如有疑虑可直接联系我们的客服。</p>
          </div>
          <div class="list">
            <p>Q：订单退款会退回到哪儿？</p>
            <p>A：支付金额会按原路径退回至您的支付账户。</p>
          </div>
          <div class="list">
            <p>Q：订单退款金多长时间能够到账？</p>
            <p>A：进行退款操作后，由于微信、支付宝第三方支付系统流程原因，预计1-3个工作日可到账。</p>
          </div>
          <div class="list">
            <p>Q：产生额外增加费用时，可以直接将服务费用交给服务人员吗？</p>
            <p>A：不可以。我们无法对这种结算方式提供安全和质量保证，为了避免不必要的损失，并保障您的合法权益，务必在居然管家平台上进行支付结算。</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>
<script>
var WOWfs
if (process.client) {
  WOWfs = require('wowjs')
}
export default {
  layout: 'content',
  data() {
    return {
      ind: 0,
      meaus: [
        { meau: '下单说明' },
        { meau: '服务保障' },
        { meau: '订单处理' }
      ]
    };
  },
  mounted() {
    if (process.client) {
      new WOWfs.WOW().init()
    }
  },
  methods: {
    change(e, index) {
      this.ind = index
    }
  },
}
</script>

<style scoped>
.helpcenter-banner{background: url('~static/banner-bzzx.png') top center no-repeat;background-size:cover;height: 400px;}
.helpcenter-banner p{font-family:"regular";font-size: 48px;color: #484848;font-weight:300;padding: 79px 40px 0 1000px;width: 1240px;text-align: right;margin:0 auto;}
.help-part{background:#FFFFFF;width: 100%;padding: 70px 0;}
.help-part .help-main{width: 1200px;margin: 0 auto;padding-left:200px;position: relative;}
.help-part .help-main .help-left{width: 200px;position: absolute;left:0;}
.help-part .help-main .help-left p{font-size: 20px;padding:15px 0;}
.help-part .help-main .help-left li{font-size: 18px;padding:15px 0;color:#666;}
.help-part .help-main .help-left li.lion{color: #F18E2B;}
.help-part .help-main .help-right{padding-left: 30px;border-left:1px solid #EEEEEE;}
.help-part .help-main .help-right h2{padding: 22px 0 60px;font-size: 32px;font-weight:500;width: 100%;text-align: center;}
.help-part .help-main .help-right .help-content{padding-bottom: 100px;}
.help-part .help-main .help-right .help-content .list{margin-bottom:30px;}
.help-part .help-main .help-right .help-content .list p{font-size: 18px;color: #666666;line-height: 30px;}
.help-part .help-main .help-right .help-content .list p:first-child{color: #278FCF;}
</style>
