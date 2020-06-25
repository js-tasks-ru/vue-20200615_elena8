export const MeetupCover = {
  template: `<div class="meetup-cover" :style="link ? \`--bg-url: url('\${link}')\` : ''">
        <h1 class="meetup-cover__title" v-if="title">{{ title }}</h1>
    </div>`,

  props: {
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
};
