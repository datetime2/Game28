<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
        <UcHeader></UcHeader>
        <div class="memberinfodiv">
            <div class="title" style="padding-bottom:1px">
                <div class="title_content">
                    <img src="../../assets/images/user/signin.png" class="m1">
                    <p class="t_1">每日签到</p>
                    <p class="t_2">每日签到登记</p>
                </div>
            </div>
            <div class="cl"></div>
        </div>
        <div class="signBottom">
        <div class="userSign">
            <ul>
                <li class="title">签到说明</li>
                <li>1.可签到等级为：VIP0~VIP7。</li>
                <li>2.参与须绑定手机及身份认证。</li>
                <li>3.连续签到1天以上可获更多金币。</li>
                <li>4.根据"连续签到"和"VIP等级"决定签到领到的金币数量。</li>
                <li>5.连续签到可以获得基数乘以天数的奖励（最多计10天），中断则从头计算天数！</li>
                <li>
                <mt-button :type="butType" size="large" :disabled="isSignin" @click="userSignEvent">{{signText}}</mt-button>
                </li>
            </ul>
        </div>
        <table width="96%" align="center" border="0" cellspacing="1" cellpadding="1" class="introtable"><tbody><tr><th align="center">等级</th><th align="center">获得金币值</th></tr><tr><td align="center">VIP0</td><td align="center">金币基数为10，签到可获得10*天数金币。</td></tr><tr><td align="center">VIP1</td><td align="center">金币基数为20，签到可获得20*天数金币。</td></tr><tr><td align="center">VIP2</td><td align="center">金币基数为30，签到可获得30*天数金币。</td></tr><tr><td align="center">VIP3</td><td align="center">金币基数为40，签到可获得40*天数金币。</td></tr><tr><td align="center">VIP4</td><td align="center">金币基数为50，签到可获得50*天数金币。</td></tr><tr><td align="center">VIP5</td><td align="center">金币基数为60，签到可获得60*天数金币。</td></tr><tr><td align="center">VIP6</td><td align="center">金币基数为88，签到可获得88*天数金币。</td></tr><tr><td align="center">VIP7</td><td align="center">金币基数为108，签到可获得108*天数金币。</td></tr></tbody></table>
        </div>
    </div>
    <FootNav></FootNav>
  </div>
</template>
<script>
import { mapMutations,mapState } from 'vuex'
import FootNav from '../../components/footNav'
import HeadNav from '../../components/topNav'
import UcHeader from '../../components/ucHeader'
import{Toast} from 'mint-ui'
import{HTTP_URL_API} from '../../data/api'
import Util from '../../data/util'
export default{
data(){
  return{
    isSignin:false,
    signText:'签到',
    butType:'danger'
  }
},  
created () {
  this.setTitle()
},
mounted(){
	this.checkUserSign()			
},    
computed: mapState({
    userInfo: state => state.userInfo
}),   
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE('会员中心')
        this.SHOW_BACK_BUT(true)
    },
    userSignEvent(){
      let user={
          userid:this.userInfo.userId,
          ticket:this.userInfo.ticket,
          lang:'cn'
      }
      Util.httpPost(HTTP_URL_API.USER_SIGNIN,Util.createSign(user))
      .then((res)=>{
        if(res && res.data.code==0){
          this.isSignin=true
          this.signText='已签到'
          this.butType='default'
          Toast('签到成功 +'+res.data.data)
        }
        else{
          Toast('签到失败')
        }
      })      
    },
    checkUserSign(){
      let user={
          userid:this.userInfo.userId,
          ticket:this.userInfo.ticket,
          lang:'cn'
      }
      Util.httpPost(HTTP_URL_API.USER_ISSIGN,Util.createSign(user)).then((res)=>{
        if(res && res.data.data){
          this.isSignin=true
          this.signText='已签到'
          this.butType='default'
        }
      })
    }
  },
  components: {HeadNav,FootNav,UcHeader}
}
</script>
<style scoped>
.memberinfodiv,.spreadinfodiv,.welfareinfodiv{background:#e9e9e9;padding:2.5% 0 0 0;clear:both;color:#808080}
.memberinfodiv .title,.spreadinfodiv .title,.welfareinfodiv .title{background:#FFF;border-bottom:1px solid #e9e9e9;font-size:.8rem}
.memberinfodiv .title .title_content,.spreadinfodiv .title .title_content,.welfareinfodiv .title .title_content{width:94%;padding:1.5% 0 1.5% 3%;position:relative}
.memberinfodiv .title .title_content img{vertical-align:middle;width:7.5%;float:left}
.memberinfodiv .title .title_content .r{vertical-align:middle;position:absolute;top:25%;right:1%}
.memberinfodiv .title .title_content .r a{color:#808080}
.cl{clear:both}
.memberinfodiv .m_content,.spreadinfodiv .m_content,.welfareinfodiv .m_content{background:#FFF;height:5%;padding:1% 0%;float:left;width:100%}
.memberinfodiv .m_content ul,.spreadinfodiv .m_content ul,.welfareinfodiv .m_content ul{width:100%;padding:0;margin:0;padding-top:2px}
.memberinfodiv .m_content ul li,.spreadinfodiv .m_content ul li,.welfareinfodiv .m_content ul li{height:100%;text-align:center;background:#FFF repeat;padding:1% 0 1% 0;list-style:none}
.memberinfodiv .m_content ul li a,.spreadinfodiv .m_content ul li a,.welfareinfodiv .m_content ul li a{color:#808080;text-decoration:none}
.memberinfodiv .m_content ul li img,.spreadinfodiv .m_content ul li img,.welfareinfodiv .m_content ul li img{width:70%}
.memberinfodiv .m_content ul li p,.spreadinfodiv .m_content ul li p,.welfareinfodiv .m_content ul li p{margin:-1em 0 0 0;padding:0;font-size:.75rem}
.w20{width:20%}
.fl{float:left}
.memberinfodiv .title .title_content .t_2{margin:0;padding:0;color:#888888;font-size:100%}
.memberinfodiv .title .title_content .t_1{margin:0;padding:0;color:#333333;font-size:120%}
.signBottom{padding:1% 2% 1% 2%;}
.signBottom .userSign{border-radius:5px;border:1px solid #ccc;margin-bottom:1%;}
.signBottom .userSign ul{padding:0 3% 0 3%}
.signBottom .userSign ul li{list-style:none;font-size:80%;line-height:1.2rem;}
.signBottom .userSign ul li.title{text-align:center;font-size:100%}
.signBottom .introtable{background:#808080;font-size:80%;}
.signBottom .introtable th{color:#EFBA8C;background-color:#FFF;height:110%}
.signBottom .introtable td{background-color:#FFF;height:110%}
</style>
