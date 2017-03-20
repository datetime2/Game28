import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
const state = {
    title:'好彩投28 VUE2',
    showBackBut:true,
    userInfo:JSON.parse(window.localStorage.getItem('userStorage')) || {},
    gameCode:''
}
export default new Vuex.Store({
    state,
    actions,
    mutations
})