/*
  Полезные функции по работе с датой можно описать вне Vue компонента
 */
 import { getDaysInMonth, getDayPosition, getDayWithOffset } from './utils.js'

export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  template: `<div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button class="rangepicker__selector-control-left" @click="prevMonth"></button>
          <div>{{ monthLabel }} {{year}}</div>
          <button class="rangepicker__selector-control-right" @click="nextMonth"></button>
        </div>
      </div>
      <div class="rangepicker__date-grid">
          <div 
            v-for="day in days"
            :class="{
              'rangepicker__cell': true, 
              'rangepicker__cell_inactive': day.inactive 
            }"
          >
            {{day.day}}
            <a class="rangepicker__event" v-for="el in day.events">{{el.title}}</a>
          </div>
      </div>
    </div>
  </div>`,

  props: {
    meetups: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      year: (new Date).getFullYear(),
      month: (new Date).getMonth() + 1
    }
  },

  computed: {
    monthLabel() {
      return (new Date(this.year+'-'+this.month+'-1')).toLocaleString(navigator.language, { month: "long" })
    },
    days() {
      const daysInMonth = getDaysInMonth(this.month, this.year)
      const previousMonthDays = getDayPosition('1', this.month, this.year)
      const offset = 0 - previousMonthDays;
      const lastDayPosition = getDayPosition(daysInMonth, this.month, this.year)
      const nextMonthDays = offset + (6 - lastDayPosition)
      const total = daysInMonth + previousMonthDays + nextMonthDays;
      const days = [];
      
      for (let i = offset; i < total; i++) {
        let day = i + 1
        let month = this.month
        let year = this.year

        if (i < 0) {
          day = getDayWithOffset(this.month, this.year, 1, i)
          month = this.month-1
        }
        if (i >= daysInMonth) {
          day = i+1-daysInMonth
          month = this.month+1
        }

        days.push({
          day,
          inactive: i < 0 || i >= daysInMonth,
          events: this.meetups.filter((meetup) => {
            const date = new Date(year+'-'+month+'-'+day)
            return meetup.date >= date.getTime() &&  meetup.date <= date.getTime() + 1000*60*60*24
          })
        });
      }
      return days;  
    },

  },

  methods: {
    nextMonth() {
      if (this.month === 12) {
        this.month = 1
        this.year++
      } else {
        this.month++
      }
    },
    prevMonth() {
      if (this.month === 1) {
        this.month = 12
        this.year--
      } else {
        this.month--
      }
    }
  }


  // Пропсы

  // В качестве локального состояния требуется хранить что-то,
  // что позволит определить текущий показывающийся месяц.
  // Изначально должен показываться текущий месяц

  // Вычислимые свойства помогут как с получением списка дней, так и с выводом информации

  // Методы понадобятся для переключения между месяцами
};
