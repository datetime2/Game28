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
import FootNav from '../components/footNav'
import HeadNav from '../components/topNav'
import { TabContainer, TabContainerItem } from 'mint-ui'
export default{
data(){
    return {
        active: 'tab-container2'
    }
},    
created () {
    this.setTitle()
  },     
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE('最新活动')
        this.SHOW_BACK_BUT(true)
    }
  },
  components: {HeadNav,FootNav,TabContainer,TabContainerItem}
}
</script>
