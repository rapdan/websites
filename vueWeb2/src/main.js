import Vue from 'vue'
import App from './App.vue'
import MyDirective from './color'
import ListNames from './ListNames'

Vue.component('app-list', ListNames)
Vue.directive('colored', MyDirective)
Vue.filter('dodaj', (value) => {
  return value + " z filtrami"
})

new Vue({
  el: '#app',
  render: h => h(App)
})
