import template from '../../templates/components/login.pug'
import '../../stylus/main.styl'
import Api from '../libs/api.js'
import {actions} from 'vuex'
import Vue from 'vue'

export default () => {
  return new Vue({
    el: '#app',
    template: template(),
    name: 'app',
    data () {
      return {
        msg: 'Войти',
        email: '',
        api: new Api()
      }
    },
    methods: {
      async findEmail() {
        try {
          await this.api.findByEmail(this.email)
          
        } catch (e) {
            console.log(e)
        }
      }
    }
  })
}