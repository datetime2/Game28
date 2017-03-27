<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
      <UcHeader></UcHeader>
      <div class="maininfodiv pwddiv">
        <mt-field label="游戏眤称：" placeholder="昵称3-12字符" v-model="nickName"></mt-field>
        <mt-field label="电子邮箱：" placeholder="常用电子邮箱" v-model="email"></mt-field>
        <mt-field label="手机号码：" placeholder="绑定后不能修改" v-model="cellPhone" :disabled="cellPhone==''"></mt-field>
        <p>
          <mt-button type="danger" size="large" @click.native="submitEvent">马上修改</mt-button>
        </p>
      </div>
    </div>
    <FootNav></FootNav>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import FootNav from '../../components/footNav'
import HeadNav from '../../components/topNav'
import UcHeader from '../../components/ucHeader'
import {HTTP_URL_API} from '../../data/api'
import axios from 'axios'
import {createSign,httpPost} from '../../data/util'
import { Toast,Indicator} from 'mint-ui'
export default{
data(){
  return{
    nickName:this.$store.state.userInfo.nickName,
    email:this.$store.state.userInfo.email,
    cellPhone:this.$store.state.userInfo.cellPhone
  }
},  
created () {
    this.setTitle()
  },     
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT','USER_CHANGE','USER_LOGOUT']),
    setTitle(){
        this.CHANGE_TITLE('会员中心')
        this.SHOW_BACK_BUT(true)
    },
    submitEvent(){
      let data={
            nickname:this.nickName,
            email:typeof(this.email) == "undefined"?"":this.email,
            ticket:this.$store.state.userInfo.ticket,
            userid:this.$store.state.userInfo.userId,
            lang:'cn'
        }
        httpPost(HTTP_URL_API.USER_MODIFY,createSign(data))
        .then((res)=>{
            if(res && res.data.code==0)
                Toast('操作成功')
            else 
                Toast(res.data.errors)
        })
        .then(()=>{
                let user={
                    userid:this.$store.state.userInfo.userId,
                    ticket:this.$store.state.userInfo.ticket,
                    lang:'cn'
                }
                httpPost(HTTP_URL_API.USER_INFOMATION,createSign(user)).then((res)=>{
                    if(res){
                        if(res.data.code==0){
                        let user ={
                                userName: res.data.data.LoginName,
                                nickName: res.data.data.NickName ? res.data.data.NickName : '',
                                userId: res.data.data.Id,
                                ticket: this.$store.state.userInfo.ticket,
                                amount: res.data.data.BalanceAmount,
                                cellPhone:res.data.data.Phone,
                                bankAmount:res.data.data.AccountAmount,
                                email:res.data.data.email
                            }
                            this.USER_CHANGE(user)
                        }
                        if(res.data.code==98 || res.data.code==99){
                            this.USER_LOGOUT()
                            let instance = Toast('登录信息已失效')
                                setTimeout(() => {
                                instance.close()
                                this.$router.push({
                                        name: 'login'
                                    })
                            }, 2000)
                        }
                    }
                })                
            })
    }
  },
  components: {HeadNav,FootNav,UcHeader}
}
</script>
<style scoped>
.pwddiv {
    border-radius: 5px;
    width: 96%;
    float: left;
    margin: 1% 1% 1% 1.5%;
}
</style>