<template>
  <div>
    <h2>{{title}}</h2>

    <input type="text" v-model="search">

    <ul>
      <li v-for="name in filteredNames" :key="name">{{name}}</li>
    </ul>

    <hr>

    <app-list></app-list>
  </div>
</template>

<script>
  import ListMixin from './listMixin'
    export default {
        data () {
            return {
                title: 'Learn filters',
            }
        },
          mixins:[ListMixin]
  }

</script>

<style scoped>

</style>