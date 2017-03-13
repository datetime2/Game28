<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
      <UcHeader></UcHeader>
      <div class="memberinfodiv">
            <div class="title" style="padding-bottom:1px">
                <div class="title_content">
                    <img src="../../assets/images/user/invfrd.png" class="m4">
                    <p class="t_1">邀请好友</p>
                    <p class="t_2">请把您的专用邀请链接，通过微信或QQ发给好友</p>
                </div>
            </div>
            <div class="cl"></div>
        </div>
       <div class="xxmaindiv">
            <div class="i_list">
                <div class="i_title trapezoid">
                    邀请范文:
                </div>
                <div class="i_content">
                    <table width="97%" cellspacing="0px" style="border-collapse:collapse;">
                        <tbody>
                            <tr><td>手指轻点，财富不断,复制范文发给好友。</td></tr>
                            <tr>
                                <td>
                                    <div class="tddiv">
                                        <p>诚信实力站点,公平公正,不间断争霸赛期期送大奖,秒拍,送钻活动不断!</p>
                                        <p>注册地址：</p>
                                        <p class="refferUrl">http://www.hct28.com/register?rid=1</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p style="text-align:center"><input type="button" value="一键复制" id="copy_btn" class="relief_btn"></p>
            </div>

            <div class="i_list" style="margin-top:2%">
                <div class="i_titlex trapezoid">
                    下线返点表:
                </div>
                <div class="i_content">
                    <div class="itablediv"><table width="100%" cellspacing="0px" style="border-collapse:collapse; "><tbody><tr><th align="center">等级</th><th align="center">所需经验</th><th align="center">升级奖励</th><th align="center">充值奖励(%)</th></tr><tr><td align="center">VIP0</td> <td align="center">0</td><td align="center">0</td><td align="center">2.00</td></tr><tr><td align="center">VIP1</td> <td align="center">200</td><td align="center">0</td><td align="center">2.00</td></tr><tr><td align="center">VIP2</td> <td align="center">1000</td><td align="center">0</td><td align="center">2.00</td></tr><tr><td align="center">VIP3</td> <td align="center">3000</td><td align="center">0</td><td align="center">2.00</td></tr><tr><td align="center">VIP4</td> <td align="center">8000</td><td align="center">0</td><td align="center">2.00</td></tr><tr><td align="center">VIP5</td> <td align="center">20000</td><td align="center">0</td><td align="center">2.00</td></tr><tr><td align="center">VIP6</td> <td align="center">50000</td><td align="center">0</td><td align="center">0.10</td></tr><tr><td align="center">VIP7</td> <td align="center">120000</td><td align="center">0</td><td align="center">0.00</td></tr></tbody></table></div>
                </div>
            </div>
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
.xxmaindiv {
    border: solid 1px #adadad;
    width: 94%;
    margin-left: 1%;
    margin-top: 1%;
    padding: 2%;
    font-size: 12px;
}
.trapezoid {
    border-bottom: 20px solid #cb0000;
    border-right: 12px solid transparent;
    height: 0;
    width: 25%;
    padding-left: 1%;
    line-height: 130%;
    font-size: 15px;
    letter-spacing: 2px;
    color: #FFF;
}
.i_content {
    color: #666666;
}
table {
    display: table;
    border-collapse: collapse;
    border-color: grey;
        width: 97%;
    border-spacing: 0px;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
td, th {
    display: table-cell;
    vertical-align: inherit;
}
p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.trapezoid {
    border-bottom: 20px solid #cb0000;
    border-right: 12px solid transparent;
    height: 0;
    width: 30%;
    padding-left: 1%;
    line-height: 130%;
    font-size: 15px;
    letter-spacing: 2px;
    color: #FFF;
}
</style>