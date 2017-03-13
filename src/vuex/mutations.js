const CHANGE_TITLE = 'CHANGE_TITLE'
const SHOW_BACK_BUT = 'SHOW_BACK_BUT'
const USER_LOGIN = 'USER_LOGIN'
const USER_LOGOUT = 'USER_LOGOUT'
const USER_REGISTER = 'USER_REGISTER'
const USER_CHANGE='USER_CHANGE'
import axios from 'axios'
import { Toast } from 'mint-ui'
import { HTTP_URL_API } from '../data/api'
export default {
    [CHANGE_TITLE](state, title) {
        state.title = title;
    },
    [SHOW_BACK_BUT](state, show) {
        state.showBackBut = show;
    },
    [USER_LOGIN](state, user) {
        window.localStorage.setItem('userStorage', JSON.stringify(user))
        state.userInfo = user;
    },
    [USER_LOGOUT](state, payload) {
        window.localStorage.removeItem('userStorage')
        state.userInfo = {};
    },
    [USER_REGISTER](state, user) {
        state.userInfo = user
    },
    [USER_CHANGE](state,user){
        window.localStorage.setItem('userStorage', JSON.stringify(user))
        state.userInfo = user;
    }
}