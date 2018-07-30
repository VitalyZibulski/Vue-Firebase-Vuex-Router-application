<template>
  <div id="app">
      <h1>Parent:{{workerName}}</h1>
    <app-worker :workerName="workerName" :workerAge="workerAge" @nameChanged="workerName=$event"></app-worker>
  </div>
</template>

<script>
import Worker from './Worker.vue'
export default {
  name: 'app',
  data () {
    return {
      workerName: 'workerName from App.vue',
      workerAge: '100'
    }
  },
    components:{
      appWorker: Worker
    }
}
</script>


