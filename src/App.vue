<template>
  <div id="app">
    <app-worker></app-worker>
    <app-counter></app-counter>
  </div>
</template>

<script>
import Worker from './Worker.vue'
import Counter from './Counter.vue'
export default {
  name: 'app',
    components:{
      appWorker: Worker,
      appCounter: Counter
    }
}
</script>


