<template>
  <div id="app">
      <h1>Parent:{{workerName}}</h1>
    <app-worker :workerName="workerName" :workerAge="workerAge" @nameChanged="workerName=$event"
    :changeFunc1="changeNameToWorker"

    ></app-worker>
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
    methods:{
      changeNameToWorker(){
          this.workerName = 'Student2'
      }
    },
    components:{
      appWorker: Worker
    }
}
</script>


