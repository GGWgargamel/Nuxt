<template>
<div>
  <div class="banner contact-banner">
    <p class="title wow slideInLeft"><span>居然管家 品质好管家</span></p>
    <p class="content wow bounceInUp" data-wow-delay="0.5s">居然管家通过直营化服务员工、职业化技能培训、标准化服务流程以及周全的保障服务，
  为每位用户打造健康舒适的居家生活。</p>
  </div>
  <div class="index-section about-part contact-part">
    <div class="service">
      <div class="title">加入我们</div>
      <div class="pattern pattern-on"></div>
    </div>
    <p>欢迎出色并富有战斗力的你加入我们。请将简历发送至：zhangjin@shui.cn，并注明申请职位名称。</p>
    <div class="screen-head">
      <h5>招贤纳士</h5>
      <!-- <div class="like">
        <div class="tool">
          <i class="icons icons-contact-search"></i>
          <input type="text" name="keyword" placeholder="请输入职位关键字" value="" v-model="jobs">
        </div>
        <select name="" class="servecity" @change='updateSheng' v-model="city" placeholder="工作地点">
          <option value="" disabled selected>工作地点</option>
          <option :value="sheng.code" v-for='(sheng,shengKey) in json' :key='shengKey'>{{ sheng.name }}</option>
        </select>
      </div> -->
    </div>
    <div class="screen-foot">
      <div class="jobs" v-for="(val,key) in joblist" :key="key" @click="contactxq(val.name,val.desc,val.release,val.content)">
        <div class="name">
          <h4>{{val.name}}</h4>
          <i class="icons icons-contact-emergency"></i>
        </div>
        <div class="detailed">
          <span>{{val.desc}}</span>
          <span class="fr">{{val.release}}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="pages-cwhite">
    <div class="index-section about-part">
      <div class="service">
        <div class="title">联系我们</div>
        <div class="pattern pattern-on"></div>
      </div>
      <div class="contact-adr">
        <i class="icons icons-contact-adr"></i>
        <div class="address">
          <p><span>北京总部：</span>北京市朝阳区北苑东路20号来春园28号楼1层</p>
          <p><span>武汉分部：</span>湖北省武汉市江汉区常青路45号居然之家汉口店5楼</p>
          <p><span>天津分部：</span>天津市河西区解放南路475号居然之家珠江友谊店5层设计家办公区</p>
          <p><span>成都分部：</span>四川省成都市锦江区锦华路三段86号居然之家成都琉璃店5楼办公区</p>
          <p><span>济南分部：</span>山东省济南市天桥区历山北路123号居然之家5楼办公区</p>
        </div>
      </div>
      <div class="contact-aspect">
        <div class="item clear">
          <i class="icons icons-contact-mobile fl"></i>
          <div class="text fl">
            <p class="title">全国客服热线</p>
            <p>400-155-5151</p>
          </div>
        </div>
        <div class="item clear">
          <i class="icons icons-contact-brand fl"></i>
          <div class="text fl">
            <p class="title">品牌合作</p>
            <p>xiaoam@fuwu.work</p>
          </div>
        </div>
        <div class="item clear">
          <i class="icons icons-contact-media fl"></i>
          <div class="text fl">
            <p class="title">媒体报道</p>
            <p>xiaoam@fuwu.work</p>
          </div>
        </div>
        <div class="item clear">
          <i class="icons icons-contact-business fl"></i>
          <div class="text fl">
            <p class="title">业务合作</p>
            <p>fuhc@fuwu.work</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import data from '../../static/mobile/json.js'
var WOWfs
if (process.client) {
  WOWfs = require('wowjs')
}
export default {
  data () {
    return {
      joblist: [{ 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、负责智能家居软硬件(空气监测等)市场研究、产品规划与需求分析，制订并执行产品设计发展策略；</p> \n <p>2、负责智能家居软硬件产品供应链对接，把控开发、测试、试产和量产等过程及品质，确保产品按时完成，并根据市场反馈不断优化改进产品；</p> \n <p>3、对接家居装修设计平台，完成解决方案在设计平台的落地合作，并完成设计平台相关的协调、培训工作；</p> \n <p>4、完成与各品类智能家居品牌厂商的业务对接及开拓，实现业务深度合作；</p> \n <p>5、负责智能家居施工及服务能力体系的建设，确保用户服务交付能力的落地；</p> \n <p>6、了解行业动向，及时准确地研究，监控，分析竞争对手动态，并提出相应的策略。</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、统招本科及以上学历，电子、计算机、通讯、自动化等相关专业；</p> \n <p>2、熟悉智能硬件从产品规划、产品定义、开发、生产、质量管理等多个环节；</p> \n <p>3、独到的创新意识和优秀的沟通能力、学习能力和团队合作精神，有一定的组织协调能力；</p> \n <p>4、3年及以上智能家居相关行业BD、产品、运营类工作经验，熟悉智能家居相关技术及市场；</p> \n <p>5、具有一定的客户资源及渠道、较广泛的行业客户关系者优先。</p> \n</div>', 'desc': '产品研发中心 | 全职 | 北京', 'name': '智能家居产品经理', 'release': '发布时间：2019-02-19' }, { 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、了解产品需求，独立开展用户体验研究和分析，并完成方案的设计；</p> \n <p>2、设计理论知识丰富，对色彩敏感，及时关注流行风尚变化并具较强的学习领悟能力；</p> \n <p>3、设计作品大气稳重，布局协调；</p> \n <p>4、丰富的用户体验设计经验，善于设计系统交互；</p> \n <p>5、认真严谨，洞察敏锐，思路开阔，有强烈的工作责任感，良好的沟通能力。</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、本科及以上学历，平面设计、视觉传达及相关专业；</p> \n <p>2、精通Photoshop、IIIustrator、（pr或fcp）等软件，扎实的平面设计功底；</p> \n <p>3、三年以上web端网页设计、移动端UI、平面设计工作经验。</p> \n <p>4、有好奇心，对业界最新的应用有深入的见解，对产品、视觉和用户研究有一定经验和见解；</p> \n <p>5、具备良好的沟通和项目管理能力，能承受一定的工作压力；</p> \n <p>6、简历请附作品。</p> \n</div>', 'desc': '产品研发中心 | 全职 | 北京', 'name': '设计师', 'release': '发布时间：2019-02-19' }, { 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、主导Web前端系统的架构设计、开发和工程优化；</p> \n <p>2、负责web组件的设计与规划，关键核心组件开发；</p> \n <p>3、持续对研发过程进行改进及优化、提升开发效率；</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、本科或以上学历</p> \n <p>2、五年或以上Web前端开发相关工作经验，具有主流互联网平台Web前端开发经验者优先；</p> \n <p>3、精通HTML/CSS/JS等基本的web开发技术，对web标准有自己的理解；熟悉常用浏览器兼容方案，有实战经验者优先；</p> \n <p>4、熟练掌握AngularJS、Vue、React等框架，熟悉MVC、MVVM等前端开发模型；</p> \n <p>5、有良好的工作及编码习惯，熟练使用git、webpack等工具；</p> \n <p>6、良好的沟通与表达能力、思路清晰，能够指导他人，有较强的主动性和责任心，有较好的团队协作能力，技术视野广泛者优先；</p> \n <p>7、有一线互联网公司工作经验，主导过中大型系统架构设计者优;</p> \n <p>8、具有较强的分析和解决问题的能力，具备良好的团队合作精神优先。</p> \n</div>', 'desc': '产品研发中心 | 全职 | 北京', 'name': 'Web前端工程师', 'release': '发布时间：2019-02-19' }, { 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、负责平台后台逻辑如商品管理、商家管理、订单管理、售后系统、财务管理、数据分析等方面的功能的需求和产品设计；</p> \n <p>2、了解解后端业务系统和流程，对接公司内部各个细分业务,流程梳理及项目实施；</p> \n <p>3、服务数据的挖掘和分析，提供产品及系统的改进方案并跟进实施，推动业务持续健康发展；</p> \n <p>4、分析行业及竞争产品，跟踪最新发展趋势；</p> \n <p>5、编写产品需求文档、协调开发、测试资源推动项目开发进度，并组织业务部门验收及配合上线。</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、对后端的架构和功能模块有一定的了解；</p> \n <p>2、熟练掌握需求分析、业务流程设计方法；</p> \n <p>3、主动性强，富有主见，善于提出自己的观点，也擅长接受外界的不同意见，喜欢创业氛围；</p> \n <p>4、有良好的团队协作意识，优秀的沟通协调能力，较强的分析问题和解决问题的能力，能主动思考，及时改进产品问题，有较强的逻辑思考能力和归纳总结能力；</p> \n <p>5、适应高强度、快节奏的工作环境。</p> \n</div>', 'desc': '产品研发中心 | 全职 | 北京', 'name': '产品经理', 'release': '发布时间：2019-02-19' }, { 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、熟悉JAVA开发，拥有2年以上J2EE开发经验； </p> \n <p>2、熟悉Spring、Spring MVC、iBatis等主流开源框架及原理； </p> \n <p>3、熟练应用Web前端技术，如php、HTML、JS、Jquery、CSS等；</p> \n <p>4、熟悉Linux常用命令，能够熟练的在linux上进行程序的部署、测试，能够对linux进行基本的操作；</p> \n <p>5、熟悉数据库技术(MySQL/Oracle)，数据库优化及SQL优化； </p> \n <p>6、思维敏捷，拥有优秀的问题分析和处理能力。</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、计算机或相关专业本科以上学历，至少3年以上工作经验，具有扎实的计算机基础理论知识；</p> \n <p>2、有丰富的Java/J2EE开发经验，优秀的技术能力; </p> \n <p>3、熟练使用Spring,Struts,iBatis框架，阅读过源码优先；</p> \n <p>4、熟悉基于数据库的设计和开发，熟练使用Mysql; </p> \n <p>5、与团队一起进行平台架构设计、数据库架构设计，参与需求分析、技术设计与研发、以及系统的部署，确保系统性能、质量和安全； </p> \n <p>6、持续对系统的技术架构进行改进和优化，保证京东大促系统稳定；</p> \n <p>7、熟悉设计模型，良好的代码质量和习惯，优秀的技术架构设计能力；</p> \n <p>8、自驱动、沟通能力、团队精神、快速学习、系统性思考、和热爱技术;</p> \n <p>9、互联网或电商公司，或者有相关的项目经验优先考虑。</p> \n</div>', 'desc': '产品研发中心 | 全职 | 北京', 'name': '中级/高级JAVA工程师', 'release': '发布时间：2019-02-19' }, { 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、负责公司产品及服务标准化制定，课件的编制，技能类考核指标的输出及技术指导；</p> \n <p>2、负责区域服务商及技师的培训落地工作;</p> \n <p>3、研究制定家政类服务产品标准及流程，不断提升服务产品的用户体验；</p> \n <p>4、服务商、技师培训体系的搭建，组织并开展服务商、技师的培训，对培训效果负责；</p> \n <p>5、学习世界先进家政服务体系，及时总结提炼，持续提升公司服务品质；</p> \n <p>6、关注技师技能掌握程度，提升服务品质，减少技能类客诉；</p> \n <p>7、协助运营经理进行服务商及技师的招募；</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、大专以上学历，在家政行业从业3年以上；</p> \n <p>2、3年以上家政行业技术支持、培训管理从业经历，对保洁、家电清洗板块的服务产品在技术层面上非常了解；</p> \n <p>3、具备培训组织与讲解能力，并有至少1个品类的成品培训课件；</p> \n <p>4、有一线家政服务平台企业从业经验者，优先考虑；</p> \n <p>5、执行力强，沟通能力良好，具备团队精神，愿意随创业团队一起快速发展。</p> \n</div>', 'desc': '工程师管理部 | 全职 | 北京', 'name': '培训主管2名', 'release': '发布时间：2019-02-19' }, { 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、根据公司业务计划，完成所在城市的业务启动工作，完成各项业务经营指标；</p> \n <p>2、完成本地合作服务商、服务团队的招募、谈判、培训，建立当地服务交付能力；</p> \n <p>3、根据业务需求，不断优化完善服务团队，不断提高本地用户服务能力；</p> \n <p>4、完成与居然之家当地分公司、门店的业务对接，策划执行与居然之家的各类市场推广活动；</p> \n <p>5、完成与居然之家体系内各品牌合作伙伴的业务沟通，策划执行各类市场推广合作；</p> \n <p>6、开发当地市场，不断做大市场规模，提高市场占有率；</p> \n <p>7、完成公司安排的其他各项工作。</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、大学专科以上学历，25--35岁；</p> \n <p>2、具有3-5年以上市场推广、商务BD或者渠道销售工作经验，能独立策划执行各类市场推广活动；</p> \n <p>3、很强的沟通能力，能独立完成当地服务商、合作伙伴的谈判、培训工作；</p> \n <p>4、具有团队管理和经营意识，能独立完成区域的预决算工作；</p> \n <p>5、有较强的学习能力，熟练掌握各类办公软件；</p> \n <p>6、能适应高强度出差，适应在压力下开展工作；</p> \n <p>7、有o2o服务行业运营、服务管理经验优先。</p> \n</div>', 'desc': '工程师管理部 | 全职 | 北京', 'name': '天津城市经理', 'release': '发布时间：2019-02-19' }, { 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、负责区域城市垂直类目服务商、服务团队的市招募工作，包括家政、保洁、维修等各类家具服务品类；</p> \n <p>2、负责所招募服务商、团队的业务培训组织工作，按照公司要求完成各项职业技能和素质的培训；</p> \n <p>3、不断优化服务团队整体业务能力和水平，确保公司各类服务项目的顺利落地；</p> \n <p>4、建立科学的服务商、服务团队考核成长机制，并完成日常的考核工作；</p> \n <p>5、收集行业市场信息，以及对本公司客户信息反馈；</p> \n <p>6、负责与线上线下相关平台的合作洽谈及执行，以及在其他平台上的推广合作。</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、30岁以下，大专或以上学历；</p> \n <p>2、责任心强，性格活泼，思维跳跃，逻辑缜密；</p> \n <p>3、沟通能力强，表达有激情，能完成团队培训工作者优先；</p> \n <p>4、敢想敢干，能单独完成各类招募活动策划、执行、谈判工作；</p> \n <p>5、具有O2O行业同类工作经验者优先。</p> \n</div>', 'desc': '工程师管理部 | 全职 | 北京', 'name': '招商主管', 'release': '发布时间：2019-02-19' }, { 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、负责家居建材（家具、家电、地板、厨卫、装饰）或者智能电器（净水新风、智能家居、 电器）领域品牌厂商、经销商客户的开拓； </p> \n <p>2、执行公司商务BD拓展政策，完成客户拓展及业务目标；</p> \n <p>3、负责合作品牌商、经销商的服务业务跟进，建立长期稳定的合作关系，并不断开拓业务 渠道； </p> \n <p>4、负责合作品牌商、经销商的服务品质跟进把控，服务过程接洽与沟通，确保客户服务满 意度； </p> \n <p>5、收集家居建材、智能家居售后服务行业市场信息，给公司产品、运营提出合理化建议与 意见； </p> \n <p>6、负责家居建材各品牌产品、运营、推广、活动等合作的洽谈沟通。</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、35岁以下，大专或以上学历；</p> \n <p>2、了解熟悉家居建材、智能电器行业售后服务业务特点，或者具备家居建材和智能电器产 品售后服务工作经验； </p> \n <p>3、有3年以上跨行业招商、品牌招商类工作经验；</p> \n <p>4、工作积极主动，敏锐市场洞察力，出色的沟通能力和分析能力，擅长数据分析；</p> \n <p>5、具备家居建材、智能电器行业客户资源，有居然、红星、装饰公司等招商、商务洽谈经验者优先。</p> \n</div>', 'desc': '工程师管理部 | 全职 | 北京', 'name': '商务BD', 'release': '发布时间：2019-02-19' }, { 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、负责微博、微信、头条等新媒体平台运营（内容撰写、KOL的管理、粉丝增长）；</p> \n <p>2、独立运营微信公众号，服务号，为用户策划与提供优质、有高度传播性的有效内容；</p> \n <p>3、提升用户活跃度，增加粉丝数量，提高关注度和粉丝的活跃度，并及时与粉丝互动；</p> \n <p>4、根据品牌与产品传播策略，策划和执行有影响力的新媒体营销传播活动；</p> \n <p>5、有小程序、app平台的内容运营工作。</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、至少从事过2年以上新媒体运营工作，具备摄影、PS、视频拍摄制作等专业技能；</p> \n <p>2、文案功底扎实，能独立策划选题、并且进行文案创作；</p> \n <p>3、熟悉互联网文化，微博、微信、短视频、SNS、豆瓣等资深用户，热爱新鲜事物，热爱互联网新技术；</p> \n <p>4、有敏锐的洞察力，对内容营销、规划有一定独到见解与把控度；</p> \n <p>5、沟通能力强, 具有良好的团队合作能力，有很强的自我驱动力与执行力，具有强烈的进取。</p> \n</div>', 'desc': '市场运营中心 | 全职 | 北京', 'name': '新媒体运营', 'release': '发布时间：2019-02-19' }, { 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、负责公司视觉风格定义，维护和整理公司视觉设计规范；</p> \n <p>2、负责公司品牌形象、产品界面、运营活动等相关视觉设计输出，包括线下物料、图标、H5、活动专题等；</p> \n <p>3、负责公司app、小程序等移动端推广活动专题、品牌专题等推广活动的创意设计；</p> \n <p>4、负责公司新媒体、线下活动等各类品牌营销推广活动的创意设计输出；</p> \n <p>5、准确理解产品及运营需求，深谙用户体验，结合数据、竞品分析、用户研究等各维度，制定行之有效的设计优化方案，持续优化产品的用户体验。</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、3年以上app平台产品工作经验，视觉表现力强，具备良好的视觉审美，对设计有较多想法。</p> \n <p>2、对设计趋势及不同系统设计有良好的认知，有完善的设计体系及方法论，确信自己不是美工；</p> \n <p>3、具备丰富的平面设计和视觉创意能力，插画、图形或摄影等方向至少有一类技能突出，有技能加分项；</p> \n <p>4、善于沟通，出色的合作态度及团队精神，并富有工作激情，创造力和高度责任感；</p> \n <p>5、提供简历时务必附带作品或作品链接。</p> \n</div>', 'desc': '市场运营中心 | 全职 | 北京', 'name': '视觉设计', 'release': '发布时间：2019-02-19' }, { 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、根据公司市场发展目标及战略，参与搭建公司微信小程序、官方网站、APP等运营管理平台；</p> \n <p>2、制定、完善小程序、APP等平台的运营管理策略，制定运营策略、方案和计划并组织执行，对公司整体运营提供全面的解决方案；</p> \n <p>3、通过各种方式和渠道拓展新用户，完善用户拉新、激活、留存、召回机制，提升运营效益，确保运营目标的实现；</p> \n <p>4、负责各类合作平台的对接运营，包括各类电商、物业、社区等互联网平台；</p> \n <p>5、定期策划组织各类平台运营活动, 为销售目标和结果负责；</p> \n <p>6、完成京东、天猫等合作渠道店铺的整体运营规划和营销推广方案。</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、3年以上O2O、新零售、内容等平台运营管理经验；</p> \n <p>2、具备自有平台从项目策划、筹备、搭建、实施上线、日常活动运营、落地推广、渠道合作等全程经历及成功案例；</p> \n <p>3、对O2O服务运营管理、商务拓展合作、用户运营管理有丰富的经验；</p> \n <p>4、对数据分析有敏锐的感觉，并能对数据有效挖掘；</p> \n <p>5、能根据行业不同时期的市场特点做出策略调整和方法改进；</p> \n <p>6、具有较强的品牌策划、内容和社群运营能力；</p> \n <p>7、具备与技术部门沟通的能力,能够明确产品需求，不断优化平台产品及用户体验。</p> \n</div>', 'desc': '市场运营中心 | 全职 | 北京', 'name': '运营经理', 'release': '发布时间：2019-02-19' }, { 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、建立微信粉丝群，负责内容的发布、维护、关注用户增长，提高影响力和关注度；</p> \n <p>2、负责种子用户的开发与运营，建立有活力的高质量用户群，并不断开拓新的用户群； </p> \n <p>3、策划社群用户激活、转化、裂变、导流、复购等方案，并推进执行；</p> \n <p>4、挖掘分析用户需求，收集用户反馈，处理用户售后问题，推进产品和用户体验改进；</p> \n <p>5、用户数据的基础统计分析，进行用户标签分类，并有针对性的维护；</p> \n <p>6、负责公司服务产品社群购买转化率。</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、热爱互联网，对微信、微博、SNS等产品有浓厚兴趣或深刻认识；</p> \n <p>2、专科及以上及以上学历，有社群运营经验者优先；</p> \n <p>3、熟练掌握办公软件运用，具备基础的数据分析能力、语言及文字表达能力；</p> \n <p>4、喜欢并乐于接受新鲜事物，头脑灵活；</p> \n <p>5、注重团队合作，善于沟通，富有创意，责任心强。</p> \n</div>', 'desc': '市场运营中心 | 全职 | 北京', 'name': '社群运营', 'release': '发布时间：2019-02-19' }, { 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、结合O2O平台特性，制定线上项目活动计划，策划线上营销活动，并根据数据反馈不断优化活动；</p> \n <p>2、根据品牌发展策略，负责产品定位、产品卖点策划描述，根据产品特点完成相应的营销策划方案制定及实施；</p> \n <p>3、完成公司与各类商务合作平台的营销策划制定和实施工作；</p> \n <p>4、敏锐捕捉热点与新趋势，策划高品质的传播内容与事件，以及新兴媒体活动、创意内容完成传播裂变；</p> \n <p>5、根据不同的活动安排，输出不同形式的页面设计方案，并与设计师配合完成页面呈现；</p> \n <p>6、定期整理分析竞品及行业突出的营销动作，输出报告并进行分享。</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、有2年以上互联网、O2O、新零售行业创意／营销策划相关工作经验；</p> \n <p>2、有较强的策略意识，有很好的策划能力和创意能力，有自己的见解及方法论；</p> \n <p>3、具有创新思维，能不断拓宽思路，创造新的营销玩法；</p> \n <p>4、较强的理解与表达能力和沟通能力，思路清晰，能承受较大的工作压力和快节奏的工作；</p> \n <p>5、文字功底是基础，具备较高的方案撰写及宣讲能力 ，PPT创作能力突出者优先考虑；</p> \n <p>6、具有用户增长思维、用户运营经验的优先考虑。</p> \n</div>', 'desc': '市场运营中心 | 全职 | 北京', 'name': '市场策划专员', 'release': '发布时间：2019-02-19' }, { 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、公司日常费用及费用报销审核，费用类、成本类会计凭证的编制；</p> \n <p>2、日常费用标准、相关管理制度的制定及监控，月度费用预算执行情况分析；</p> \n <p>3、月底结账成本的结转、相关费用的计提；</p> \n <p>4、按时进行纳税申报和税款缴纳； </p> \n <p>5、负责增值税发票的开具、认证等发票管理工作； </p> \n <p>6、与税务机关保持良好沟通，做好日常税企关系维护，配合税务检查、稽查等工作；</p> \n <p>7、配合事务所等外部机构及公司内部管理提供相关税务资料； </p> \n <p>8、领导交付的其他事宜。</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、财务会计相关专业专科以上学历，2年以上相关工作经验；</p> \n <p>2、费用管理岗位工作一年以上，熟练使用office办公软件及用友、SAP 系统等财务系统；</p> \n <p>3、工作细心、积极乐观、适应能力强、具有良好的沟通能力及协调能力；</p> \n <p>4、具有较强的责任心及团队合作精神；</p> \n <p>5、认同企业文化，服从上级领导安排。</p> \n</div>', 'desc': '财务部 | 全职 | 北京', 'name': '财务出纳/会计', 'release': '发布时间：2019-02-19' }, { 'content': '<div class="require"> \n <p class="title"> 岗位描述：</p> \n <p>1、根据公司制定的业务目标，制定本部门业务目标和计划，制定销售策略并执行；</p> \n <p>2、组建、培训、管理本部门团队，分解销售目标，确保完成公司制定的业务目标；</p> \n <p>3、协助建立公司的会员体系制度，并根据公司会员产品政策，完成会员产品的推广销售目标；</p> \n <p>4、根据公司规划，组织建立公司社群销售运营体系，完成团队社群销售培训，完成相应业务目标；</p> \n <p>5、组织完成对净水服务老客户定期更换滤芯回访任务，确保客户持续服务消费，提高用户满意度；</p> \n <p>6、完成公司内部业务协调工作，并协助完成用户投诉处理等事务；</p> \n <p>7、完成公司交代的其他临时性工作。</p> \n</div>\n<div class="require"> \n <p class="title">任职要求：</p> \n <p>1、大学本科及以上学历，熟练掌握office等各类办公工具；</p> \n <p>2、具备五年以上2C的电话营销、社群营销工作经验；</p> \n <p>3、具备较强的沟通、培训及团队管理能力经验；</p> \n <p>4、责任心强，有创新意识，具备一定的承压能力。</p> \n</div>', 'desc': '客服中心 | 全职 | 北京', 'name': '增值服务经理', 'release': '发布时间：2019-02-19' }],
      json: data,
      city: '',
      jobs: '',
      shiCode: '110000',
      xianCode: '110000',
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
    updateSheng (e) {
      this.shiCode = e.target.value
      this.xianCode = this.shiData[0].code
    },
    updateShi (e) {
      this.xianCode = e.target.value
    },
    contactxq(name, desc, release, content) {
      this.$router.push({
        path: '/content/ContactViews',
        query: {
          name: name,
          desc: desc,
          release: release,
          content: content
        }
      })
    }
  },
  created () {
    setTimeout(() => {
    }, 500)
  },
  mounted() {
    if (process.client) {
      new WOWfs.WOW().init()
    }
  },
}
</script>

<style scoped>
.about-part .service .title{width: 100%;font-size: 32px;font-weight:500;margin-top: 30px;}
.about-part .service{padding: 100px 0 0;text-align: center;}
.about-part .service .pattern{width:116px;display: inline-block;margin-top: 30px;height: 6px;background:#F18E2B;}
.about-part .service .pattern-on{width: 80px;}
.contact-banner{background: url(~static/banner-5.jpg) top center no-repeat;background-size:cover;height: 876px;padding: 242px 0 0 260px;}
.contact-banner .title{font-family:"regular";background: url(~static/banner-5-slogan.png) top center no-repeat;background-size:cover;font-size: 48px;color: #FBFBFB;width: 690px;height: 98px;font-weight: bold;position: relative;}
.contact-banner .title span{width:100%;position: absolute;top: 50%;left:50%;display: inline-block;transform:translate(-40%, -50%);}
.contact-banner .content{margin-top: 50px;width:838px;line-height: 40px;font-size: 18px;}
.contact-part p{margin-top: 60px;font-size: 18px;color: #666666;line-height:44px;padding-left: 20px;}
.contact-part .screen-head{margin-bottom: 20px;}
.contact-part .screen-head h5{display:block;font-size: 30px;font-weight:400;line-height:44px;padding: 30px 0 0 20px;}
.contact-part .screen-head h3{display:block;font-size: 30px;font-weight:400;line-height:44px;padding: 20px 0 20px 20px;}
.contact-part .screen-head .like{margin:0 30px;position: relative;padding-right: 230px;font-size: 26px;}
.contact-part .screen-head .like .tool{height:70px;border:1px solid #666666;border-radius:4px;padding-left: 350px;display: flex;justify-content: flex-start;}
.contact-part .screen-head .like .tool .icons{margin-top: 20px;}
.contact-part .screen-head .like .tool input{height: 100%;font-size: 20px;border:0;background: transparent;}
.contact-part .screen-head .like select{position: absolute;right: 0;text-align: center;color:#666666;width: 210px;height:70px;border:1px solid #666666;border-radius:4px;top:0;line-height: 70px;font-size: 20px;background: transparent;}
.contact-part .screen-head .like select option{text-align: center;width: 100%;}
.contact-part .screen-foot{background: #FCFCFC;}
.contact-part .screen-head .like .select:focus {outline: none;border-color: #666666;}
.contact-part .screen-foot .jobs{padding: 30px 0;margin:0 30px;border-bottom: 1px solid #EEEEEE;}
.contact-part .screen-foot .jobs a{display: block;}
.contact-part .screen-foot .jobs:last-child{border-bottom:0;}
.contact-part .screen-foot .jobs .name{margin-bottom: 30px;}
.contact-part .screen-foot .jobs .name h4{font-size: 20px;font-weight:400;display: inline-block;margin-right: 50px;}
.contact-part .screen-foot .jobs .name .icons{vertical-align:top;}
.contact-part .screen-foot .jobs .detailed span{font-size:16px;color:#666666;}
.contact-part .screen-foot .jobs .detailed span:last-child{color: #999999;font-size: 16px;}
.contact-part .job-details .post{margin-bottom: 35px;}
.contact-part .job-details .post p{color:#333333;line-height: 24px;margin-bottom: 10px;}
.contact-part .job-details .post .design{border-bottom:1px solid #CCCCCC;margin-left: 40px;height: 6px;}
.contact-part .job-details .post .design .pattern{width:216px;background: #F18E2B;color: red;height: 6.5px;}
.contact-part .recruit{position:relative;padding: 60px 0 0 100px;}
.contact-part .recruit .title{position: absolute;width: 100px;left: 0;color: #333333;font-size: 24px;}
.contact-part .recruit .describe{display: flex;justify-content: flex-start;flex-wrap: wrap;}
.contact-part .recruit .describe .job{width: 220px;text-align: center;color: #666666;font-size: 20px;margin-bottom: 35px;padding: 10px 0;border:1px solid #FAFAFA;}
.contact-part .recruit .describe .job-on{color: #F18E2B;border:1px solid #F18E2B;border-radius: 10px;}
.contact-adr{position: relative;padding: 0 0 100px 100px;margin-top: 85px;}
.contact-adr .icons{position: absolute;left: 0;top: -25px;}
.contact-adr .address p{color: #999999;font-size: 18px;margin: 25px 0;}
.contact-adr .address p span{color: #333333;font-size: 20px;}
.contact-aspect{display: flex;justify-content:space-between;padding-bottom: 146px;}
.contact-aspect .item .text{color: #666666;font-size: 20px;margin-left: 20px;line-height: 40px;}
.contact-aspect .item .text .title{color: #333333;font-size: 18px;}
</style>
