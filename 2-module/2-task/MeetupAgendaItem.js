import { agendaItemIcons, agendaItemTitles } from './data.js';

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `<div class="meetup-agenda__item">
              <div class="meetup-agenda__item-col">
                <img class="icon" alt="icon" :src="icon" />
              </div>
              <div class="meetup-agenda__item-col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
              <div class="meetup-agenda__item-col">
                <h5 class="meetup-agenda__title" v-html="title"></h5>
                <p v-if="agendaItem.type === 'talk'">
                  <span>{{agendaItem.speaker}}</span>
                  <span class="meetup-agenda__dot" />
                  <span class="meetup-agenda__lang">{{agendaItem.language}}</span>
                </p>
                <p v-if="agendaItem.description" v-html="agendaItem.description" />
              </div>
            </div>`,

  props: {
    agendaItem: {
      type: Object,
      required: true
    }
  },

  computed: {
    icon() {
      return '/assets/icons/icon-' + agendaItemIcons[this.agendaItem.type] + '.svg'
    },
    title() {
      return this.agendaItem.title ? this.agendaItem.title : agendaItemTitles[this.agendaItem.type]
    }
  },

  // Пропсы

  // Тут помогут computed
};
