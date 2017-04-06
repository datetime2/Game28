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
                <span class="on">
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
        <div class="statdiv">
        <transition name="fade">
            <table class="table_list" width="100%">
              <tbody>
                <tr>
                  <th width="20%">
                    游戏名称
                  </th>
                  <th width="20%" v-for="thead in staticList.TableThead">
                    {{thead}}
                  </th>
                </tr>
                <tr v-for="tbody in staticList.TableTbody">
                  <td>
                    {{tbody.GameName}}
                  </td>
                  <td v-for="amout in tbody.Amount">
                    {{Thousands(amout)}}
                  </td>
                </tr>
                <tr>
                  <td style="background:#efefef;">
                    <strong style="color:#ff7f00;">
                      总数
                    </strong>
                  </td>
                  <td style="background: #efefef;" v-for="foot in staticList.TableTfooter">
                    <strong style="color: #ff7f00;">
                      {{Thousands(foot)}}
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
            </transition>
        </div>        
    </div>
    <FootNav></FootNav>
  </div>
</template>
<script>
import { mapMutations,mapState } from 'vuex'
import FootNav from '../../components/footNav'
import HeadNav from '../../components/topNav'
import {HTTP_URL_API} from '../../data/api'
import {httpPost,createSign,toThousands} from '../../data/util'
import { Toast,Indicator} from 'mint-ui'
export default{
data(){
  return{
    staticList:[],
    type:this.$route.params['type']
  }
},  
created () {
    this.setTitle()
  },     
computed: mapState({
    userInfo: state => state.userInfo,
	  title:state=>state.title
  }),   
mounted(){
	this.getStatics()
},    
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE(this.$route.params['text'])
        this.SHOW_BACK_BUT(true)
    },
    getStatics(){
       let data={
            ticket:this.userInfo.ticket,
            userid:this.userInfo.userId,
            days:3
        }
        let sign=createSign(data)
        Indicator.open()
        httpPost(HTTP_URL_API.GAME_STATICS,sign).then((res)=>{
            Indicator.close()
            if(res && res.data.code==0){
                this.staticList=res.data.data
            }
            else 
                Toast(res.data.errors)
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
.menudiv2{float:left;width:100%;background:#4F1511}
.menudiv2 ul{margin:3% 0 7% 1%;padding:0 0 2% 1%}
.menudiv2 li{float:left;margin-right:1%;background-image:url(../../assets/images/game/btn_topyellow.png);background-position:center;background-repeat:no-repeat;padding:.2rem .3rem;border-radius:5px;line-height:140%;height:140%;margin-bottom:2%;list-style:none}
.menudiv2 li a{color:#4F1511;font-size:.85rem}
.menudiv2 .on{color:#ff0000}
.statdiv{width:100%;margin:1% 0 0 0;padding:0;float:left;font-family:黑体}
.statdiv table{width:100%;font-size:.75rem;border-spacing: 0;}
.statdiv .table_list th,.recorddiv .table_list th{background:url(../../assets/images/game/thbg.png) repeat-x;height:300%;line-height:300%;text-align:center;color:#333333;border-bottom:1px solid #d1d1d1}
.statdiv .table_list td,.recorddiv .table_list td{height:200%;line-height:160%;background:#fff none repeat scroll 0 0;color:#000;border-right:1px solid #d1d1d1;border-bottom:1px solid #d1d1d1}
table td{border:1px solid #ccc;border-top:none;border-left:none;text-align: center;}
</style>