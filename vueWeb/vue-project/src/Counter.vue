<template>
    <div>
        <p>Modul zliczajacy pizze:</p>
        <h3>Licznik: {{ counter }}</h3>
        <p>Pizza dla dobrych ludzi za darmo!</p>
    </div>
</template>

<script>
import { eventEmitter } from "./main";
export default {
  data() {
    return {
      counter: 0
    };
  },
  created() {
    eventEmitter.$on("counterUpdated", num => {
      this.counter += num;
    });
  }
};
</script>
<style>
h3 {
  background-color: greenyellow;
  border: 1px solid green;
}
</style>
