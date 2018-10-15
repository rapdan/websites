<template>
  <div>
    <h2>Pizza: {{ pizzaName }} / {{ reverseName }}</h2>
    <p>Price: {{ pizzaPrice }}kr</p>
    <button @click="changeName">Change Name</button>
    <button @click="changeFunc()">Change pizza</button>
  </div>
</template>

<script>
export default {
    props: ['pizzaName', 'pizzaPrice', 'changeFunc'],
    methods: {changeName() {
        this.pizzaName = 'Margarita',
        this.$emit('nameChanged', this.pizzaName)
      }
    },
    computed:{
      reverseName(){
        return this.pizzaName.split('').reverse().join('')
      }
    }
    }
</script>