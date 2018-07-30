<template>
  <div>
    <h2>Worker Name: {{ workerName }}</h2>
    <p>Worker Age: {{ workerAge }}</p>
  </div>
</template>

<script>
export default {
    props:['workerName','workerAge']
}


</script>
