<template>
<div>
	<HeadNav>
	</HeadNav>
	<div class="index-container" id="index-container">
	<UcHeader></UcHeader>
	<div class="memberinfodiv">
	<div class="title">
		<div class="title_content">
			<img src="../../assets/images/user/hytb.png" style="vertical-align:middle; width:7.5%; float:none">
			会员信息
			<div class="r">
				<router-link :to="{name:'information'}">
					完善个人信息 &gt;
				</router-link>
			</div>
		</div>
	</div>
	<div class="cl">
	</div>
	<div class="m_content">
		<ul>
			<li class="fl w20">
				<router-link :to="{name:'information'}">
					<img src="../../assets/images/user/hy_0.png">
					<p>
						我的资料
					</p>
				</router-link>
			</li>
			<li class="fl w20">
				<router-link :to="{name:'exchange'}">
					<img src="../../assets/images/user/ico_exchange.png">
					<p>
						兑换
					</p>
				</router-link>
			</li>
			<li class="fl w20">
				<router-link :to="{name:'card'}">
					<img src="../../assets/images/user/hy_4.png">
					<p>
						我的点卡
					</p>
				</router-link>
			</li>
			<li class="fl w20">
				<router-link :to="{name:'score'}">
					<img src="../../assets/images/user/hy_6.png">
					<p>
						金豆明细
					</p>
				</router-link>
			</li>
			<li class="fl w20">
				<router-link :to="{name:'bank'}">
					<img src="../../assets/images/user/hy_5.png">
					<p>
						我的银行
					</p>
				</router-link>
			</li>
		</ul>
	</div>
	<div class="cl">
	</div>
</div>

<div class="spreadinfodiv">
	<div class="title">
		<div class="title_content">
			<img src="../../assets/images/user/xxtb.png" style="vertical-align:middle; width:7.5%">
			下线管理
		</div>
	</div>
	<div class="cl">
	</div>
	<div class="m_content">
		<ul>
			<li class="fl w20">
				<router-link :to="{name:'reffer'}">
					<img src="../../assets/images/user/xx_1.png">
					<p>
						邀请好友
					</p>
				</router-link>
			</li>
			<li class="fl w20">
				<router-link :to="{name:'myreffer'}">
					<img src="../../assets/images/user/xx_2.png">
					<p>
						我的推广
					</p>
				</router-link>
			</li>
			<li class="fl w20">
				<router-link :to="{name:'profit'}">
					<img src="../../assets/images/user/xx_3.png">
					<p>
						推广收益
					</p>
				</router-link>
			</li>
			<li class="fl w20">
				<img src="../../assets/images/user/blank.png">
			</li>
			<li class="fl w20">
				<img src="../../assets/images/user/blank.png">
			</li>
		</ul>
	</div>
	<div class="cl">
	</div>
</div>
<div class="welfareinfodiv">
	<div class="title">
		<div class="title_content">
			<img src="../../assets/images/user/hyfl.png" style="vertical-align:middle; width:7.5%">
			会员福利
		</div>
	</div>
	<div class="cl">
	</div>
	<div class="m_content">
		<ul>
			<li class="fl w20">
				<router-link :to="{name:'ranking'}">
					<img src="../../assets/images/user/phbj.png">
					<p>
						排行榜奖
					</p>
				</router-link>
			</li>
			<li class="fl w20">
				<router-link :to="{name:'relief'}">
					<img src="../../assets/images/user/mrjj.png">
					<p>
						每日救济
					</p>
				</router-link>
			</li>
			<li class="fl w20">
				<router-link :to="{name:'sign'}">
					<img src="../../assets/images/user/mrqd.png">
					<p>
						每日签到
					</p>
				</router-link>
			</li>
			<li class="fl w20">
				<router-link :to="{name:'salary'}">
					<img src="../../assets/images/user/lqgz.png">
					<p>
						领取工资
					</p>
				</router-link>
			</li>
			<li class="fl w20">
				<router-link :to="{name:'lottery'}">
					<img src="../../assets/images/user/cjzp.png">
					<p>
						抽奖转盘
					</p>
				</router-link>
			</li>
		</ul>
	</div>
	<div class="cl">
	</div>
</div>
<div class="welfareinfodiv">
	<div class="title">
		<div class="title_content">
			<img src="../../assets/images/user/xtsz.png" style="vertical-align:middle; width:7.5%">
			系统设置
		</div>
	</div>
	<div class="cl">
	</div>
	<div class="m_content">
		<ul>
			<li class="fl w20">
			<router-link :to="{name:'modify'}">
					<img src="../../assets/images/user/ico_changekey.png">
					<p>
						密码修改
					</p>
				</router-link>
			</li>
			<li class="fl w20">
			<router-link :to="{name:'operate'}">
					<img src="../../assets/images/user/ico_operate.png">
					<p>
						操作记录
					</p>
				</router-link>
			</li>
			<li class="fl w20">
				<img src="../../assets/images/user/blank.png">
			</li>
			<li class="fl w20">
				<img src="../../assets/images/user/blank.png">
			</li>
			<li class="fl w20">
				<img src="../../assets/images/user/blank.png">
			</li>
		</ul>
	</div>
	<div class="cl">
	</div>
</div>		
	</div>
	<FootNav>
	</FootNav>
</div>  
</template>
<script>
import { mapMutations,mapState } from 'vuex'
import FootNav from '../../components/footNav'
import HeadNav from '../../components/topNav'
import UcHeader from '../../components/ucHeader'
export default{
data(){
  return {
    isSign:{}
  }
},
mounted(){
},
created () {
    this.setTitle()
  },     
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE('会员中心')
        this.SHOW_BACK_BUT(true)
    }
  },
components: {HeadNav,FootNav,UcHeader}
}
</script>
<style scoped>
.memberinfodiv,.spreadinfodiv,.welfareinfodiv{background:#e9e9e9;padding:2.5% 0 0 0;clear:both;color:#808080}
.memberinfodiv .title,.spreadinfodiv .title,.welfareinfodiv .title{background:#FFF;border-bottom:1px solid #e9e9e9;font-size:.8rem}
.memberinfodiv .title .title_content,.spreadinfodiv .title .title_content,.welfareinfodiv .title .title_content{width:94%;padding:1.5% 0 1.5% 3%;position:relative}
.memberinfodiv .title .title_content img{vertical-align:middle;width:7.5%;float:left}
.memberinfodiv .title .title_content .r{vertical-align:middle;position:absolute;top:25%;right:1%}
.memberinfodiv .title .title_content .r a{color:#808080}
.cl{clear:both}
.memberinfodiv .m_content,.spreadinfodiv .m_content,.welfareinfodiv .m_content{background:#FFF;height:5%;padding:1% 0%;float:left;width:100%}
.memberinfodiv .m_content ul,.spreadinfodiv .m_content ul,.welfareinfodiv .m_content ul{width:100%;padding:0;margin:0;padding-top:2px}
.memberinfodiv .m_content ul li,.spreadinfodiv .m_content ul li,.welfareinfodiv .m_content ul li{height:100%;text-align:center;background:#FFF repeat;padding:1% 0 1% 0;list-style:none}
.memberinfodiv .m_content ul li a,.spreadinfodiv .m_content ul li a,.welfareinfodiv .m_content ul li a{color:#808080;text-decoration:none}
.memberinfodiv .m_content ul li img,.spreadinfodiv .m_content ul li img,.welfareinfodiv .m_content ul li img{width:70%}
.memberinfodiv .m_content ul li p,.spreadinfodiv .m_content ul li p,.welfareinfodiv .m_content ul li p{margin:-1em 0 0 0;padding:0;font-size:.75rem}
.w20{width:20%}
.fl{float:left}
</style>