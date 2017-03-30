<template>
<div>
	<HeadNav>
	</HeadNav>
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
		<div class="maincontent">
			<div class="rl">
				<div class="div_1">
					<div class="head_div">
						<img src="../../assets/images/game/head.png" width="100%">
					</div>
					<div class="info_div">
						<p>
							{{userInfo.nickName?userInfo.nickName:userInfo.userName}}
						</p>
						<p>
							金豆:
							<span style="color:#ffe400">
								{{Thousands(userInfo.amount)}}
							</span>
						</p>
					</div>
					<div class="info_div">
						<p>
							账号:
							<span style="color:#a1bccc">
								{{userInfo.userName}}
							</span>
						</p>
						<p>
							银行:
							<span style="color:#ffe400">
								{{Thousands(userInfo.bankAmount)}}
							</span>
						</p>
					</div>
				</div>
				<div class="div_2">
					<ul>
						<li>今日｜盈亏:<i>{{Thousands(userBet.Shares)}}</i>,参与:<i>{{userBet.Periods}}</i>,胜率:<i>{{userBet.Rate}}%</i></li>
					</ul>
				</div>
				<div class="div_3">
					<ul>
						<li id="liTimer" v-html="currentGameTimer"></li>
					</ul>
				</div>
			</div>
			<div class="table">
				<table class="bordered">
					<tbody>
						<tr>
							<th width="20%">
								期号
							</th>
							<th width="25%" style="color:#eaff01">
								开奖结果
							</th>
							<th width="20%">
								金豆总数/
								<br>
								中奖人数
							</th>
							<th width="20%">
								中奖额/
								<br>
								投注额
							</th>
							<th width="15%">
								投注
							</th>
						</tr>
					</tbody>
					<tbody>
						<tr v-for="game in gameList" v-if="gameList">
							<td style="border-left:1px solid #ccc">
								<span class="qihao">
									{{game.TermNo}}
								</span>
								<br>
								<span class="kjtime">
									{{Moment(game.LotteryTime,'MM-DD HH:mm:ss')}}
								</span>
							</td>
							<td class="td-result" v-html="game.ResultTd">
							</td>
							<td align="right" class="rpad">
									{{game.SystemBetTotal}}
								<br/>
								<span class="zjrnum">
									{{game.WinNumber}}
								</span>
								/
								<span class="tznum">
									{{game.BetNumber}}
								</span>
							</td>
							<td align="right" class="rpad" v-html="game.AmountTd">
							</td>
							<td>
							 <span :id="game.TermNo">
								<img src="../../assets/images/game/js.png" width="90%" v-if="game.Lottery==0">
								<img src="../../assets/images/game/kj.png" width="90%" v-else-if="game.Lottery==1">
								<a @click="toBet(game.TermNo)" v-else><img src="../../assets/images/game/tz.png" width="90%"></a>
							  </span>
							</td>
						</tr>
						<tr v-else>
							<td colspan="5">
								暂无数据
							</td>
						</tr>
					</tbody>
				</table>
				<div class="pagetable" v-show="!gameList">
					<div class="Paging">
						<span class="preimg">
							<img src="../../assets/images/game/prebtn.png">
						</span>
						<span id="currentpage" class="pageindex">
							1
						</span>
						&nbsp;
						<a class="pagenum" href="javascript:ajax_page(2)">
							2
						</a>
						&nbsp;
						<a class="pagenum" href="javascript:ajax_page(3)">
							3
						</a>
						&nbsp;
						<a href="javascript:ajax_page(2)">
							<img src="../../assets/images/game/nextbtn.png">
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<FootNav>
	</FootNav>
</div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
import FootNav from '../../components/footNav'
import HeadNav from '../../components/topNav'
import{toThousands,httpPost,httpGet,createSign} from '../../data/util'
import{HTTP_URL_API} from '../../data/api'
import { Toast,Indicator,MessageBox} from 'mint-ui'
import moment from 'moment'
export default{
data(){
	return{
		type:this.$route.params['type'],
		code:this.$route.params['code'],
		text:this.$route.params['text'],
		gameList:[],
		currentGame:{},
		userBet:{},
		page:1,
		currentGameTimer:'第<i> 000000 </i>期 还有<em> 000 </em>秒停止下注!',
		autoRefushTimer:''
	}
},	
created () {
    this.setTitle()
  },     
computed: mapState({
    userInfo: state => state.userInfo,
	title:state=>state.title,
	globalTimer:state=>state.globalTimer
  }),
mounted(){
	this.getGameList(this.page)			
},   
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT','GLOBAL_TIMER','USER_CHANGE','USER_LOGOUT']),
    setTitle(){
        this.CHANGE_TITLE(this.text)
        this.SHOW_BACK_BUT(true)
    },
	Thousands(val){
		return toThousands(val)
	},
	Moment(date,format){
		return moment(date).format(format)
	},
	getGameList(__page){
		let data={
			c:this.code,
			t:this.type,
			userId:this.userInfo.userId,
			p:__page,
			s:20
		}
        Indicator.open('加载中...')
		httpGet(HTTP_URL_API.GAME_DATALIST,data)
		.then((res)=>{
			Indicator.close()
			if(res){
				this.gameList=res.data.Game.List
				this.userBet=res.data.Game.User
				this.currentGame=res.data.Game.Current
			}
		})		
		.then(()=>{
			let user={
				userid:this.userInfo.userId,
				ticket:this.userInfo.ticket,
				lang:'cn'
			}
			httpPost(HTTP_URL_API.USER_INFOMATION,createSign(user)).then((res)=>{
				if(res){
					if(res.data.code==0){
					let user ={
                            userName: res.data.data.LoginName,
                            nickName: res.data.data.NickName ? res.data.data.NickName : '',
                            userId: res.data.data.Id,
                            ticket: this.userInfo.ticket,
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
                    				name: 'login',
									query:{redirect:'/game/detail/'+this.type+'/'+this.code+'/'+this.text}
                				})
						}, 2000)
					}
				}
			})
		})
	},
	toBet(__termNum){
		this.$router.push({name:'betinfo',params:{
			code:this.code,
			type:this.type,
			text:this.$route.params['text'],
			termno:__termNum
		}})
	},
	setTimerRefush(){
		let mySelf=this
		let stopSec=parseInt(mySelf.currentGame.StopSec),
			lotterySec=parseInt(mySelf.currentGame.KjSec),
			currentTermNo=mySelf.currentGame.TermNo
		mySelf.autoRefushTimer=setTimeout(function(){
			if (lotterySec <= 0) {
                    if (lotterySec == -2) {
                        mySelf.currentGameTimer='Loading......'
                        // this.getGameList(1)
                    } else if (lotterySec < -2 && Math.abs(lotterySec) % 3 == 0) {
                        mySelf.currentGameTimer='Loading......'
                        // this.getGameList(1)
                    } else {
                        mySelf.currentGameTimer='第<i> ' + currentTermNo + ' </i>期 正在开奖,请稍后!'
                    }
                    lotterySec--
                } else {
                    if (stopSec == 0) {
						// var dom=document.getElementById(currentTermNo)
						// dom.innerHTML='<img src="../../assets/images/game/kj.png" width="90%"/>'
                    }
                    if (stopSec > 0) {
                        mySelf.currentGameTimer='第<i> ' + currentTermNo + ' </i>期 还有<em> ' + stopSec + ' </em>秒停止下注!'
                    } else {
                        mySelf.currentGameTimer='第<i> ' + currentTermNo + ' </i>期 停止下注，还有<em> ' + lotterySec + ' </em>秒开奖!'
                    }
                    lotterySec--
                    stopSec--
                }
			// mySelf.getGameList(1)
		},1000)
	},
	clearTimerRefush(){
		let mySelf=this
		clearTimeout(mySelf.autoRefushTimer);
	}
  },
  components: {HeadNav,FootNav}
}
</script>
<style>
.menudiv2{float:left;width:100%;background:#4F1511}
.menudiv2 ul{margin:3% 0 7% 1%;padding:0 0 2% 1%}
.menudiv2 li{float:left;margin-right:1%;background-image:url(../../assets/images/game/btn_topyellow.png);background-position:center;background-repeat:no-repeat;padding:.2rem .3rem;border-radius:5px;line-height:140%;height:140%;margin-bottom:2%;list-style:none}
.menudiv2 li a{color:#4F1511;font-size:.85rem}
.menudiv2 .on{color:#ff0000}
.rl{float:left;width:100%;height:100%;margin:0 0.5% 0 0;background-image:url(../../assets/images/game/top_backgroup.jpg);background-position:center;background-repeat:no-repeat;background-size: 100%, 100%;}
.div_1{position:relative;height:100%}
.head_div{width:15%;text-align:center;float:left;padding:1%}
.info_div{font-size:.8rem;font-family:黑体;float:left;height:90%;line-height:90%;color:#ffffff;width:40%}
.info_div p{height:20%}
.div_2,.div_3{clear:both}
.div_2 ul,.div_3 ul{padding:0 1% 0 1%;margin:2%;font-size:.7rem;color:#8998bf}
.div_2 ul li{height:10%;list-style:none;}
.div_3 ul li i,.div_2 ul li i,#liTimer i{font-size:.85rem;color:#e64047;padding:0 3px;font-style:normal}
.div_2 ul li,.div_3 ul li{float:left;list-style:none;}
.table{float:left;width:100%;padding:0;text-align: center;}
.bordered{background:#FFF;color:#555555;font-size:.6rem;border-spacing: 0;width:100%;}
table th{background:#e93f40;color:#FFF}
table td{border:1px solid #ccc;border-top:none;border-left:none}
.pagetable{font-family:"Microsoft Yahei",Georgia,"Times New Roman",Times,serif;margin-top:2%;margin-bottom:2%;text-align:center}
.qihao{font-size:.85rem;color:#f10808}
.Paging{font-size:.75rem;margin:0;padding:0;vertical-align:middle;width:100%}
.preimg{padding-right:5px}
.pageindex{border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;text-align:center;width:23px;height:23px;display:inline-block;margin:0;padding:0;color:#FFF;background-image:-moz-linear-gradient(top,#64b7c5,#52a5b5);background-image:-webkit-gradient(linear,left top,left bottom,from(#64b7c5),to(#52a5b5));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#64b7c5,endColorstr=#52a5b5);-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#64b7c5,endColorstr=#52a5b5)";-moz-box-shadow:1px 1px 1px #012126 inset;-webkit-box-shadow:1px 1px 1px #012126 inset;box-shadow:1px 1px 1px #012126 inset}
.Paging img{vertical-align:bottom;width:23%}
.pagenum{color:#333333;background-image:-moz-linear-gradient(top,#fff,#eaeaea);background-image:-webkit-gradient(linear,left top,left bottom,from(#fff),to(#eaeaea));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#fff,endColorstr=#eaeaea);-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#fff,endColorstr=#eaeaea)";border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;text-align:center;width:22px;height:22px;display:inline-block;margin:0;padding:0;-webkit-box-shadow:1px 1px 1px rgba(0,0,0,0.5);-moz-box-shadow:1px 1px 1px rgba(0,0,0,0.5);box-shadow:1px 1px 1px rgba(0,0,0,0.5);filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=3,OffY=3,Color='gray');-ms-filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=3,OffY=3,Color='gray')"}
.kj_r{background:#e64047 none repeat scroll 0 0;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;color:#fff;display:block;font-weight:bold;text-align:center;width:20px;margin-left:1%}
.kj_l{margin-left:8%}
.kj_l,.kj_r{float:left;height:20px;line-height:20px}
.zjrnum,.win1{color:#ff0000;font-size:.85rem}
.tznum,.lose1{color:#17bd4d;font-size:.75rem}
.ka0{background:#d40000 none repeat scroll 0 0}
.ka1{background:#29ae00 none repeat scroll 0 0}
.ka2{background:#0027ab none repeat scroll 0 0}
.ka3{background:#f65a00 none repeat scroll 0 0}
.ka4{background:#259be2 none repeat scroll 0 0}
</style>