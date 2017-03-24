<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
        <div class="menudiv2">
          <ul>
            <li>
              <router-link :to="{name:'detail',params:{type:type,text:title}}">
                <span class="on">
                  首页
                </span>
              </router-link>
            </li>
            <li>
          <router-link :to="{name:'record',params:{type:type,text:title}}">
                <span class="">
                  记录
                </span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'model',params:{title:title}}">
                <span class="">
                  模式
                </span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'helper',params:{title:title}}">
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
        <div class="moddiv">
            <div class="content">
                <div class="menu">
                    <ul>
                        <li style="width: 100%">
                            <div>
                                <button class="tzms" @click="useModelEvent(2)">单</button>
                                <button class="tzms" @click="useModelEvent(1)">双</button>
                                <button class="tzms" @click="useModelEvent(4)">大</button>
                                <button class="tzms" @click="useModelEvent(3)">小</button>
                                <button class="tzms" @click="useModelEvent(5)">中</button>
                                <button class="tzms" @click="useModelEvent(6)">边</button>
                            </div>
                            <div>
                            </div>
                        </li>
                        <li style="width: 100%">
                            <div>
                                <button class="tzms" @click="chgAllRateEvent(0.5)">0.5倍</button>
                                <button class="tzms" @click="chgAllRateEvent(1.5)">1.5倍</button>
                                <button class="tzms" @click="chgAllRateEvent(2)">2倍</button>
                                <button class="tzms" @click="chgAllRateEvent(5)">5倍</button>
                                <button class="tzms" @click="chgAllRateEvent(10)">10倍</button>
                                <button class="tzms" @click="chgAllRateEvent(100)">100倍</button>
                            </div>
                        </li>
                        <li style="width: 100%">
                            <div>
                                <button class="tzms ora" @click="useModelEvent(0)">全包</button>
                                <button class="tzms ora" @click="useSuohaEvent()">梭哈</button>
                                <button class="tzms ora" @click="unSelectEvent()">反选</button>
                                <button class="tzms ora" @click="initSelectEvent()">清除</button>
                                <button class="tzms ora" @click="getNearTermEvent('1006',813909)">上期</button>
                                <button class="tzms morebtn">模式</button>
                            </div>
                        </li>
                        <li style="width: 100%">
                            <div>
                                <button class="chips" title="" href="javascript:chips(10000)">10</button>
                                <button class="chips" title="" href="javascript:chips(100000)">100</button>
                                <button class="chips" title="" href="javascript:chips(300000)">300</button>
                                <button class="chips" title="" href="javascript:chips(1000000)">1000</button>
                                <div class="self">
                                    <div class="self1">
                                        <input type="text" id="betsLeft" class="avinput">
                                    </div>
                                    <div class="self2">
                                        <button @click="useBetAllEvent()">&nbsp;定额梭哈&nbsp;</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="betscontentdiv">
            <table class="bordered">
                <tbody>
                    <tr id="ball_0">
                        <th width="17%">号码</th>
                        <th width="28%" style="color: #eaff01;" colspan="2">标准赔率</th>
                        <th width="30%">投注</th>
                        <th width="25%">倍数</th>
                    </tr>
                    <tr v-for="(rate,index) in rateList">
                        <td align="center" style="border-left: 1px solid #ccc"><span class="num_1">{{rate.Num}}</span></td>
                        <td>{{rate.Odds}}</td>
                        <td><input type="checkbox" @click="chgRateCheckEvent(index)" class="chkRate" v-model="checkboxArray[index]"/></td>
                        <td><input type="number" @blur="chgRateInputEvent(index)" v-model="inputArray[index]"/>
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent(index,0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent(index,2)" class="multiple">2</button>
                            <button @click="chgRateEvent(index,10)" class="multiple">10</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>
<script>
import { mapMutations,mapState } from 'vuex'
import HeadNav from '../../components/topNav'
import{Toast} from 'mint-ui'
import{HTTP_URL_API} from '../../data/api'
import {DEFAULT_BET_NUMBER} from '../../data'
import {httpPost,createSign} from '../../data/util'
export default{
data(){
    return {
        title:this.$route.params['text'],
        type:this.$route.params['type'],
        code:this.$route.params['code'],
        rateList:[],
        betTotalAmount:0,//投注总额
        checkboxArray:[],
        inputArray:[]
    }
},    
created () {
    this.setTitle()
  },
mounted(){
	this.getGameRate()			
},  
computed: mapState({
    userInfo: state => state.userInfo
  }), 
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE(this.title)
        this.SHOW_BACK_BUT(true)
    },
    initSelectEvent(){
        let tmpChkArray=[],tmpIptArray=[]
        this.checkboxArray.forEach((obj)=>{
            tmpChkArray.push(false)
            tmpIptArray.push('')
        })
        this.checkboxArray=tmpChkArray
        this.inputArray=tmpIptArray
    },//清除
    useSuohaEvent(){

    },//不超最大投注额梭哈
    useModelEvent(__model){
        let tmpChkArray=[],tmpIptArray=[]
        switch(__model){
            case 0://全包
                this.checkboxArray.forEach((obj)=>{
                    tmpChkArray.push(true)
                })
                DEFAULT_BET_NUMBER[this.code].split(',').forEach((item)=>{
                    tmpIptArray.push(item)
                })
                this.checkboxArray=tmpChkArray
                this.inputArray=tmpIptArray
            break;
            case 1://双

            break;
            case 2://单
                
            break;            
        }
    },//按钮选择
    chgRateEvent(__index,__rate){
        
    },//加倍(单个)
    chgAllRateEvent(__rate){
        Toast('MLGB 让开 我要全部加倍了')
    },//加倍(全部)
    chgRateCheckEvent(__index){

    },//手动选择框修改
    chgRateInputEvent(__index){

    },//手动输入框修改
    useBetAllEvent(){

    },//梭哈
    unSelectEvent(){

    },//反选
    getGameRate(){
        let rate={
            c:this.code,
            lang:'cn',
            ticket:this.userInfo.ticket,
            userid:this.userInfo.userId
        }
        httpPost(HTTP_URL_API.GAME_BETRATE,createSign(rate)).then((res)=>{
            if(res){
                this.rateList=res.data.data
                res.data.data.forEach((e)=>{
                    this.checkboxArray.push(false)
                    this.inputArray.push('')
                })
            }
        })
    },//获取游戏固定赔率
    submitBet(){

    },//确认投注
    getNearTermEvent(){

    }//获取上一期投注信息
  },
  components: {HeadNav}
}
</script>
<style scoped>
.menudiv2{float:left;width:100%;background:#4F1511}
.menudiv2 ul{margin:3% 0 7% 1%;padding:0 0 2% 1%}
.menudiv2 li{float:left;margin-right:1%;background-image:url(../../assets/images/game/btn_topyellow.png);background-position:center;background-repeat:no-repeat;padding:.2rem .3rem;border-radius:5px;line-height:140%;height:140%;margin-bottom:2%;list-style:none}
.menudiv2 li a{color:#4F1511;font-size:.85rem}
.menudiv2 .on{color:#ff0000}
.recorddiv{width:100%;margin:1% 0 0 0;padding:0;float:left;font-size:.75rem;font-family:黑体}
.recorddiv table{width:100%;border-spacing:0}
.recorddiv table th,.recorddiv table th{background:url(../../assets/images/game/thbg.png) repeat-x;height:300%;line-height:300%;text-align:center;color:#333333;border-bottom:1px solid #d1d1d1}
.recorddiv table td,.recorddiv table td{height:200%;line-height:160%;background:#fff none repeat scroll 0 0;color:#000;border-right:1px solid #d1d1d1;border-bottom:1px solid #d1d1d1}
.moddiv{width:99%;float:left;margin:0 0 0 0.5%;padding:0%}
.binfodiv .content,.moddiv .content{background:#FFF;margin-top:0.5%;color:#777777}
.binfodiv .content,.moddiv .content{background:#FFF;margin-top:0.5%;color:#777777}
.moddiv ul{margin:2% 0 1.5% 2%;padding:0 0 5% 0}
.moddiv ul li{float:left;padding-bottom:0.5%;list-style:none}
.moddiv ul li a{cursor:pointer}
.tzms{margin:1% 1.5% 1% 0;border:1px solid #a3a3a3;font-size:.75rem;line-height:1.5rem;height:1.5rem;width:14%;float:left;text-align:center;background-image:-moz-linear-gradient(top,#FDFDFE,#F2F4F6);background-image:-webkit-gradient(linear,left top,left bottom,from(#FDFDFE),to(#F2F4F6));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#FDFDFE,endColorstr=#F2F4F6);-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#FDFDFE,endColorstr=#F2F4F6)";-webkit-box-shadow:1px 1px 1px rgba(0,0,0,0.2);-moz-box-shadow:1px 1px 1px rgba(0,0,0,0.2);box-shadow:1px 1px 1px rgba(0,0,0,0.2)}
.chips{margin:1% 1% 1% 0;border:1px solid #ccc;font-size:.75rem;line-height:1.5rem;height:1.5rem;width:11%;float:left;text-align:center;background-image:-moz-linear-gradient(top,#FDFDFE,#F2F4F6);background-image:-webkit-gradient(linear,left top,left bottom,from(#FDFDFE),to(#F2F4F6));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#FDFDFE,endColorstr=#F2F4F6);-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#FDFDFE,endColorstr=#F2F4F6)";-webkit-box-shadow:1px 1px 1px rgba(0,0,0,0.2);-moz-box-shadow:1px 1px 1px rgba(0,0,0,0.2);box-shadow:1px 1px 1px rgba(0,0,0,0.2)}
.self{margin:1% 0;border:1px solid #ccc;color:#8b5100;float:left;line-height:150%;height:150%;padding:0px;width:43%}
.self1{width:50%;float:left}
.avinput{border:medium none;color:#f00;line-height:150%;height:150%;width:100%;padding-left:1%}
.self2{float:right}
.betscontentdiv{float:left;margin:0 0 0 0.5%;padding:0;width:99%;font-size:.9rem}
.betscontentdiv table th{background:#e93f40;color:#FFF}
.bordered{background:#FFF}
.betscontentdiv table td input{background:#fff none repeat scroll 0 0;border:1px solid #ccc;color:#f00;height:auto;text-align:left;width:80%}
.bs a{background:#eee none repeat scroll 0 0;border:1px solid #d7d7d7;border-radius:1px;color:#555;padding:1%;width:24%;margin-left:2%;line-height:100%;float:left}
.num_1{background:#e64047 none repeat scroll 0 0;border-radius:50%;color:#fff;display:block;font-weight:bold;text-align:center;width:20px;height:20px}
.chkRate{width:1.2rem !important;height:1.2rem !important;}
</style>