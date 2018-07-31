<template>
  <div>
      <h2 v-colored>{{ workerName }}</h2>
  </div>
</template>

<script>
    import Worker from './Worker.vue'
    export default {
        data () {
            return {
                workerName: 'Student1'
            }
        },
        components: {
            appWorker: Worker
        }
    }
</script>

<style scoped>

</style>