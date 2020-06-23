import Vue from '/vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение митапа для митапа
 * @param meetup - объект с описанием митапа (и параметром meetupId)
 * @return {string} - ссылка на изображение митапа
 */
function getMeetupCoverLink(meetup) {
  if (!meetup.imageId) return null;
  return `${API_URL}/images/${meetup.imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов элементов программы
 */
const agendaItemTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов элементов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

export const app = new Vue({
  el: '#app',

  data: {
    item: {
      agenda:[]
    },
  },

  mounted() {
    this.fetchMeetup(MEETUP_ID)
  },

  computed: {
    meetup() {
      return {
        ...this.item,
        cover: getMeetupCoverLink(this.item),
        localeDate: new Date(this.item.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
        agenda: this.item.agenda.map((el) => ({
          ...el,
          icon: agendaItemIcons[el.type],
          defaultTitle: agendaItemTitles[el.type]
        }))
      }
    }
    //
  },

  methods: {
    fetchMeetup(id) {
      fetch(`${API_URL}/meetups/${id}`)
        .then((res) => res.json())
        .then((response) => this.item = response)
        .catch((error) => console.log(error))
    }
  },
});
