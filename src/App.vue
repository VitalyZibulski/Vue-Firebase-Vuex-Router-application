<template>
  <div>
    <h2>{{title}}</h2>
    <h2>{{title | uppercase}}</h2>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Learn filters',
            }
        },
         filters:{
            uppercase(value){
                return value.toUpperCase()
            }
         }
  }

</script>

<style scoped>

</style>