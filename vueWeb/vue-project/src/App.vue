<template>
  <div id="app">
    <h2>{{ msg }}</h2>
    <app-pizza></app-pizza>
  </div>
</template>

<script>
import Pizza from './Pizza.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Vue.js App'
    }
  },
  components: {
    appPizza: Pizza
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
