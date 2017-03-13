<template>
<div>
    <HeadNav></HeadNav>
    <div class="index-container">
    <div class="form">
        <mt-field  placeholder="请输入手机号码" v-model="cellphone" type="tel" :state="telState"></mt-field>
        <mt-field  placeholder="请输入短信验证码" v-model="smscode" type="number">
         <mt-button type="default" size="small" @click.native="disabledSMSEvent" :disabled="disabled">{{smsTips}}</mt-button>
        </mt-field>
        <mt-field  placeholder="请输入密码" v-model="password" type="password"></mt-field>
        <mt-field  placeholder="请输入确认密码" v-model="repassword" type="password"></mt-field>
        <p>
            <mt-button type="danger" size="large" @click.native="registerEvent">立即注册</mt-button>
        </p>
    </div>
    </div>
    </div>
</template>
<script>
import { mapMutations,mapActions } from 'vuex'
import HeadNav from '../components/topNav'
import {HTTP_URL_API} from '../data/api'
import { Toast } from 'mint-ui'
import md5 from 'md5'
import axios from 'axios'
import {createSign,httpPost} from '../data/util'
export default{
data(){
    return {
        smsTips:'获取验证码',
        cellphone:'',
        password:'',
        smscode:'',
        repassword:'',
        delayTime :60,
        delayFlag:true,
        disabled:false,
        telState:''
    }
},
created () {
    this.setTitle()
  },
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE('会员注册')
        this.SHOW_BACK_BUT(true)
    },      
    registerEvent(){
        if(this.cellphone.trim()==''){
            Toast('请输入手机号码')
            return;
            }
        if(this.smscode.trim()==''){
            Toast('请输入短信验证码')
            return;
            }
        if(this.password.trim()==''){
            Toast('请输入登录密码')
            return;
            }                        
        if(this.repassword.trim()=='' || this.password.trim()!=this.repassword.trim()){
            Toast('确认密码输入有误')
            return;
            }
        let data={
            username:this.cellphone.trim(),
            password:md5(this.password.trim())
        }
        httpPost(HTTP_URL_API.USER_REGISTER,createSign(data)).then((res)=>{
            if(res && res.code==0){
                let instance = Toast('注册成功')
                setTimeout(() => {
                    instance.close()
                    this.$router.push({name:'index'})
                }, 2000)
            }
            else 
                Toast('注册失败')
        })
    },
    disabledSMSEvent(){
         if(this.cellphone.trim()==''){
            Toast('请输入手机号码')
            return;
            }
        this.delayTime--;
        this.disabled=true
        this.smsTips=this.delayTime + 's 后重发'
        if (this.delayTime <= 1) {
            this.delayTime = 60;
            this.smsTips="重新获取"
            this.delayFlag = true
            this.disabled=false
        } else {
            this.delayFlag = false
            setTimeout(this.disabledSMSEvent, 1000)
        }            
    },
    sendSMSEvent(){

    }
  },
  components: {HeadNav}
}
</script>
<style>
.form{width:96%;margin:1.5rem auto;}
.form a{line-height:2.5rem;height:2.5rem;}
.form p{margin:1.5rem 0 1.5rem 0;}
.mint-field-other{top:inherit !important;right:.25rem !important;}
.mint-field-other .mint-button-text{width:2rem;}
</style>