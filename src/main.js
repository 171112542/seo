import Vue from 'vue';
import Index from './Index.vue';
import Blog from './Blog.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(Index),
}).$mount('#app');

new Vue({
  vuetify,
  render: (h) => h(Blog),
}).$mount('#blog');
