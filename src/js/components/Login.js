import template from '../../templates/components/login.pug'
import '../../stylus/main.styl'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


export default () => {
  return new Vue({
    el: '#app',
    template: template(),
    name: 'app',
    data () {
      return {
        msg: 'Войти',
        email: ''
      }
    },
    methods: {

      async findEmail() {
        try {
          await this.getEmail(this.email)
          
        } catch (e) {
          
        }
      }
    }
  })
}