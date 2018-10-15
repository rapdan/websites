<template>
  <div>
    <h2>Pizza: {{ pizzaName }} / {{ reverseName }}</h2>
    <p>Price: {{ pizzaPrice }}kr</p>
  </div>
</template>

<script>
export default {
    props: {pizzaName: {
      type: String,
      //requaired: true,
      default: 'Pizza Default'
    }, 
    pizzaPrice: Number
    },
    computed:{
      reverseName(){
        return this.pizzaName.split('').reverse().join('')
      }
    }
    }
</script>