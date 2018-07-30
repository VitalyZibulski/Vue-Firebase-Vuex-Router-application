<template>
  <div id="app">
      <h1>Parent:{{workerName}}</h1>
    <app-worker :workerName="workerName" :workerAge="workerAge" @nameChanged="workerName=$event"
    :changeFunc1="changeNameToWorker"
    @counterUpdated="counter=$event">
    </app-worker>
    <app-counter></app-counter>
  </div>
</template>

<script>
import Worker from './Worker.vue'
import Counter from './Counter.vue'
export default {
  name: 'app',
  data () {
    return {
      workerName: 'workerName from App.vue',
      workerAge: '100'
    }
  },
    methods:{
      changeNameToWorker(){
          this.workerName = 'Student2'
      }
    },
    components:{
      appWorker: Worker,
      appCounter: Counter
    }
}
</script>


