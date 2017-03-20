<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
<div class="menudiv2">
	<ul>
		<li>
			<a href="/m/bj16/">
				<span class="on">
					首页
				</span>
			</a>
		</li>
		<li>
			<a href="/m/bj16/betrecord/">
				<span class="">
					记录
				</span>
			</a>
		</li>
		<li>
			<a href="/m/bj16/model">
				<span class="">
					模式
				</span>
			</a>
		</li>
		<li>
			<a href="/m/bj16/helper/">
				<span class="">
					规则
				</span>
			</a>
		</li>
		<li>
			<a href="/m/bj16/Statistics/">
				<span class="">
					统计
				</span>
			</a>
		</li>
		<li>
			<a href="/m/bj16/Trend/">
				<span class="">
					走势
				</span>
			</a>
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
				<tr>
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
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813324
						</span>
						<br>
						<span class="kjtime">
							03-20 11:10
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
						<span id="scur_813324">
							<a href="javascript:void(0)" onclick="toPress(813324)">
								<img src="../../assets/images/game/tz.png" width="90%">
							</a>
						</span>
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813323
						</span>
						<br>
						<span class="kjtime">
							03-20 11:05
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
						<span id="scur_813323">
							<a href="javascript:void(0)" onclick="toPress(813323)">
								<img src="../../assets/images/game/tz.png" width="90%">
							</a>
						</span>
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813322
						</span>
						<br>
						<span class="kjtime">
							03-20 11:00
						</span>
					</td>
					<td>
					</td>
					<td align="right" class="rpad">
						4,819,618,414
						<br>
						<span class="zjrnum">
							0
						</span>
						/
						<span class="tznum">
							174
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<span id="scur_813322">
							<a href="javascript:void(0)" onclick="toPress(813322)">
								<img src="../../assets/images/game/tz.png" width="90%">
							</a>
						</span>
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813321
						</span>
						<br>
						<span class="kjtime">
							03-20 10:55
						</span>
					</td>
					<td>
						<span class="kj_l">
							3+4+3=
						</span>
						<span class="kj_r">
							10
						</span>
					</td>
					<td align="right" class="rpad">
						4,819,094,303
						<br>
						<span class="zjrnum">
							160
						</span>
						/
						<span class="tznum">
							168
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813320
						</span>
						<br>
						<span class="kjtime">
							03-20 10:50
						</span>
					</td>
					<td>
						<span class="kj_l">
							5+2+2=
						</span>
						<span class="kj_r">
							9
						</span>
					</td>
					<td align="right" class="rpad">
						4,813,007,376
						<br>
						<span class="zjrnum">
							164
						</span>
						/
						<span class="tznum">
							168
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813319
						</span>
						<br>
						<span class="kjtime">
							03-20 10:45
						</span>
					</td>
					<td>
						<span class="kj_l">
							4+5+1=
						</span>
						<span class="kj_r">
							10
						</span>
					</td>
					<td align="right" class="rpad">
						4,815,056,279
						<br>
						<span class="zjrnum">
							164
						</span>
						/
						<span class="tznum">
							178
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813318
						</span>
						<br>
						<span class="kjtime">
							03-20 10:40
						</span>
					</td>
					<td>
						<span class="kj_l">
							2+1+1=
						</span>
						<span class="kj_r">
							4
						</span>
					</td>
					<td align="right" class="rpad">
						4,814,322,570
						<br>
						<span class="zjrnum">
							149
						</span>
						/
						<span class="tznum">
							169
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813317
						</span>
						<br>
						<span class="kjtime">
							03-20 10:35
						</span>
					</td>
					<td>
						<span class="kj_l">
							5+6+1=
						</span>
						<span class="kj_r">
							12
						</span>
					</td>
					<td align="right" class="rpad">
						4,808,714,353
						<br>
						<span class="zjrnum">
							152
						</span>
						/
						<span class="tznum">
							168
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813316
						</span>
						<br>
						<span class="kjtime">
							03-20 10:30
						</span>
					</td>
					<td>
						<span class="kj_l">
							1+4+6=
						</span>
						<span class="kj_r">
							11
						</span>
					</td>
					<td align="right" class="rpad">
						4,814,417,417
						<br>
						<span class="zjrnum">
							165
						</span>
						/
						<span class="tznum">
							172
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813315
						</span>
						<br>
						<span class="kjtime">
							03-20 10:25
						</span>
					</td>
					<td>
						<span class="kj_l">
							6+4+2=
						</span>
						<span class="kj_r">
							12
						</span>
					</td>
					<td align="right" class="rpad">
						4,815,993,515
						<br>
						<span class="zjrnum">
							156
						</span>
						/
						<span class="tznum">
							171
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813314
						</span>
						<br>
						<span class="kjtime">
							03-20 10:20
						</span>
					</td>
					<td>
						<span class="kj_l">
							4+5+1=
						</span>
						<span class="kj_r">
							10
						</span>
					</td>
					<td align="right" class="rpad">
						4,813,349,085
						<br>
						<span class="zjrnum">
							145
						</span>
						/
						<span class="tznum">
							164
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813313
						</span>
						<br>
						<span class="kjtime">
							03-20 10:15
						</span>
					</td>
					<td>
						<span class="kj_l">
							4+4+5=
						</span>
						<span class="kj_r">
							13
						</span>
					</td>
					<td align="right" class="rpad">
						4,815,845,453
						<br>
						<span class="zjrnum">
							154
						</span>
						/
						<span class="tznum">
							169
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813312
						</span>
						<br>
						<span class="kjtime">
							03-20 10:10
						</span>
					</td>
					<td>
						<span class="kj_l">
							2+5+3=
						</span>
						<span class="kj_r">
							10
						</span>
					</td>
					<td align="right" class="rpad">
						4,813,668,842
						<br>
						<span class="zjrnum">
							167
						</span>
						/
						<span class="tznum">
							173
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813311
						</span>
						<br>
						<span class="kjtime">
							03-20 10:05
						</span>
					</td>
					<td>
						<span class="kj_l">
							4+6+2=
						</span>
						<span class="kj_r">
							12
						</span>
					</td>
					<td align="right" class="rpad">
						4,819,656,012
						<br>
						<span class="zjrnum">
							144
						</span>
						/
						<span class="tznum">
							161
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813310
						</span>
						<br>
						<span class="kjtime">
							03-20 10:00
						</span>
					</td>
					<td>
						<span class="kj_l">
							2+2+3=
						</span>
						<span class="kj_r">
							7
						</span>
					</td>
					<td align="right" class="rpad">
						4,811,727,579
						<br>
						<span class="zjrnum">
							153
						</span>
						/
						<span class="tznum">
							162
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813309
						</span>
						<br>
						<span class="kjtime">
							03-20 09:55
						</span>
					</td>
					<td>
						<span class="kj_l">
							4+2+3=
						</span>
						<span class="kj_r">
							9
						</span>
					</td>
					<td align="right" class="rpad">
						4,819,525,198
						<br>
						<span class="zjrnum">
							164
						</span>
						/
						<span class="tznum">
							168
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813308
						</span>
						<br>
						<span class="kjtime">
							03-20 09:50
						</span>
					</td>
					<td>
						<span class="kj_l">
							3+2+4=
						</span>
						<span class="kj_r">
							9
						</span>
					</td>
					<td align="right" class="rpad">
						4,810,186,910
						<br>
						<span class="zjrnum">
							158
						</span>
						/
						<span class="tznum">
							170
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813307
						</span>
						<br>
						<span class="kjtime">
							03-20 09:45
						</span>
					</td>
					<td>
						<span class="kj_l">
							5+5+4=
						</span>
						<span class="kj_r">
							14
						</span>
					</td>
					<td align="right" class="rpad">
						4,815,387,176
						<br>
						<span class="zjrnum">
							153
						</span>
						/
						<span class="tznum">
							160
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
				<tr>
					<td style="border-left:1px solid #ccc">
						<span class="qihao">
							813306
						</span>
						<br>
						<span class="kjtime">
							03-20 09:40
						</span>
					</td>
					<td>
						<span class="kj_l">
							1+5+2=
						</span>
						<span class="kj_r">
							8
						</span>
					</td>
					<td align="right" class="rpad">
						4,813,725,893
						<br>
						<span class="zjrnum">
							150
						</span>
						/
						<span class="tznum">
							166
						</span>
					</td>
					<td align="right" class="rpad">
					</td>
					<td>
						<img src="../../assets/images/game/js.png" width="90%">
					</td>
				</tr>
			</tbody>
		</table>
		<div class="pagetable">
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
import{toThousands} from '../../data/util'
export default{
created () {
    this.setTitle()
  },     
computed: mapState({
    userInfo: state => state.userInfo
  }),  
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE(this.$route.params['text'])
        this.SHOW_BACK_BUT(true)
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
.table{float:left;width:100%;padding:0}
.bordered{background:#FFF;color:#555555;font-size:.6rem;}
table th{background:#e93f40;color:#FFF}
table td{border:1px solid #ccc;border-top:none;border-left:none}
.pagetable{font-family:"Microsoft Yahei",Georgia,"Times New Roman",Times,serif;margin-top:2%;margin-bottom:2%;text-align:center}
.Paging{font-size:.75rem;margin:0;padding:0;vertical-align:middle;width:100%}
.preimg{padding-right:5px}
.pageindex{border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;text-align:center;width:23px;height:23px;display:inline-block;margin:0;padding:0;color:#FFF;background-image:-moz-linear-gradient(top,#64b7c5,#52a5b5);background-image:-webkit-gradient(linear,left top,left bottom,from(#64b7c5),to(#52a5b5));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#64b7c5,endColorstr=#52a5b5);-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#64b7c5,endColorstr=#52a5b5)";-moz-box-shadow:1px 1px 1px #012126 inset;-webkit-box-shadow:1px 1px 1px #012126 inset;box-shadow:1px 1px 1px #012126 inset}
.Paging img{vertical-align:bottom;width:23%}
.pagenum{color:#333333;background-image:-moz-linear-gradient(top,#fff,#eaeaea);background-image:-webkit-gradient(linear,left top,left bottom,from(#fff),to(#eaeaea));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#fff,endColorstr=#eaeaea);-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#fff,endColorstr=#eaeaea)";border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;text-align:center;width:22px;height:22px;display:inline-block;margin:0;padding:0;-webkit-box-shadow:1px 1px 1px rgba(0,0,0,0.5);-moz-box-shadow:1px 1px 1px rgba(0,0,0,0.5);box-shadow:1px 1px 1px rgba(0,0,0,0.5);filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=3,OffY=3,Color='gray');-ms-filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=3,OffY=3,Color='gray')"}
</style>