<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
      <UcHeader></UcHeader>
        <div class="memberinfodiv">
            <div class="title" style="padding-bottom:1px">
                <div class="title_content">
                    <img src="../../assets/images/game/exlist.png" class="m1">
                    <p class="t_1">兑换奖品</p>
                    <p class="t_2">可把游戏币兑换成奖品</p>
                </div>
            </div>
            <div class="cl"></div>
        </div>
        <div class="exchangeinfodiv">
                <ul @click="selectCardEvent(0)">
                    <a href="javascript:void(0)">
                        <img src="../../assets/images/game/50.png" width="100%">
                    </a>
                    <li class="award_title">移动充值卡50元</li>
                    <li class="award_name"><i>V0:52,500</i></li>
                    <li class="award_name"><i>V1:52,250</i></li>
                    <li class="award_name"><i>V2:52,000</i></li>
                    <li class="award_name"><i>V3:51,750</i></li>
                    <li class="award_name"><i>V4:51,500</i></li>
                    <li class="award_name"><i>V5:51,250</i></li>
                    <li class="award_name"><i>V6:51,000</i></li>
                    <li class="award_name"><i>V7:50,000</i></li>
                    <li style="text-align: center">
                        <input type="radio" class="radio" value="0" name="rdch" v-model="radCheck[0]">
                        <label for="rd1">选此奖品</label>
                    </li>
                </ul>
                <ul @click="selectCardEvent(1)">
                    <a href="javascript:void(0)">
                        <img src="../../assets/images/game/100.png" width="100%">
                    </a>
                    <li class="award_title">移动充值卡100元</li>
                    <li class="award_name"><i>V0:105,000</i></li>
                    <li class="award_name"><i>V1:104,500</i></li>
                    <li class="award_name"><i>V2:104,000</i></li>
                    <li class="award_name"><i>V3:103,500</i></li>
                    <li class="award_name"><i>V4:103,000</i></li>
                    <li class="award_name"><i>V5:102,500</i></li>
                    <li class="award_name"><i>V6:102,000</i></li>
                    <li class="award_name"><i>V7:100,000</i></li>
                    <li style="text-align: center">
                        <input type="radio" class="radio" value="1" name="rdch" v-model="radCheck[1]">
                        <label for="rd2">选此奖品</label>
                    </li>
                </ul>
                <ul @click="selectCardEvent(2)">
                    <a href="javascript:void(0)">
                        <img src="../../assets/images/game/500.png" width="100%">
                    </a>
                    <li class="award_title">移动充值卡500元</li>
                    <li class="award_name"><i>V0:525,000</i></li>
                    <li class="award_name"><i>V1:522,500</i></li>
                    <li class="award_name"><i>V2:520,000</i></li>
                    <li class="award_name"><i>V3:517,500</i></li>
                    <li class="award_name"><i>V4:515,000</i></li>
                    <li class="award_name"><i>V5:512,500</i></li>
                    <li class="award_name"><i>V6:510,000</i></li>
                    <li class="award_name"><i>V7:500,000</i></li>
                    <li style="text-align: center">
                        <input type="radio" class="radio" value="2" name="rdch" v-model="radCheck[2]">
                        <label for="rd3">选此奖品</label>
                    </li>
                </ul>
                <ul @click="selectCardEvent(3)">
                    <a href="javascript:void(0)">
                        <img src="../../assets/images/game/1000.png" width="100%">
                    </a>
                    <li class="award_title">移动充值卡1000元</li>
                    <li class="award_name"><i>V0:1,050,000</i></li>
                    <li class="award_name"><i>V1:1,045,000</i></li>
                    <li class="award_name"><i>V2:1,040,000</i></li>
                    <li class="award_name"><i>V3:1,035,000</i></li>
                    <li class="award_name"><i>V4:1,030,000</i></li>
                    <li class="award_name"><i>V5:1,025,000</i></li>
                    <li class="award_name"><i>V6:1,020,000</i></li>
                    <li class="award_name"><i>V7:1,000,000</i></li>
                    <li style="text-align: center">
                        <input type="radio" class="radio" value="3" name="rdch" v-model="radCheck[3]">
                        <label for="rd4">选此奖品</label>
                    </li>
                </ul>
                <ul @click="selectCardEvent(4)">
                    <a href="javascript:void(0)">
                        <img src="../../assets/images/game/5000.png" width="100%">
                    </a>
                    <li class="award_title">移动充值卡5000元</li>
                    <li class="award_name"><i>V0:5,250,000</i></li>
                    <li class="award_name"><i>V1:5,225,000</i></li>
                    <li class="award_name"><i>V2:5,200,000</i></li>
                    <li class="award_name"><i>V3:5,175,000</i></li>
                    <li class="award_name"><i>V4:5,150,000</i></li>
                    <li class="award_name"><i>V5:5,125,000</i></li>
                    <li class="award_name"><i>V6:5,100,000</i></li>
                    <li class="award_name"><i>V7:5,000,000</i></li>
                    <li style="text-align: center">
                        <input type="radio" class="radio" value="4" name="rdch" v-model="radCheck[4]">
                        <label for="rd5">选此奖品</label>
                    </li>
                </ul>
                <ul @click="selectCardEvent(5)">
                    <a href="javascript:void(0)">
                        <img src="../../assets/images/game/10000.png" width="100%">
                    </a>
                    <li class="award_title">移动充值卡10000元</li>
                    <li class="award_name"><i>V0:10,500,000</i></li>
                    <li class="award_name"><i>V1:10,450,000</i></li>
                    <li class="award_name"><i>V2:10,400,000</i></li>
                    <li class="award_name"><i>V3:10,350,000</i></li>
                    <li class="award_name"><i>V4:10,300,000</i></li>
                    <li class="award_name"><i>V5:10,250,000</i></li>
                    <li class="award_name"><i>V6:10,200,000</i></li>
                    <li class="award_name"><i>V7:10,000,000</i></li>
                    <li style="text-align: center">
                        <input type="radio" class="radio" value="5" name="rdch" v-model="radCheck[5]">
                        <label for="rd6">选此奖品</label>
                    </li>
                </ul>
        </div>
        <div class="exchangeinfodiv" style="clear: both">
            <p class="pl">
                兑换
                <button @click="iptBuyEvent('-')">-</button>
                <input type="number" v-model="inpNumber" class="count" @keyup="iptBuyEvent('+')" maxlength="3">
                <button @click="iptBuyEvent('+')">+</button>张
                <br><span style="color:#d43c3b">总计:<span id="needg">{{Thousands(totalAmout)}}</span></span>
            </p>
            <p class="pr">
                <input class="chgbtn exbtn" type="button" value="立即兑换" @click="exchangeEvent">
            </p>
        </div>
    </div>
    <FootNav></FootNav>
  </div>
</template>
<script>
import { mapMutations,mapState } from 'vuex'
import FootNav from '../../components/footNav'
import HeadNav from '../../components/topNav'
import UcHeader from '../../components/ucHeader'
import{Toast,MessageBox,Popup} from 'mint-ui'
import Util from '../../data/util'
export default{
data(){
  return{
    changeList:[],
    radCheck:['-1','-1','-1','-1','-1','-1'],
    excAmount:[50000,100000,500000,1000000,5000000,10000000],
    inpNumber:0,
    chkNumber:-1,
    totalAmout:0
  }
},
created () {
    this.setTitle()
  },   
computed: mapState({
    userInfo: state => state.userInfo
}),      
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT','USER_CHANGE']),
    setTitle(){
        this.CHANGE_TITLE('会员中心')
        this.SHOW_BACK_BUT(true)
    },
    selectCardEvent(__index){
        this.radCheck.forEach((value,index)=>{
            if(index==__index){
                this.radCheck.splice(__index,1,__index+'')
                this.chkNumber=__index
                this.inpNumber=1
                }
            else{
                this.radCheck.splice(index,1,'-1')
            }
        });
        this.totalAmout=this.chkNumber==-1?0:parseFloat(this.excAmount[this.chkNumber])*parseInt(this.inpNumber)
    },
    iptBuyEvent(__ipx){
        let number=parseInt(this.inpNumber)
        switch(__ipx){
            case '+':
                number++
            break;
            default:
                number==0?0:number--
            break;
        }
        this.totalAmout=this.chkNumber==-1?0:parseFloat(this.excAmount[this.chkNumber])*number
        this.inpNumber=number
    },
    exchangeEvent(){
        if(this.totalAmout==0 || this.chkNumber==0){
             Toast('骚年,没选你兑换个毛')
             return;            
        }
        if(this.userInfo.amount<this.totalAmout){
             Toast('臭逼,没钱你兑换个GG')
             return;
        }
        MessageBox.confirm('大爷..确定兑换: '+this.inpNumber+' 份?').then(action => {
            //do 兑换业务
        });
    },
    Thousands(val){
		return Util.toThousands(val)
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
.memberinfodiv .title .title_content .t_2{margin:0;padding:0;color:#888888;font-size:100%}
.memberinfodiv .title .title_content .t_1{margin:0;padding:0;color:#333333;font-size:120%}
.exchangeinfodiv ul{width:23%;margin:1%;float:left;overflow:hidden;padding:0;height:16rem;}
.exchangeinfodiv ul li{list-style:none;}
.exchangeinfodiv ul li.award_title{height:1.2rem;line-height:1.2rem;text-align:center;color:#313131;background:#ededed;margin:1% 0;font-size:.6rem;}
.exchangeinfodiv ul li.award_name{height:1rem;line-height:1rem;text-align:center;color:#ff0000;background:#ededed;margin:3% 0}
.exchangeinfodiv ul li{width:100%;font-size:.65rem;font-family:Arial}
.exchangeinfodiv p.pl{font-size:80%;margin-left:1%;width:45%;float:left;text-align:center}
.exchangeinfodiv p.pr{width:40%;float:left;text-align:center;margin-top:3.5%}
.exchangeinfodiv p input.count{border:1px solid #707070;color:#000;display:inline-block;font-size:100%;height:180%;line-height:180%;text-align:center;width:40%;border-left:none;border-right:none}
.exchangeinfodiv p.pl img{width:13%;vertical-align:top;}
.exchangeinfodiv p.pr .exbtn{width:85%;text-align:center;font-size:120%;border:none;}
input.chgbtn{color:#FFF;cursor:pointer;background-image: -webkit-gradient(linear, left top, left bottom, from(#f65543), to(#e93d29));}
</style>