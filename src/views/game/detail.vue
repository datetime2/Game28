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
						<li>
							今日｜盈亏：
							<i>
								0
							</i>
							，参与：
							<i>
								0
							</i>
							，胜率：
							<i>
								0.0%
							</i>
						</li>
					</ul>
				</div>
				<div class="div_3">
					<ul>
						<li id="liTimer">
							第
							<i>
								813322
							</i>
							期 还有
							<em>
								190
							</em>
							秒停止下注!
						</li>
					</ul>
				</div>
			</div>
			<div class="table">
				<table class="bordered">
					<tbody>
						<tr>
							<th width="17%">
								期号
							</th>
							<th width="28%" style="color:#eaff01">
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
							<th width="15%" >
								投注
							</th>
						</tr>
					</tbody>
					<tbody>
						<tr v-for="game in gameList" v-show="!gameList">
							<td style="border-left:1px solid #ccc">
								<span class="qihao">
									813325
								</span>
								<br>
								<span class="kjtime">
									03-20 11:15
								</span>
							</td>
							<td>
							</td>
							<td align="right" class="rpad">
								0
								<br>
								<span class="zjrnum">
									0
								</span>
								/
								<span class="tznum">
									0
								</span>
							</td>
							<td align="right" class="rpad">
							</td>
							<td>
								<span id="scur_813325">
									<a href="javascript:void(0)" onclick="toPress(813325)">
										<img src="../../assets/images/game/tz.png" width="90%">
									</a>
								</span>
							</td>
						</tr>
						<tr>
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
    <FootNav></FootNav>
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
import FootNav from '../../components/footNav'
import HeadNav from '../../components/topNav'
import{toThousands,httpPost,httpGet,createSign} from '../../data/util'
import{HTTP_URL_API} from '../../data/api'
export default{
data(){
	return{
		type:this.$route.params['type'],
		gameList:[]
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
	this.getGameList()
},   
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE(this.$route.params['text'])
        this.SHOW_BACK_BUT(true)
    },
	Thousands(val){
		return toThousands(val)
	},
	getGameList(){

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
.rl{float:left;width:100%;height:100%;margin:0 0.5% 0 0;background-image:url(../../assets/images/game/top_backgroup.jpg);background-position:center;background-repeat:no-repeat;background-size: 100%, 100%;}
.div_1{position:relative;height:100%}
.head_div{width:15%;text-align:center;float:left;padding:1%}
.info_div{font-size:.85rem;font-family:黑体;float:left;height:90%;line-height:90%;color:#ffffff;width:40%}
.info_div p{height:20%}
.info_div{font-size:.85rem;font-family:黑体;float:left;height:90%;line-height:90%;color:#ffffff;width:40%}
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
.qihao{font-size:120%;color:#f10808}
.Paging{font-size:.75rem;margin:0;padding:0;vertical-align:middle;width:100%}
.preimg{padding-right:5px}
.pageindex{border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;text-align:center;width:23px;height:23px;display:inline-block;margin:0;padding:0;color:#FFF;background-image:-moz-linear-gradient(top,#64b7c5,#52a5b5);background-image:-webkit-gradient(linear,left top,left bottom,from(#64b7c5),to(#52a5b5));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#64b7c5,endColorstr=#52a5b5);-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#64b7c5,endColorstr=#52a5b5)";-moz-box-shadow:1px 1px 1px #012126 inset;-webkit-box-shadow:1px 1px 1px #012126 inset;box-shadow:1px 1px 1px #012126 inset}
.Paging img{vertical-align:bottom;width:23%}
.pagenum{color:#333333;background-image:-moz-linear-gradient(top,#fff,#eaeaea);background-image:-webkit-gradient(linear,left top,left bottom,from(#fff),to(#eaeaea));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#fff,endColorstr=#eaeaea);-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#fff,endColorstr=#eaeaea)";border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;text-align:center;width:22px;height:22px;display:inline-block;margin:0;padding:0;-webkit-box-shadow:1px 1px 1px rgba(0,0,0,0.5);-moz-box-shadow:1px 1px 1px rgba(0,0,0,0.5);box-shadow:1px 1px 1px rgba(0,0,0,0.5);filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=3,OffY=3,Color='gray');-ms-filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=3,OffY=3,Color='gray')"}
.kj_r{background:#e64047 none repeat scroll 0 0;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;color:#fff;display:block;font-weight:bold;text-align:center;width:20px;margin-left:1%}
.kj_l{margin-left:8%}
.kj_l,.kj_r{float:left;height:20px;line-height:20px}
</style>