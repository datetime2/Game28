<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">

    </div>
    <FootNav></FootNav>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import FootNav from '../../components/footNav'
import HeadNav from '../../components/topNav'
export default{
created () {
    this.setTitle()
  },     
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE(this.$route.params['text'])
        this.SHOW_BACK_BUT(true)
    }    
  },
  components: {HeadNav,FootNav}
}
</script>
