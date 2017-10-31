import template from '../../templates/components/login.pug'
import '../../stylus/main.styl'
import Vue from 'vue'

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
            console.log(e)
        }
      }
    }
  })
}