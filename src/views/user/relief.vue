<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
      <UcHeader></UcHeader>
      <div class="memberinfodiv">
            <div class="title" style="padding-bottom:1px">
                <div class="title_content">
                    <img src="../../assets/images/user/jiuji.png" class="m1">
                    <p class="t_1">每日救济</p>
                    <p class="t_2">每日登录可免费领取的系统救济</p>
                </div>
            </div>
            <div class="cl"></div>
        </div>
      <table width="96%" align="center" border="0" cellspacing="1" cellpadding="1" class="introtable"><tbody><tr><th align="center">等级</th><th align="center">升级所需经验</th><th align="center">救济金币</th></tr><tr><td align="center">VIP0</td><td align="center">0</td><td align="center">100</td></tr><tr><td align="center">VIP1</td><td align="center">200</td><td align="center">200</td></tr><tr><td align="center">VIP2</td><td align="center">1000</td><td align="center">300</td></tr><tr><td align="center">VIP3</td><td align="center">3000</td><td align="center">400</td></tr><tr><td align="center">VIP4</td><td align="center">8000</td><td align="center">500</td></tr><tr><td align="center">VIP5</td><td align="center">20000</td><td align="center">600</td></tr><tr><td align="center">VIP6</td><td align="center">50000</td><td align="center">700</td></tr><tr style="color:Red;font-weight:bold;"><td align="center">VIP7</td><td align="center">120000</td><td align="center">800</td></tr></tbody></table>
      <p class="tip">温馨提示：根据您的VIP等级升高，领取的救济金额将逐渐增加。</p>
      <mt-button :type="butType" size="large" :disabled="isRelief" @click="userReliefEvent">{{reliefText}}</mt-button>
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
    isRelief:false,
    reliefText:'领取救济',
    butType:'danger'
  }
},   
created () {
    this.setTitle()
},
mounted(){
	this.checkUserRelief()			
},    
computed: mapState({
    userInfo: state => state.userInfo
}),   
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT','USER_CHANGE']),
    setTitle(){
        this.CHANGE_TITLE('会员中心')
        this.SHOW_BACK_BUT(true)
    },
    checkUserRelief(){
      let user={
          userid:this.userInfo.userId,
          ticket:this.userInfo.ticket,
          lang:'cn'
      }
      Util.httpPost(HTTP_URL_API.USER_ISRELIEF,Util.createSign(user)).then((res)=>{
        if(res && res.data.data){
          this.isRelief=true
          this.reliefText='已领取'
          this.butType='default'
        }
      })
    },
    userReliefEvent(){
      if(this.userInfo.amount<100){
        let user={
            userid:this.userInfo.userId,
            ticket:this.userInfo.ticket,
            lang:'cn'
        }
        Util.httpPost(HTTP_URL_API.USER_RELIEF,Util.createSign(user)).then((res)=>{
          if(res && res.data.code==0){
            this.isRelief=true
            this.reliefText='已领取'
            this.butType='default'
            let users ={
              userName: this.userInfo.userName,
              nickName: this.userInfo.nickName,
              userId: this.userInfo.userId,
              ticket: this.userInfo.ticket,
              amount: this.userInfo.amount+100,
              cellPhone:this.userInfo.cellPhone,
              bankAmount:this.userInfo.bankAmount,
              email:this.userInfo.email
                   }
            this.USER_CHANGE(users)
            Toast('领取成功 +'+100)
          }
          else{
            Toast('领取失败')
          }
        })  
      }
      else{
        Toast('当金豆不足时才可领取')
      }
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
.introtable{background:#808080;font-size:80%;}
.introtable th{color:#EFBA8C;background-color:#FFF;height:110%}
.introtable td{background-color:#FFF;height:110%}
.tip{color:#23af37;font-size:70%;padding-left:0.5%}
</style>