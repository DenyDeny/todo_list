import template from '../../templates/components/login.pug'
import '../../stylus/main.styl'
import Vue from 'vue'
import axios from 'axios'

export default () => {
  return new Vue({
    el: '#app',
    template: template(),
    name: 'app',
    data () {
      return {
        msg: 'Войти',
        postBody: '',
        errors: []
      }
    }
  })
}