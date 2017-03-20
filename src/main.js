// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/styles/common.css'
Vue.use(MintUI)
router.beforeEach((to, from, next) => {
   if(to.matched.some(m => m.meta.requiresAuth)) {
        if (store.state.userInfo.userId) {
            next();
        } else {
            next({path: '/login',query: { redirect: to.fullPath }});
        }
    } else {next();}
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
