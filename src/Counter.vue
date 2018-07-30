<template>
  <h1>Counter: {{counter}}</h1>
</template>

<script>
  import {evenEmitter} from "./main";
  export default {
        data(){
            return{
                counter:0
            }
        },
      created(){
            evenEmitter.$on('counterUpdated',(num) => {
                this.counter += num
            })
      }
    }
</script>