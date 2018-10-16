<template>
  <div>
    <h3>Pizza: {{ pizzaName }} / {{ reverseName }}</h3>
    <p>Price: {{ pizzaPrice }}kr</p>
    <button @click="changeName">Change Name</button>
    <button @click="changeFunc()">Change pizza</button>
    <button @click="updateCounter">Update counter</button>
  </div>
</template>

<script>
import {eventEmitter} from './main'
export default {
    props: ['pizzaName', 'pizzaPrice', 'changeFunc'],
    methods: {
      changeName() {
        this.pizzaName = 'Margarita',
        this.$emit('nameChanged', this.pizzaName)
      },
      updateCounter () {
        eventEmitter.$emit('counterUpdated', 2)
      }
    },
    computed:{
      reverseName(){
        return this.pizzaName.split('').reverse().join('')
      }
    }
    }
</script>

<style scoped>
  p {
    background-color: burlywood;
  }
</style>
