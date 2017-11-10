import template from '../../templates/components/registr.pug'
import '../../stylus/main.styl'
import Api from '../libs/api.js'
import Login from'./Login'
import {actions} from 'vuex'
import Vue from 'vue'

export default Vue.component('Registr', {
  template: template(),
  data() {
      return {
          
      }
  },

  mounted() {
    console.log('mounted reg')
  }
})