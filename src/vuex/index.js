import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
const state = {
    title:'59128',
    showBackBut:true,
    userInfo:JSON.parse(window.localStorage.getItem('userStorage')) || {},
    gameCode:'',
    globalTimer:''
}
export default new Vuex.Store({
    state,
    actions,
    mutations
})