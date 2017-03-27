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
			<ul v-infinite-scroll="loadMore" 
			infinite-scroll-disabled="infiniteDisabled" 
			infinite-scroll-distance="10">
				<li v-for="message in messageList">
					<div class="bg">
						<div>
							<div class="leftdiv">
								<img src="../../assets/images/news/n_1.png" alt="" class="hdpic">
							</div>
							<router-link :to="{name:'newsdetail',params:{id:message.Id,title:message.Title}}">
								<div class="infodiv">
									<p class="title">
										[{{message.TypeName}}]{{message.Title}}
									</p>
									<p class="time">
										{{message.CreateDate}}
									</p>
								</div>
							</router-link>
						</div>
					</div>
				</li>
			</ul>
			<p v-show="isLoading" class="page-infinite-loading">
          			拼命加载中...
        	</p>
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
import {HTTP_URL_API} from '../../data/api'
import axios from 'axios'
import { InfiniteScroll } from 'mint-ui'
export default{
data(){
	return{
		page:1,
		size:13,
		messageList:[],
		infiniteDisabled:false,
		isLoading:true
	}
},
created () {
    this.setTitle()
  }, 
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE('新闻公告')
        this.SHOW_BACK_BUT(true)
    },
	loadMore(){
		let mySelf = this;
        mySelf.isLoading = true;
        console.log('loading')
		mySelf.getMessage()
	},
	getMessage(){
		axios.get(HTTP_URL_API.SYSTEM_MESSAGE,
		{
			params:
			{
				page:this.page,
				size:this.size
			}
		})
		.then((res) => {
			if(res.data.rows){
				let maxPage=Math.ceil(res.data.total/res.data.pagesize)
				this.messageList=this.messageList.concat(res.data.rows)
				this.page+=1
				if(this.page>maxPage){
					this.infiniteDisabled=true
					this.isLoading=false
				}
			}
			else {
				this.infiniteDisabled = true
				this.isLoading = false
          	}
      	})
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
.page-infinite-loading{text-align:center;height:50px;line-height:50px;font-size:.75rem;}
.page-infinite-loading div{display:inline-block;vertical-align:middle;margin-right:5px}
</style>