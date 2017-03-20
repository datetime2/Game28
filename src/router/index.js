import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', name: 'loading', component: require('../views/loading') },
    { path: '/index', name: 'index', component: require('../views/index')},
    { path: '/game', name: 'game', component: require('../views/game/index') },
    { path: '/game/detail/:type/:text', name: 'detail', component: require('../views/game/detail'),meta: { requiresAuth: true }},
    { path: '/game/statics', name: 'statics', component: require('../views/game/statics'),meta: { requiresAuth: true }},
    { path: '/sort', name: 'sort', component: require('../views/sort') },
    { path: '/login', name: 'login', component: require('../views/login') },
    { path: '/register', name: 'register', component: require('../views/register') },
    { path: '/news', name: 'news', component: require('../views/news/index') },
    { path: '/news/detail/:id', name: 'newsdetail', component: require('../views/news/detail') },
    { path: '/agent', name: 'agent', component: require('../views/agent') },
    { path: '/activity', name: 'activity', component: require('../views/activity') },
    { path: '/lottery', name: 'lottery', component: require('../views/lottery') },
    { path: '/user', name: 'user', component: require('../views/user/index'),meta: { requiresAuth: true }},
    { path: '/user/sign', name: 'sign', component: require('../views/user/sign'),meta: { requiresAuth: true }},
    { path: '/user/information', name: 'information', component: require('../views/user/information'),meta: { requiresAuth: true }},
    { path: '/user/relief', name: 'relief', component: require('../views/user/relief'),meta: { requiresAuth: true }}, 
    { path: '/user/bank', name: 'bank', component: require('../views/user/bank'),meta: { requiresAuth: true }},    
    { path: '/user/card', name: 'card', component: require('../views/user/card'),meta: { requiresAuth: true }},    
    { path: '/user/exchange', name: 'exchange', component: require('../views/user/exchange'),meta: { requiresAuth: true }},    
    { path: '/user/lottery', name: 'lottery', component: require('../views/user/lottery'),meta: { requiresAuth: true }},    
    { path: '/user/modify', name: 'modify', component: require('../views/user/modify'),meta: { requiresAuth: true }},    
    { path: '/user/myreffer', name: 'myreffer', component: require('../views/user/myreffer'),meta: { requiresAuth: true }},    
    { path: '/user/operate', name: 'operate', component: require('../views/user/operate'),meta: { requiresAuth: true }},    
    { path: '/user/profit', name: 'profit', component: require('../views/user/profit'),meta: { requiresAuth: true }},    
    { path: '/user/ranking', name: 'ranking', component: require('../views/user/ranking'),meta: { requiresAuth: true }},    
    { path: '/user/reffer', name: 'reffer', component: require('../views/user/reffer'),meta: { requiresAuth: true }},    
    { path: '/user/salary', name: 'salary', component: require('../views/user/salary'),meta: { requiresAuth: true }},    
    { path: '/user/score', name: 'score', component: require('../views/user/score'),meta: { requiresAuth: true }} 
  ]
})