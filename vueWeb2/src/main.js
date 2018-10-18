import Vue from 'vue'
import App from './App.vue'
import MyDirective from './color'

Vue.directive('colored', MyDirective)

new Vue({
  el: '#app',
  render: h => h(App)
})
