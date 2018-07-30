import Vue from 'vue'
import App from './App.vue'
import Worker from './Worker.vue'

Vue.component('app-worker', Worker)

new Vue({
    el: '#app',
    render: h => h(App)
})