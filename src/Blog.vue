<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      collapse-on-scroll
      elevate-on-scroll
    >
      <div class="d-flex align-center">
        <v-img
          alt="Komuniti Logo"
          class="shrink app-bar__logo mx-4"
          contain
          src="./assets/img/komuniti-white-logo.png"
          transition="scale-transition"
          width="80"
          height="64"
        />
      </div>

      <v-btn
        href="https://komuniti.co.id/blog/ssd-murah-baik-2021.html"
        text
        color="secondary"
        class="ml-12"
      >
        <span>Blog</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <SSD />
    </v-main>
  </v-app>
</template>

<script>
import SSD from './components/blog/SSD.vue';

export default {
  name: 'Blog',

  components: {
    SSD,
  },

  data: () => ({
    //
  }),
};
</script>
