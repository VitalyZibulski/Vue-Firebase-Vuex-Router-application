<template>
  <div>
    <h2>worker Name: {{ workerName }} / {{ reverseName }}</h2>
    <p>worker Price: {{ workerAge }}</p>
    <button @click="changeName">Change Name</button>
    <button @click="changeFunc1()">Change From Parent</button>
    <button @click="updateCounter">Updated counter</button>
  </div>
</template>

<script>
    import {evenEmitter} from './main'
    export default {
        props: ['workerName', 'workerPrice', 'changeFunc1'],
        methods: {
            changeName () {
                this.workerName = 'Stundent1'
                this.$emit('nameChanged', this.workerName)
            },
            updateCounter(){
                evenEmitter.$emit('counterUpdated',5)
            }
        },
        computed: {
            reverseName () {
                return this.workerName.split('').reverse().join('')
            }
        }
    }
</script>