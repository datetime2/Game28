<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
      <UcHeader></UcHeader>
      <div class="maininfodiv pwddiv">
        <mt-field label="游戏眤称：" placeholder="昵称3-12字符" v-model="userInfo.nickName"></mt-field>
        <mt-field label="电子邮箱：" placeholder="常用电子邮箱" v-model="userInfo.email"></mt-field>
        <mt-field label="手机号码：" placeholder="绑定后不能修改" v-model="userInfo.cellPhone" :disabled="userInfo.cellPhone==''"></mt-field>
        <p>
          <mt-button type="danger" size="large" @click.native="submitEvent">马上修改</mt-button>
        </p>
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
import {HTTP_URL_API} from '../../data/api'
import axios from 'axios'
import {createSign,httpPost} from '../../data/util'
export default{
data(){
  return{
    nickName:'',
    email:'',
    cellPhone:''
  }
},  
computed: mapState({
    userInfo: state => state.userInfo
}),
created () {
    this.setTitle()
  },     
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE('会员中心')
        this.SHOW_BACK_BUT(true)
    },
    submitEvent(){
      let data={
            nickname:this.nickName.trim(),
            email:this.email.trim(),
            ticket:this.$store.state.userInfo.tikect,
            userid:this.$store.state.userInfo.userid
        }
        httpPost(HTTP_URL_API.USER_EDIT,createSign(data)).then((res)=>{
            if(res && res.code==0){
                let instance = Toast('操作成功')
                setTimeout(() => {
                    instance.close()
                    // this.$router.push({name:'index'})
                }, 2000)
            }
            else 
                Toast(res.errors)
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