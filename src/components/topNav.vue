<template>
    <mt-header fixed :title="title">
     <router-link to="" slot="left" v-show="showBackBut">
        <mt-button  @click="goback">
        <img src="../assets/images/game/back.png" height="20" width="20" slot="icon">
        </mt-button>
      </router-link>
    </mt-header>
</template>
<script>
import { mapState } from 'vuex'
export default{
  computed: mapState({
    title: state => state.title,
    showBackBut:state=>state.showBackBut
  }),
   methods: {
    goback () {
      this.$router.go('-1')
    }
  }
}
</script>
<style scoped>
.mint-header{background-image: -webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#e7e7e7));font-size:1.2rem !important;color:#7a8096 !important;background-color:#fff;font-weight: bold !important;}
</style>