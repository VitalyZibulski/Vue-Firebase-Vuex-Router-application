<template>
  <div>
    <app-pizza>
      <h2 slot="title">{{ workerName }}</h2>
      <p slot="text">Lorem, ipsum dolor.</p>
    </app-pizza>
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