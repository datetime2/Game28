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
// if (window.localStorage.getItem("userStore")) {
//     store.dispatch('setUserInfo', JSON.parse(window.localStorage.getItem("userStore")));
// }
// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
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
