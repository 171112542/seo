<template>
  <v-container
    fill-height
    fluid
    class="home"
  >
    <v-row
      class="px-8 mt-n16"
      justify="center"
      align="center"
    >
      <v-col cols="6">
        <h1
          class="text-h1 home__title"
        >
          Group Buy Marketplace
        </h1>
        <p
          class="text-body-1 home__subtitle mb-8"
        >
          Situs jual beli dengan konsep <i>group buy</i> atau belanja bersama untuk
          mendapatkan diskon
        </p>
        <div class="home__button">
          <v-btn
            href="https://play.google.com/store"
            target="_blank"
            text
            width="160"
            class="mb-2"
            elevation="2"
          >
            Get It on Google Play
          </v-btn>
          <v-btn
            href="https://www.apple.com/id/app-store/"
            target="_blank"
            text
            width="160"
            elevation="2"
          >
            Get It on Apple Store
          </v-btn>
        </div>
      </v-col>
      <v-col
        cols="6"
        class="justify-center"
      >
        <v-img
          src="../assets/img/online-shopping.png"
          alt="Shopping Online Bersama"
          class="center"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
  }),
};
</script>
