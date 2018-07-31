<template>
  <div>
      <h2 v-colored:background="'purple'">{{ workerName }}</h2>
      <h2 v-colored:color="'orange'">{{ workerName }}</h2>
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