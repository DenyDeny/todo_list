import template from './templates/test.pug';
import './stylus/test.styl';
// import './stylus/test.css';
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