import { MeetupAgendaItem } from './MeetupAgendaItem.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',

  template: `
    <div class="meetup-agenda">
      <meetup-agenda-item 
        class="meetup-agenda__item"  
        v-if="agenda.length"
        v-for="agendaItem in agenda" 
        :agendaItem="agendaItem" />
    </div>`,

  props: {
    agenda: {
      type: Array,
      required: true
    }
  },

  components: {
    MeetupAgendaItem
  }

  // Components

  // Props
};
