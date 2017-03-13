<template>
    		<div class="r1">
			<img class="r1-img" src="../assets/images/user/top_backgroup.png">
			<div class="div_1">
				<div class="head_div">
					<img class="head_div-img" src="../assets/images/user/head.png">
				</div>
				<div class="info_div">
					<p class="item-account">
						{{userInfo.nickName?userInfo.nickName:userInfo.userName}}(ID：{{userInfo.userId}})
					</p>
					<p>
						<img class="item-account-img" src="../assets/images/user/v0.png">
					</p>
				</div>
				<div class="statusdiv">
					<span class="user_logout" @click="logoutEvent">
						<img class="user_logout-img" src="../assets/images/user/logout.png">
					</span>
					<router-link :to="{name:'sign'}">
						<img class="user_login-img" src="../assets/images/user/sign.png">
					</router-link>
				</div>
			</div>
			<div class="coindiv">
				<div class="coindiv_l">
					<img class="coindiv_l-img" src="../assets/images/user/coin_1.png">
					金豆:
					<span class="item-amount">
						{{Thousands(userInfo.amount)}}
					</span>
				</div>
				<div class="coindiv_m">
					<img class="coindiv_m-img" src="../assets/images/user/l.png">
				</div>
				<div class="coindiv_r">
					<img class="coindiv_r-img" src="../assets/images/user/coin_2.png">
					银行:
					<span class="item-bankamount">
						{{Thousands(userInfo.bankAmount)}}
					</span>
				</div>
			</div>
		</div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
import{toThousands} from '../data/util'
import{MessageBox} from 'mint-ui'

export default{
  computed: mapState({
    userInfo: state => state.userInfo
  }),
   methods: {
	    ...mapMutations(['USER_LOGOUT']),
		Thousands(val){
			return toThousands(val)
		},
		logoutEvent(){
			MessageBox.confirm('确定退出登录?').then(action => {
				this.USER_LOGOUT()
				this.$router.push({name:'index'})
	    })
		}		  
  }
}
</script>
<style scoped>
.r1{position:relative;margin:0 0 1% 0;float:left;width:100%}
.r1-img{width:100%}
.div_1{position:absolute;top:20%;left:5%;width:95%;height:65%;float:left}
.head_div{width:20%;height:95%;text-align:center;float:left}
.head_div-img{width:80%}
.item-account-img{width:25%}
.user_logout-img{width:55%}
.user_login-img{width:28%}
.info_div{font-size:.75rem;font-family:黑体;float:left;height:100%;color:#eeeeee;width:50%}
.coindiv{padding:0.5% 0% 1.5% 3%;width:95%;font-size:.6rem;font-family:"黑体";color:#808080}
.statusdiv{height:95%;float:left;padding-top:3%;width:28%}
.info_div p{height:15%;text-shadow:#e8770f 1px 0 0,#e8770f 0 1px 0,#e8770f -1px 0 0,#e8770f 0 -1px 0;-webkit-text-shadow:#e8770f 1px 0 0,#e8770f 0 1px 0,#e8770f -1px 0 0,#e8770f 0 -1px 0;-moz-text-shadow:#e8770f 1px 0 0,#e8770f 0 1px 0,#e8770f -1px 0 0,#e8770f 0 -1px 0}
.coindiv_l{width:45%;float:left;padding:1.5% 0%}
.coindiv_l-img{vertical-align:middle;width:15%}
.coindiv span{color:#e13228}
.coindiv_m-img{width:8%}
.coindiv_r-img{vertical-align:middle;width:15%}
.coindiv_m{width:3%;float:left;margin:0;padding:1% 2% 0% 2%}
.coindiv_r{width:45%;float:left;padding:1.5% 0%}
</style>