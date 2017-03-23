<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1" @click.native="tabSelectEvent('1')">今日盈利榜</mt-tab-item>
        <mt-tab-item id="2" @click.native="tabSelectEvent('2')">昨日盈利榜</mt-tab-item>
        <mt-tab-item id="3" @click.native="tabSelectEvent('3')">7日盈利榜</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="rankcontent" id="rankcontent1">
            <div class="title">
              <img src="../assets/images/rankings/t1.png">
              <span>
                实力之星:{{topUser}}
              </span>
            </div>
            <ul>
              <li v-for="(rank,index) in rankList" :class="{r1:index==0,r2:index==1,r3:index==2,r0:index!=0 && index !=1 && index!=2}">
                <div class="l">
                  <img src="../assets/images/rankings/r1.png" v-if="index==0">
                  <img src="../assets/images/rankings/r2.png" v-else-if="index==1">
                  <img src="../assets/images/rankings/r3.png" v-else-if="index==2">
                  <img src="../assets/images/rankings/r_bg.png" v-else>
                  <span v-if="index==0 || index==1 || index==2">TOP {{index+1}}</span>
                  <span class="pm" v-else>{{index+1}}</span>
                </div>
                <div class="m">
                  {{rank.NickName?rank.NickName:rank.UserName}}
                </div>
                <div class="r">
                  {{Thousands(rank.Amount)}}
                </div>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="rankcontent" id="rankcontent1">
            <div class="title">
              <img src="../assets/images/rankings/t2.png">
              <span>
                荣耀冠军:{{topUser}}
              </span>
            </div>
            <ul>
              <li v-for="(rank,index) in rankList" :class="{r1:index==0,r2:index==1,r3:index==2,r0:index!=0 && index !=1 && index!=2}">
                <div class="l">
                  <img src="../assets/images/rankings/r1.png" v-if="index==0">
                  <img src="../assets/images/rankings/r2.png" v-else-if="index==1">
                  <img src="../assets/images/rankings/r3.png" v-else-if="index==2">
                  <img src="../assets/images/rankings/r_bg.png" v-else>
                  <span v-if="index==0 || index==1 || index==2">TOP {{index+1}}</span>
                  <span class="pm" v-else>{{index+1}}</span>
                </div>
                <div class="m">
                  {{rank.NickName?rank.NickName:rank.UserName}}
                </div>
                <div class="r">
                  {{Thousands(rank.Amount)}}
                </div>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div class="rankcontent" id="rankcontent1">
            <div class="title">
              <img src="../assets/images/rankings/t3.png">
              <span>
                荣耀至尊:{{topUser}}
              </span>
            </div>
            <ul>
              <li v-for="(rank,index) in rankList" :class="{r1:index==0,r2:index==1,r3:index==2,r0:index!=0 && index !=1 && index!=2}">
                <div class="l">
                  <img src="../assets/images/rankings/r1.png" v-if="index==0">
                  <img src="../assets/images/rankings/r2.png" v-else-if="index==1">
                  <img src="../assets/images/rankings/r3.png" v-else-if="index==2">
                  <img src="../assets/images/rankings/r_bg.png" v-else>
                  <span v-if="index==0 || index==1 || index==2">TOP {{index+1}}</span>
                  <span class="pm" v-else>{{index+1}}</span>
                </div>
                <div class="m">
                  {{rank.NickName?rank.NickName:rank.UserName}}
                </div>
                <div class="r">
                  {{Thousands(rank.Amount)}}
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
import {httpGet,toThousands} from '../data/util'
import {HTTP_URL_API} from '../data/api'
import {Indicator} from 'mint-ui'
export default{
data(){
    return {
      selected:'1',
      rankList:[],
      topUser:''
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
        this.CHANGE_TITLE('牛人榜')
        this.SHOW_BACK_BUT(true)
    },
    tabSelectEvent(__tabs){
      this.selected=__tabs
      let rank={
        t:__tabs,
        p:1,
        s:30
      }
      Indicator.open('加载中...')
      httpGet(HTTP_URL_API.USER_RANKING,rank).then((res)=>{
          if(res){
            Indicator.close()
            this.rankList=res.data.Grid
            this.topUser=res.data.Grid[0].NickName?res.data.Grid[0].NickName:res.data.Grid[0].UserName
          }
      })
    },
    Thousands(val){
	    return toThousands(val)
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
.rankcontent .title{padding:1% 0% 1% 17%;background:#511a7d;color:#FFF;font-size:.85rem;float:left;width:83%}
.rankcontent ul{padding:0;margin:0}
.rankcontent ul li{padding-left:3%;color:#FFF;font-size:.75rem;font-family:黑体;font-style:italic;line-height:400%;height:400%;border-bottom:#cccccc 1px solid;list-style:none}
.rankcontent ul li.r1{background:#ff6666;}
.rankcontent ul li .l{float:left;width:25%}
.rankcontent ul li img{vertical-align:middle;width:50%;padding:0.5%}
.rankcontent ul li .m{width:45%;float:left;padding-left:0.8%;font-style:normal;text-align:left;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rankcontent ul li .r{font-style:normal;padding-right:1%;text-align:right}
.rankcontent .title img{vertical-align:middle;width:22%;padding:0.5% 0 0.5% 0}
.rankcontent ul li.r0 .m,.rankcontent ul li.r0 .r{color:#000}
.rankcontent ul li.r2{background:#ffba00}
.rankcontent ul li.r1{background:#ff6666}
.rankcontent ul li.r3{background:#04cabd}
.rankcontent ul li.r0 .pm{color:#fff;position:relative;left:-35%}
.rankcontent ul li span{display:inline-block}
</style>
