import Vue from 'vue'
import Login from '../components/Login'
import Registr from '../components/Registr'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Login, name: 'login' },
        { path: '/registr', component: Registr, name: 'registr' }
    ]
})