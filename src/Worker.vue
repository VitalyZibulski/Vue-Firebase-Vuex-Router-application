<template>
  <div>
    <h2>worker Name: {{ workerName }} / {{ reverseName }}</h2>
    <p>worker Price: {{ workerAge }}</p>
    <button @click="changeName">Change Name</button>
    <button @click="changeFunc()">Change From Parent</button>
  </div>
</template>

<script>
    export default {
        props: ['workerName', 'workerPrice'],
        methods: {
            changeName () {
                this.workerName = 'Stundent1'
                this.$emit('nameChanged', this.workerName)
            }
        },
        computed: {
            reverseName () {
                return this.workerName.split('').reverse().join('')
            }
        }
    }
</script>