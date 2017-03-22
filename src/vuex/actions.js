import axios from 'axios'
import { HTTP_URL_API } from '../data/api'
import { Toast } from 'mint-ui'
export default {
    CHANGE_TITLE({ commit }, title) {
        commit('CHANGE_TITLE', { title })
    },
    USER_LOGIN({ commit }, params) {
        return new Promise((resolve, reject) => {
            axios.post(HTTP_URL_API.USER_LOGIN, params, {
                headers:
                {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (response) {
                if (response.data.code == 0) {
                    var res = JSON.parse(response.data.data);
                    let user =
                        {
                            userName: res.User.LoginName,
                            nickName: res.User.NickName ? res.User.NickName : '',
                            userId: res.User.Id,
                            tikect: res.Ticket,
                            amount: res.User.BalanceAmount,
                            cellPhone:res.User.Phone,
                            bankAmount:res.User.AccountAmount,
                            email:res.User.email
                        };
                    commit('USER_LOGIN', user)
                    resolve(user)
                }
                else {
                    Toast(response.data.message)
                }
            }).catch(function (error) {
                console.log(error);
            });
        })
    },
    USER_LOGOUT({ commit }) {
        commit('USER_LOGOUT')
    },
    USER_CHANGE({commit},user){
        commit('USER_CHANGE',user)
    },
    GLOBAL_TIMER({commit},timerId){
        commit('GLOBAL_TIMER',timerId)
    }
}