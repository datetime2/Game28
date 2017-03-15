<template>
<div>
	<HeadNav>
	</HeadNav>
	<div class="index-container" id="index-container">
		<div class="likebody">
			<div class="slote">
				<div class="sflash">
					<img width="100%" src="../../assets/images/news/adt.jpg">
				</div>
			</div>
		</div>
		<div class="newsdiv">
			<ul>

				<li>
					<div class="bg">
						<div>
							<div class="leftdiv">
								<img src="../../assets/images/news/n_1.png" alt="" class="hdpic">
							</div>
							<router-link :to="{name:'newsdetail',params:{id:31,title:'[新闻]【好彩投28】PK10日赚100大洋模式'}}">
								<div class="infodiv">
									<p class="title">
										[新闻]【好彩投28】PK10日赚100大洋模式
									</p>
									<p class="time">
										2017-03-09
									</p>
								</div>
							</router-link>
						</div>
					</div>
				</li>

			</ul>
		</div>
    <div class="clear"></div>
	</div>
	<FootNav>
	</FootNav>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
import FootNav from '../../components/footNav'
import HeadNav from '../../components/topNav'
export default{
created () {
    this.setTitle()
  },     
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE('新闻公告')
        this.SHOW_BACK_BUT(true)
    }
  },
  components: {HeadNav,FootNav}
}
</script>
<style scoped>
.slote{display:block;margin:0 auto;overflow:hidden;width:100%}
.sflash{display:block;width:100%}
.sflash img{border:0px;margin:0px}
.newsdiv ul{padding:0;width:98%;margin:0 auto}
.newsdiv ul li{width:100%;float:left;height:16%;margin:2px;list-style:none}
.newsdiv ul li .bg{background-color:#FFF;height:16%;padding:0;float:left;width:98%}
.newsdiv ul li .bg .leftdiv{width:16%;float:left;text-align:center;margin:5% 0 1% 1.5%}
.newsdiv ul li .bg .hdpic{width:96%}
.newsdiv ul li .bg .infodiv{width:78%;float:left;padding:1.5% 0 0 3%}
.newsdiv ul li .bg .infodiv p.title{font-size:.8rem;padding-top:0%;color:#888888}
.newsdiv ul li .bg .infodiv p.time{float:right;color:#888888;font-size:.8rem;}
.clear{clear:both;height: 50px;}
</style>