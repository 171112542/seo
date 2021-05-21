import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const colorPrimary = '#fa3b17';
const colorSecondary = '#ffffff';

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colorPrimary,
        secondary: colorSecondary,
      },
    },
  },
});
