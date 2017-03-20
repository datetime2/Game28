<template>
	<div>
		<HeadNav>
		</HeadNav>
		<div class="index-container" id="index-container">
			<div class="agentdiv">
				<ul class="datalist">
					<li v-for="item in Agents" :key="item.name">
						<div class="bg">
							<div>
								<div class="headdiv">
									<img src="../assets/images/home/h2.png" class="heading">
								</div>
								<div class="infodiv">
									<ul>
										<li>
											<p>
												{{item.name}}
												<img src="../assets/images/home/ag_xx.png">
												<img src="../assets/images/home/ag_xx.png">
												<img src="../assets/images/home/ag_xx.png">
												<img src="../assets/images/home/ag_xx.png">
												<img src="../assets/images/home/ag_xx.png">
											</p>
										</li>
										<li>
											<p class="qq">
												<img src="../assets/images/home/qq.png">
												{{item.qq}}
											</p>
										</li>
										<li>
											<p class="sign">
												{{item.remark}}
											</p>
										</li>
									</ul>
								</div>
								<div class="oprdiv">
									<a :href="getQQIM(item.qq)" target="_blank">
										<img src="../assets/images/home/btn_mslx.png">
									</a>
								</div>
								<div class="line">
								</div>
								<div class="signdiv">
									<img src="../assets/images/home/lbl1.png">
									<img src="../assets/images/home/lbl2.png">
									<img src="../assets/images/home/lbl3.png">
									<img src="../assets/images/home/lbl4.png">
									<img src="../assets/images/home/lbl5.png">
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<FootNav>
		</FootNav>
	</div>
</template>
<script>
import { mapMutations } from 'vuex'
import FootNav from '../components/footNav'
import HeadNav from '../components/topNav'
import {Agents} from '../data'
export default{
data(){
  return{
    Agents
  }
},  
created () {
    this.setTitle()
  },     
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE('合作商家')
        this.SHOW_BACK_BUT(true)
    },
    getQQIM(__qq){
        return "http://wpa.qq.com/msgrd?v=3&amp;uin="+__qq+"&amp;site=qq&amp;menu=yes"
    }
  },
  components: {HeadNav,FootNav}
}
</script>
<style scoped>
.agentdiv{margin-top:.15rem}
.agentdiv ul{padding:0;width:98%;}
.agentdiv ul li{width:100%;float:left;height:40%;margin:2px;list-style:none;}
.agentdiv ul li .bg{border:1px solid #aeaeae;-moz-border-radius:10px;-webkit-border-radius:10px;border-radius:10px;background-color:#FFF;height:20%;padding:2%;float:left;width:96%}
.agentdiv ul li .bg .headdiv{width:27%;float:left;text-align:center;margin:2% auto}
.agentdiv ul li .bg .heading{width:95%}
.agentdiv ul li .bg .infodiv{width:60%;float:left}
.agentdiv ul li .bg p{font-family:"黑体";font-size:.9rem;margin:5px;height:100%;line-height:150%}
.agentdiv ul li .bg p img{width:7%;vertical-align:middle}
.agentdiv ul li .bg .infodiv .qq{color:#ff7700;font-size:22px}
.agentdiv ul li .bg .infodiv .qq img{width:14%}
.agentdiv ul li .bg .infodiv .sign{color:#999999;font-size:.6rem;}
.agentdiv ul li .bg .oprdiv{width:22%;float:right;position:relative;min-height:0px;height:200%}
.agentdiv ul li .bg .oprdiv img{position:absolute;bottom:0%;right:2%;width:140%;margin-bottom:20%}
.agentdiv ul li .bg .line{border-bottom:1px dashed #c4c4c4;height:1px;width:100%;float:left}
.agentdiv ul li .bg .signdiv{clear:both;padding-top:1%}
.agentdiv ul li .bg .signdiv img{width:15%}
</style>