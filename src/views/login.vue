<template>
<div>
    <HeadNav></HeadNav>
    <div class="index-container">
    <div class="form">
        <mt-field label="登录账号" placeholder="请输入登录账号" v-model="username"></mt-field>
        <mt-field label="登录密码" placeholder="请输入登录密码" v-model="password" type="password"></mt-field>
        <p>
        <mt-switch v-model="isrember">记住登录</mt-switch>
        </p>
        <p>
        <mt-button type="danger" size="large" @click.native="loginEvent">登录</mt-button>
        </p>
    </div>
    <div class="lable">
        <router-link :to="{name:'index'}">返回首页</router-link>
        <router-link :to="{name:'register'}">立即注册</router-link>
        <router-link :to="{name:'index'}">找回密码</router-link>
    </div>
    </div>
    </div>
</template>
<script>
import { mapMutations,mapActions,mapStates } from 'vuex'
import HeadNav from '../components/topNav'
import {HTTP_URL_API} from '../data/api'
import { Toast,Indicator} from 'mint-ui'
import md5 from 'md5'
import axios from 'axios'
export default{
data(){
    return {
        username:'',
        password:'',
        isrember:false
    }
},
created () {
    this.setTitle()
  },
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    ...mapActions(['USER_LOGIN']),
    setTitle(){
        this.CHANGE_TITLE('会员登录')
        this.SHOW_BACK_BUT(false)
    },      
    loginEvent(){
        if(this.username.trim()==''){
            Toast('请输入登录账号')
            return;
            }
        if(this.password.trim()==''){
            Toast('请输入登录密码')
            return;
            }
        let data=[];
        data.push("username="+this.username.trim());
        data.push("password="+md5(this.password.trim()));
        data.push("rember="+this.isrember);            
        Indicator.open()
        this.$store.dispatch('USER_LOGIN',data.join('&')).then((userInfo)=>{
            Indicator.close()
            if(userInfo.userId){
                let redirect = decodeURIComponent(this.$route.query.redirect || '/')
                this.$router.push({
                    path: redirect
                })
            }
        })
    }
  },
  components: {HeadNav}
}
</script>
<style scoped>
.form{width:96%;margin:1.5rem auto;}
.form a{line-height:2.5rem;height:2.5rem;}
.form p{margin:1.5rem 0 1.5rem 0;}
.lable{text-align:center;}
.lable a{font-size: 0.95em;color:#ccc;margin:0 .3rem 0 .3rem;}
.mint-switch-input:checked + .mint-switch-core{border-color: #ef4f4f !important;background-color: #ef4f4f !important;}
</style>