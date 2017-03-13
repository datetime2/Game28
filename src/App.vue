<template>
  <div id="app">
    <div v-cloak style="height: 100%">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
#app{height:100%;font-family:'Avenir',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;background:#f5f5f5}
.fade-enter-active,.fade-leave-active{transition:opacity .2s}
.fade-enter,.fade-leave-to{opacity:0}
a{text-decoration:none}
[v-cloak]{display:none}
</style>
