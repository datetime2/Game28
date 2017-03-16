<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">今日盈利榜</mt-tab-item>
        <mt-tab-item id="2">昨日盈利榜</mt-tab-item>
        <mt-tab-item id="3">7日盈利榜</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n"/>
        </mt-tab-container-item>
      </mt-tab-container>      
    </div>
    <FootNav></FootNav>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import FootNav from '../components/footNav'
import HeadNav from '../components/topNav'
export default{
data(){
    return {
      selected:'1'
    }
  },
created () {
    this.setTitle()
  },     
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE('牛人榜')
        this.SHOW_BACK_BUT(true)
    }
  },
  components: {HeadNav,FootNav}
}
</script>
<style>
.mint-navbar{background-color:#f0f2f5 !important;margin-bottom:3px;}
.mint-tab-item-label{color:#d74467 !important;}
.mint-navbar .mint-tab-item{padding:10px !important;}
.mint-navbar .mint-tab-item.is-selected{border-bottom: 3px solid #d74467 !important;}
</style>
