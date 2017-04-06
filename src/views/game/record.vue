<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
        <div class="menudiv2">
          <ul>
            <li>
              <router-link :to="{name:'detail',params:{type:type,text:title}}">
                <span class="">
                  首页
                </span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'record',params:{type:type,text:title}}">
                <span class="on">
                  记录
                </span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'model',params:{type:type,text:title}}">
                <span class="">
                  模式
                </span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'helper',params:{type:type,text:title}}">
                <span class="">
                  规则
                </span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'statics',params:{title:title}}">
                <span class="">
                  统计
                </span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'trend',params:{title:title}}">
                <span class="">
                  走势
                </span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="recorddiv">
            <table width="100%">
                <tbody>
                    <tr>
                        <th width="17%">
                            期号
                        </th>
                        <th>
                            开奖结果
                        </th>
                        <th width="21%">
                            投注/获得
                        </th>
                        <th width="21%">
                            赢取
                        </th>
                        <th width="9%">
                            详情
                        </th>
                    </tr>
                    <tr v-for="record in recordList">
                      <td>{{record.TermNumber}}</td>
                      <td v-html="record.ResultTd"></td>
                      <td>{{Thousands(record.BetMoney)}}</td>
                      <td>{{Thousands(record.GetMoney)}}</td>
                      <td>
                        <router-link :to="{name:'record',params:{type:type,text:title}}">
                            详情
                        </router-link>
                      </td>
                    </tr>
                </tbody>
            </table>
            <div class="pagetable" v-show="total>1">
				      <pagination :current-page="page" :total-pages="total" @page-changed="getRecord"></pagination>
				    </div>
        </div>        
    </div>
    <FootNav></FootNav>
  </div>
</template>
<script>
import { mapMutations,mapState } from 'vuex'
import FootNav from '../../components/footNav'
import HeadNav from '../../components/topNav'
import pagination from '../../components/pagination'
import { TabContainer, TabContainerItem } from 'mint-ui'
import Util from '../../data/util'
import {HTTP_URL_API} from '../../data/api'
export default{
data(){
    return {
        title:this.$route.params['text'],
        type:this.$route.params['type'],
        page:1,
        total:1,
        recordList:[]
    }
},    
created () {
    this.setTitle()
  },   
computed: mapState({
    userInfo: state => state.userInfo
}), 
mounted(){
	this.getRecord(this.page)			
},   
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE(this.title)
        this.SHOW_BACK_BUT(true)
    },
    getRecord(__page){
      this.page=__page
      let data={
				userid:this.userInfo.userId,
				ticket:this.userInfo.ticket,
				lang:'cn',
        size:15,
        code:this.$route.params['code'],
        page:__page
			}
      Util.httpPost(HTTP_URL_API.GAME_BETRECORD,Util.createSign(data)).then((res)=>{
            if(res){
              this.recordList=res.data.data.List
              this.total=res.data.data.Total
            }
      })
    },
    Thousands(val){
		  return Util.toThousands(val)
	  }
  },
  components: {HeadNav,FootNav,pagination}
}
</script>
<style scoped>
.menudiv2{float:left;width:100%;background:#4F1511}
.menudiv2 ul{margin:3% 0 7% 1%;padding:0 0 2% 1%}
.menudiv2 li{float:left;margin-right:1%;background-image:url(../../assets/images/game/btn_topyellow.png);background-position:center;background-repeat:no-repeat;padding:.2rem .3rem;border-radius:5px;line-height:140%;height:140%;margin-bottom:2%;list-style:none}
.menudiv2 li a{color:#4F1511;font-size:.85rem}
.menudiv2 .on{color:#ff0000}
.recorddiv{width:100%;margin:1% 0 0 0;padding:0;float:left;font-size:.75rem;font-family:黑体}
.recorddiv table{width:100%;border-spacing: 0;}
.recorddiv table th,.recorddiv table th{background:url(../../assets/images/game/thbg.png) repeat-x;height:300%;line-height:300%;text-align:center;color:#333333;border-bottom:1px solid #d1d1d1}
.recorddiv table td,.recorddiv table td{height:200%;line-height:160%;background:#fff none repeat scroll 0 0;color:#000;border-right:1px solid #d1d1d1;border-bottom:1px solid #d1d1d1}
table td{border:1px solid #ccc;border-top:none;border-left:none;text-align: center;}
</style>