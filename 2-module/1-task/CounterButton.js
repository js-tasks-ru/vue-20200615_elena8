export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: '<button type="button" @click="handleCount">{{this.counter}}</button>',
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


  // Компонент должен иметь пропс

  // Компонент должен иметь модель

  // Шаблон лучше иметь максимально простым, а логику выносить в методы
};
