<template>
  <button type="button" @click="handleCount">{{count}}</button>
</template>

<script>
  export default {
    name: 'counter-button',
    props: {
      count: {
        type: Number,
        default: 0
      }
    },
    data: function () {
      return {
        counter: this.count
      }
    },
    methods: {
      handleCount: function() {
        this.counter++
        this.$emit('increment', this.counter)
      }
    },
    model: {
      prop: 'count',
      event: 'increment'
    },

  }
</script>