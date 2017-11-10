import template from '../../templates/components/login.pug'
import '../../stylus/main.styl'
import Registr from './Registr'
import Api from '../libs/api.js'
import {actions} from 'vuex'
import router from '../routes/auth'
import Vue from 'vue'

export default () => {
  return new Vue({
    el: '#app',
    template: template(),
    name: 'app',
    router,
    components: {
      Registr
    },
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
            this.$router.push('/registr');
        }
      }
    }
  })
}