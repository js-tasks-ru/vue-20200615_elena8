import { MeetupCover } from './MeetupCover.js';
import { MeetupDescription } from './MeetupDescription.js';
import { MeetupAgenda } from './MeetupAgenda.js';
import { MeetupInfo } from './MeetupInfo.js';

export const MeetupView = {
  name: 'MeetupView',

  template: `
    <div>
      <meetup-cover :title="meetup.title" link="https://course-vue.javascript.ru/api/images/2" />
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description" />

            <h3>Программа</h3>
            <meetup-agenda :agenda="meetup.agenda" />
          </div>
          <div class="meetup__aside">
            <meetup-info :meetup="meetup" />
          </div>
        </div>
      </div>
    </div>`,

    props: {
      meetup: {
        type: Object,
        required: true
      }
    },

    components: {
      MeetupCover,
      MeetupDescription,
      MeetupAgenda,
      MeetupInfo
    }

  // Components

  // Props
};
