<template>
  <div id="app">
    <h2 v-colored:background="'#454545'" v-colored:color="'#eee'">{{ msg }}</h2>
    <h2 v-colored:font-size="'30px'" v-colored:background="'#952525'" v-colored:color="'#fff'">{{ msg }}</h2>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis harum quibusdam quas sunt maxime 
      unde illum consequuntur cupiditate ab iste.</p>
    <h2>{{ msg | uppercase }}</h2>
    <h2>{{ msg | dodaj }}</h2>
    <h2>{{ msg | dodaj | uppercase }}</h2>
    <input type="text" v-model="search">
    <ul>
      <li v-for="name in filteredNames" :key="name">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Dyrektywy',
      search: '',
      names: ['Darek', 'Jarek', 'Zosia', 'Gosia']
    }
  },
  computed: {
    filteredNames () {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.search) !== -1
      })
    }
  },
  filters: {
    uppercase (value) {
      return value.toUpperCase()
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
