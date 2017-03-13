<template>
<div class="loading-page">
      <p>
        <mt-button type="default" size="small" @click="enter">进入</mt-button>
      </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  methods:{
    enter(){
      this.$router.push('/index')
    }
  }
}
</script>
<style>
.loading-page{width:100%;height:100%;display: flex;justify-content:center;align-items:Center;}
.loading-page p{margin:auto;}
</style>
