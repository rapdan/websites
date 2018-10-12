<template>
  <div>
    <h2>Pizza: {{ pizzaName }}</h2>
    <p>Price: {{ pizzaPrice }}kr</p>
  </div>
</template>

<script>
export default {
    props: ['pizzaName', 'pizzaPrice'],
    }
</script>