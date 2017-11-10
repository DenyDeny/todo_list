import Vue from 'vue'
import Vuex from 'vuex'
import settings from '../libs/api.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userProfile: {},
        notes: []
    },

    actions: {

    },

    mutations: {
        someMutation (state) {
            
        }
    },

    getters: {

    },

    modules: {

    }
})
export default store