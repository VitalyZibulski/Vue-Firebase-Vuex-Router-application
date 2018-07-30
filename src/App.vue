<template>
  <div id="app">
      <h1>{{msg}}</h1>
    <app-worker></app-worker>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


