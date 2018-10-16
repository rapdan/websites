<template>
    <h3>Licznik: {{ counter }}</h3>
</template>

<script>
import {eventEmitter} from './main'
export default {
    data () {
        return {
            counter: 0
        }
    },
    created () {
        eventEmitter.$on('counterUpdated', (num) => {
            this.counter += num
        })
    }
}
</script>
<style>
    h3 {background-color: greenyellow;
    border: 1px solid green;}
</style>
