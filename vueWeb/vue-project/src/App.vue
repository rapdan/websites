<template>
  <div id="app">
    <h2>Parent:  {{ pizzaName }}</h2>
    <app-pizza :pizzaName="pizzaName" :pizzaPrice="pizzaPrice" 
    :changeFunc="changeNameToPizza" 
    @nameChanged="pizzaName = $event" 
    @counterUpdated="counter=$event"></app-pizza>
    <app-counter></app-counter>
    <app-wyglad>
      <h2 slot="title"> {{ pizzaName }}</h2>
      <p slot="text"> Bardzo dobra pizza </p>
    </app-wyglad>
  </div>
</template>

<script>
import Pizza from './Pizza.vue'
import Counter from './Counter.vue'
import Wyglad from './Wyglad.vue'
export default {
  name: 'app',
  data () {
    return {
      pizzaName: 'Wiejska z App.vue',
      pizzaPrice: 300
    }
  },
  methods: {
    changeNameToPizza(){
      this.pizzaName='Pizza'
    }
  },
  components: {
    appPizza: Pizza,
    appCounter: Counter,
    appWyglad: Wyglad
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
