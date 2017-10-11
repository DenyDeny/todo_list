import template from '../templates/main.pug';
import '../stylus/main.styl';
import Vue from 'vue';

export default () => {
  return new Vue({
    el: '#app',
    template: template(),
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  })
}