<template>
  <div>
    <h2>Pizza: {{ pizzaName }}</h2>
    <p>Price: {{ priceName }}kr</p>
  </div>
</template>

<script>
export default {
    name: 'app-pizza',
  data () {
    return {
      pizzaName: 'Wiejska',
      priceName: 230
    }
  }
}
</script>