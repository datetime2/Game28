<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
<mt-navbar v-model="selected">
        <mt-tab-item id="1" @click.native="tabSelectEvent('1')">正进行活动</mt-tab-item>
        <mt-tab-item id="2" @click.native="tabSelectEvent('2')">已结束活动</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="hddiv">
            <ul>
              <li v-for="(activity,index) in activityList">
                  <div class="bg">
                    <div>
                      <div :class="{leftdiv:1==1,leftdiv_act1:index==0,leftdiv_act2:index==1,leftdiv_act3:index==2,leftdiv_act4:index==3,leftdiv_act5:index==4,leftdiv_act6:index==5,leftdiv_act7:index==6,leftdiv_act8:index==7}">
                      </div>
                      <div class="infodiv">
                        <p class="title">
                          {{activity.Name}}
                        </p>
                        <p>
                          参与： 所有认证会员
                        </p>
                        <p>
                          时间：{{DateFormat(activity.StartDate,'yyyy-MM-dd')}}至{{DateFormat(activity.EndDate,'yyyy-MM-dd')}}
                        </p>
                      </div>
                      <div class="rightdiv">
                        <img src="../assets/images/activity/act_1.png" alt="">
                      </div>
                    </div>
                    <div class="line">
                    </div>
                    <div class="gb_ico" @click="foldDivEvent(index)">
                      <img src="../assets/images/activity/up.png">
                    </div>
                  </div>
                  <div class="bgcon" v-html="activity.Remark" v-show="index===showIndex && isShow">
                  </div>
                </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="hddiv">
            <ul>
              <li v-for="(activity,index) in activityList">
                  <div class="bg">
                    <div>
                      <div class="leftdiv">
                        <img src="../assets/images/activity/act1.jpg" alt="" class="hdpic">
                      </div>
                      <div class="infodiv">
                        <p class="title">
                          {{activity.Name}}
                        </p>
                        <p>
                          参与： 所有认证会员
                        </p>
                        <p>
                          时间：{{DateFormat(activity.StartDate,'yyyy-MM-dd')}}至{{DateFormat(activity.EndDate,'yyyy-MM-dd')}}
                        </p>
                      </div>
                    </div>
                    <div class="line">
                    </div>
                    <div class="gb_ico" @click="foldDivEvent(index)">
                      <img src="../assets/images/activity/up.png">
                    </div>
                  </div>
                  <div class="bgcon" v-html="activity.Remark" v-show="index===showIndex && isShow">
                  </div>
                </li>
            </ul>
          </div>         
        </mt-tab-container-item>
      </mt-tab-container>  
    </div>
    <FootNav></FootNav>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import FootNav from '../components/footNav'
import HeadNav from '../components/topNav'
import {HTTP_URL_API} from '../data/api'
import {Indicator} from 'mint-ui'
import {httpGet,dateFormat} from '../data/util'
export default{
data(){
    return {
        selected:'1',
        activityList:[],
        showIndex:-1,
        isShow:false,
        showText:'展开'
    }
},    
created () {
    this.setTitle()
},  
mounted(){
    this.tabSelectEvent('1')
},    
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE('最新活动')
        this.SHOW_BACK_BUT(true)
    },
    tabSelectEvent(__tabs){
      this.showIndex=-1
      this.isShow=false
      this.selected=__tabs
        let actity={
          t:__tabs
        }
        Indicator.open('加载中...')
        httpGet(HTTP_URL_API.GAME_ACTIVITY,actity).then((res)=>{
            if(res){
              Indicator.close()
              this.activityList=res.data
            }
        })
    },
    DateFormat(val,format){
      return dateFormat(val,format)
    },
    foldDivEvent(__index){
      let show=this.isShow,index=this.showIndex
      this.showIndex=__index
      this.isShow=!show
    }
  },
  components: {HeadNav,FootNav}
}
</script>
<style scoped>
.mint-navbar{background-color:#f0f2f5 !important;margin-bottom:3px;}
.mint-tab-item-label-top{color:#aaa !important;}
.mint-navbar .mint-tab-item{padding:10px !important;background-color: #f0f2f5;}
.mint-navbar .mint-tab-item.is-selected{border-bottom: 3px solid #d74467 !important;background-color: #d9d9d9;color:#d74467 !important;}
.hddiv ul{padding:0;width:98%;margin:0 auto}
.hddiv ul li{width:100%;float:left;height:36%;margin:2px;list-style:none}
.hddiv ul li .bg{border:1px solid #aeaeae;border-radius:5px;background-color:#FFF;height:16%;padding:0;float:left;width:98%}
.hddiv ul li .bg .leftdiv{width:33%;float:left;text-align:center;margin:1% 0 1% 0.1%;height:60px;}
.hddiv ul li .bg .leftdiv_act1{background-image:url(../assets/images/activity/act1.jpg);background-repeat:no-repeat;background-size:110px 60px;}
.hddiv ul li .bg .leftdiv_act2{background-image:url(../assets/images/activity/act2.jpg);background-repeat:no-repeat;background-size:110px 60px;}
.hddiv ul li .bg .leftdiv_act3{background-image:url(../assets/images/activity/act3.jpg);background-repeat:no-repeat;background-size:110px 60px;}
.hddiv ul li .bg .leftdiv_act4{background-image:url(../assets/images/activity/act4.jpg);background-repeat:no-repeat;background-size:110px 60px;}
.hddiv ul li .bg .leftdiv_act5{background-image:url(../assets/images/activity/act5.jpg);background-repeat:no-repeat;background-size:110px 60px;}
.hddiv ul li .bg .leftdiv_act6{background-image:url(../assets/images/activity/act6.jpg);background-repeat:no-repeat;background-size:110px 60px;}
.hddiv ul li .bg .leftdiv_act7{background-image:url(../assets/images/activity/act7.jpg);background-repeat:no-repeat;background-size:110px 60px;}
.hddiv ul li .bg .leftdiv_act8{background-image:url(../assets/images/activity/act8.jpg);background-repeat:no-repeat;background-size:110px 60px;}
.hddiv ul li .bg .hdpic{width:96%}
.hddiv ul li .bg .infodiv{width:50%;float:left}
.hddiv ul li .bg .infodiv p.title{font-size:.85rem;padding-top:0%}
.hddiv ul li .bg .infodiv p{padding:2.5% 0 0 0;margin:0;font-size:.6rem}
.hddiv ul li .bg .rightdiv{float:right;padding:0;margin:0;width:15%}
.hddiv ul li .bg .rightdiv img{width:100%}
.hddiv ul li .bg .line{border-bottom:1px dashed #c4c4c4;height:1px;width:100%;float:left}
.hddiv ul li .bg .gb_ico{clear:both;text-align:center;padding:0;margin:0;padding-top:2%;padding-bottom:2%}
.hddiv ul li .bgcon{border:1px solid #aeaeae;border-radius:5px;background-color:#FFF;height:auto;padding:0.5%;margin-top:1%;float:left;width:97%;font-size:.75rem;}
</style>