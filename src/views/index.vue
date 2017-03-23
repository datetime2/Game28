<template>
  <div>
	<HeadNav>
	</HeadNav>
	<div class="index-container">
		<div class="swiper">
			<swiper :options="swiperOption">
				<swiper-slide v-for="item in Swipers" :key="item.img">
					<a :href="item.url">
						<img :src="item.img" class="swiper-item" alt="" height="20%" width="100%"
						/>
					</a>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination">
				</div>
			</swiper>
		</div>
		<div class="loginstatus" v-if="!userInfo.userId">
			<div class="ls_l">
				<router-link :to="{name: 'login'}">
					<span>
						登录
					</span>
				</router-link>
				｜
				<router-link :to="{name: 'register'}">
					<span>
						免费注册
					</span>
				</router-link>
			</div>
			<div class="ls_r">
				金豆:0
			</div>
		</div>
		<div class="loginstatus" v-if="userInfo.userId">
			<div class="ls_l">
				{{userInfo.nickName?userInfo.nickName:userInfo.userName}}(ID：{{userInfo.userId}})
			</div>
			<div class="ls_r">
				金豆:{{Thousands(userInfo.amount)}}
			</div>
		</div>
		<div class="hddiv" style="margin-top: 10px;">
			<ul>
				<router-link :to="{name: 'game'}">
					<li class="fl w25">
						<img src="../assets/images/home/ksyx.png" />
						<p>
							开始游戏
						</p>
					</li>
				</router-link>
				<router-link :to="{name: 'agent'}">
					<li class="fl w25">
						<img src="../assets/images/home/cz.png" class="gl" />
						<p>
							充值
						</p>
					</li>
				</router-link>
				<router-link :to="{name: 'activity'}">
					<li class="fl w25">
						<img src="../assets/images/home/zxhd.png" class="rk" />
						<p>
							最新活动
						</p>
					</li>
				</router-link>
				<router-link :to="{name: 'news'}">
					<li class="fl w25">
						<img src="../assets/images/home/xwgg.png" />
						<p>
							新闻公告
						</p>
					</li>
				</router-link>
			</ul>
		</div>
		<div class="servicediv">
			<div class="service_l">
				<a href="mqqwpa://im/chat?chat_type=wpa&uin=1735888884&version=1&src_type=web&web_src=http://hct28.com/m/"
				target="_blank">
					<img src="../assets/images/home/ser_1.png" width="100%" />
				</a>
			</div>
			<div class="service_3">
				<a href="http://shang.qq.com/wpa/qunwpa?idkey=cf697c36b7975d8b66027a5ddd49ea09c3732bd3c0590e69e8569e40aff305ba"
				target="_blank">
					<img src="../assets/images/home/ser_3.png" width="100%" />
				</a>
			</div>
		</div>
		<div class="list_ys list_h" style="">
			<div class="list_bt">
				<div class="icon_k">
				</div>
				<div class="list_txt">
					推荐游戏
				</div>
			</div>
			<div class="list_li">
				<ul>
					<li>
						<router-link :to="{name:'lottery'}">
							<img width="100%" src="../assets/images/cjhd.png" />
							<p>
							</p>
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'detail',params:{type:1,code:1002,text:'北京16'}}">
							<img width="100%" src="../assets/images/bj16.png" />
							<p>
							</p>
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'detail',params:{type:1,code:1001,text:'北京28'}}">
							<img width="100%" src="../assets/images/bj28.png" />
							<p>
							</p>
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'detail',params:{type:1,code:1001,text:'PK22'}}">
							<img width="100%" src="../assets/images/pk22.png" />
							<p>
							</p>
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'detail',params:{type:1,code:1001,text:'PK冠军'}}">
							<img width="100%" src="../assets/images/pkgj.png" />
							<p>
							</p>
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'detail',params:{type:1,code:1001,text:'PK10'}}">
							<img width="100%" src="../assets/images/pk10.png" />
							<p>
							</p>
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'detail',params:{type:1,code:5005,text:'PK龙虎'}}">
							<img width="100%" src="../assets/images/pklh.png" />
							<p>
							</p>
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'game'}">
							<img width="100%" src="../assets/images/more.png" />
							<p>
							</p>
						</router-link>
					</li>
				</ul>
				<div style="clear:both;">
				</div>
			</div>
		</div>
	</div>
	<FootNav>
	</FootNav>
</div>
</template>
<script>
import{mapMutations,mapState} from 'vuex'
import FootNav from '../components/footNav'
import HeadNav from '../components/topNav'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import{Swipers} from '../data'
import{toThousands} from '../data/util'
export default{
created () {
    this.setTitle()
  },     
data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 4000
      },
      p: 1,
      Swipers
    }
  },  
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.SHOW_BACK_BUT(false)
        this.CHANGE_TITLE('好彩投28')
    },
    Thousands(val){
	  return toThousands(val)
	}	
  },
computed:mapState({ userInfo: state => state.userInfo }),  
components: {HeadNav,FootNav,swiper,swiperSlide}
}
</script>
<style scoped>
.loginstatus{width:100%;height:40px;border-bottom:2px  solid #aeaeae;padding-top:3px;border-bottom:none;font-weight:bold;font-family:"黑体";font-size:75%}
.loginstatus .ls_l{float:left;margin-left:15px;padding-left:3px;height:40px;line-height:40px;text-align:center}
.loginstatus .ls_l a{color:#888;font-size:1rem;}
.loginstatus .ls_r{float:right;margin-right:5px;padding:0 3px 0 3px;height:35px;line-height:35px;border:1px solid #aeaeae;-moz-border-radius:10px;-webkit-border-radius:10px;border-radius:10px;color:#ff8400}
.hddiv{margin:0 auto 0;overflow:hidden;text-align:center;width:100%;padding-bottom:2%}
.hddiv ul{width:100%;padding:0;margin:0;height:100%}
.hddiv li{float:left;text-align:center;height:100%;list-style:none;}
.hddiv li img{width:60%}
.hddiv li p{margin:0.2em 0 0 0;padding:0;color:#5f5f5f;font-size:0.9rem;}
.hddiv li a{color:#5f5f5f}
.w25{width:25%}
.servicediv{margin:0 auto 0;overflow:hidden;text-align:left;width:100%}
.service_l{width:50%;height:80%;overflow-y:hidden;float:left}
.service_2{width:50%;float:left;background-color:#f1f1f1}
.service_3{width:50%;float:left;height:80%;overflow-y:hidden}
.list_bt{height:40px;font-size:20px;line-height:40px;border-bottom:2px solid #cecece}
.icon_k{background:url(../assets/images/game/ico_star.png) no-repeat 3px 3px;width:40px;height:38px;margin-top:1px}
.list_txt{height:38px;color:#e54243;margin-top:-1px}
.icon_k,.list_txt{float:left}
.list_li ul{padding-left:0%}
.list_li li{float:left;width:21%;text-align:center;margin:2%;list-style:none;}
.sus{position:fixed;right:0;bottom:50px;height:90px;width:90px}
</style>