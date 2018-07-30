<template>
  <div>
    <h2>Worker Name: {{ workerName }}</h2>
    <p>Worker Price: {{ workerAge }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      workerName: 'Worker1',
      workerAge: 1
    }
  }
}
</script>
