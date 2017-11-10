import template from '../../templates/components/entry.pug'
import '../../stylus/main.styl'
import Api from '../libs/api.js'
import Login from'./Login'
import {actions} from 'vuex'
import Vue from 'vue'

export default Vue.component('Entry', {
  template: template(),
  data() {
      return {
          
      }
  },

  mounted() {
    console.log('mounted entr')
  }
})