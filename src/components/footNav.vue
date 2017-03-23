<template>
<mt-tabbar v-model="selected">
      <mt-tab-item id="index" @click.native="go('index')">
        <img src="../assets/images/common/btn_home.png" alt="" slot="icon">
        首页
      </mt-tab-item>
      <mt-tab-item id="game" @click.native="go('game')">
        <img src="../assets/images/common/btn_game.png" alt="" slot="icon">
        游戏乐园
      </mt-tab-item>
      <mt-tab-item id="sort" @click.native="go('sort')">
        <img src="../assets/images/common/btn_ranking.png" alt="" slot="icon">
        牛人榜
      </mt-tab-item>
      <mt-tab-item id="exchange" @click.native="go('exchange')">
        <img src="../assets/images/common/btn_exchange.png" alt="" slot="icon">
        兑换
      </mt-tab-item>
      <mt-tab-item id="user" @click.native="go('user')">
        <img src="../assets/images/common/btn_member.png" alt="" slot="icon">
        会员
      </mt-tab-item>
    </mt-tabbar>
</template>
<script>
import {inArray} from '../data/util'
export default{
created () {
    var route = this.$route.name
    this.selected =inArray(route,this.gameColl)?'game':inArray(route,this.userColl)?'user':route
  },
data(){
    return {
        selected: 'index',
        gameColl:['detail','helper','model','record','statics','trend'],
        userColl:['bank','card','information','lottery','modify','myreffer','operate','profit','ranking','reffer','salary','score','sign'],
        homeColl:['agent','activity','news']
    }
},
methods: {
    go (routeName) {
      this.$router.push({name: routeName})
    }
  }
}
</script>
<style scoped>
.mint-tab-item-label{color:#fff !important;}
</style>