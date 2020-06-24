import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `<meetup-view :meetup="meetup" />`,

  components: {
    MeetupView
  },

  data() {
    return {
      meetup: {
        agenda:[]
      },
    }
  },

  async mounted() {
    this.meetup = await fetchMeetup(MEETUP_ID)
  },

  methods: {
  },
  // Components

  // Data

  // Mounted

  // Methods
};
