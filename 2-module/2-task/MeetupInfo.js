export const MeetupInfo = {
  template: `<ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ item.organizer }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ item.place }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="item.datetime">{{ item.localeDate }}</time>
      </li>
    </ul>`,

  props: {
    meetup: {
      type: Object,
      required: true
    }
  },

  computed: {
    item() {
      return {
        ...this.meetup,
        localeDate: new Date(this.meetup.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
        datetime: new Date(this.meetup.date).toLocaleString('en-US', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        }).split('/').reverse().join('-'), 
      }
    }
  },

  // Пропсы

  // computed
};
