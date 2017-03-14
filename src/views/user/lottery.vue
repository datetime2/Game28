<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
<UcHeader></UcHeader>
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
