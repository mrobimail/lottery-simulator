import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors';
import 'vuetify/dist/vuetify.min.css';
import en from 'vuetify/es5/locale/en';

Vue.use(Vuetify);

const opts = {
  lang: {
    locales: { en },
    current: 'en',
  },
  theme: {
    themes: {
      light: {
        primary: colors.green.lighten3,
      },
    },
  },
};

export default new Vuetify(opts);
