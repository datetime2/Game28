<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
      <UcHeader></UcHeader>
      <div class="memberinfodiv">
            <div class="title" style="padding-bottom:1px">
                <div class="title_content">
                    <img src="../../assets/images/user/scoredetail.png" class="m1">
                    <p class="t_1">金豆明细</p>
                    <p class="t_2">每笔金豆明细记录</p>
                </div>
            </div>
            <div class="cl"></div>
        </div>
        <div class="recorddiv" v-html="html">
        
        </div>
    </div>
    <FootNav></FootNav>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import FootNav from '../../components/footNav'
import HeadNav from '../../components/topNav'
import UcHeader from '../../components/ucHeader'
export default{
data(){
  return {
    html:'123123'
  }
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
.memberinfodiv .title .title_content .t_2{margin:0;padding:0;color:#888888;font-size:100%}
.memberinfodiv .title .title_content .t_1{margin:0;padding:0;color:#333333;font-size:120%}
.recorddiv{width:100%;margin:2% 0 0 0;padding:0;float:left}
.recorddiv table{border-spacing:0;width:100%;text-align:center;font-size:.75rem;}
tbody{display:table-row-group;vertical-align:middle;border-color:inherit}
tr{display:table-row;vertical-align:inherit;border-color:inherit}
.recorddiv .table_list th{background:url(../../assets/images/game/thbg.png) repeat-x;height:300%;line-height:300%;text-align:center;color:#333333;border-bottom:1px solid #d1d1d1}
.recorddiv .table_list td{height:200%;line-height:160%;background:#fff none repeat scroll 0 0;color:#000;border-right:1px solid #d1d1d1;border-bottom:1px solid #d1d1d1}
.pagetable{font-family:"Microsoft Yahei",Georgia,"Times New Roman",Times,serif;margin-top:2%;margin-bottom:2%;text-align:center}
.Paging{font-size:.75rem;margin:0;padding:0;vertical-align:middle;width:100%}
.preimg{padding-right:5px}
.pageindex{-webkit-border-radius:50%;text-align:center;width:25px;height:25px;display:inline-block;margin:0;padding:0;color:#FFF;background-image:-webkit-gradient(linear,left top,left bottom,from(#64b7c5),to(#52a5b5));box-shadow:1px 1px 1px #012126 inset}
.Paging img{vertical-align:bottom;width:25%}
</style>