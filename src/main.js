import Vue from 'vue'
// import App from './App.vue'

var component = {
    template: `
    <div>
      <h2>Счетчик: {{ counter }}</h2>
      <button @click="add">+1</button>
    </div>
  `,
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        add: function() {
            this.counter++
        }
    }
}

new Vue({
    el: '#app',
    components: {
        'my-counter': component
    }
    // render: h => h(App)
});

new Vue({
    el: '#app2',
    components: {
        myCounter: component
    }
    // render: h => h(App)
})
