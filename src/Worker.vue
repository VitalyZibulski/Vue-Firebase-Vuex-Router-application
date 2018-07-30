<template>
  <div>
    <h2>Worker Name: {{ workerName }} / {{ reverseName }}</h2>
    <p>Worker Price: {{ workerAge }}</p>
  </div>
</template>

<script>
    export default {
        // props: ['workerName', 'workerPrice'],
        // props: {
        //   workerName: String,
        //   workerAge: Number
        // },
        props: {
            pizzaName: {
                type: String,
                // required: true,
                default: 'Default Worker Name'
            },
            pizzaPrice: Number
        },
        computed: {
            reverseName () {
                return this.pizzaName.split('').reverse().join('')
            }
        }
    }
</script>

