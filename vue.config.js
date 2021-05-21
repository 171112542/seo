module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: "@import '@/assets/scss/index.scss'",
      },
      scss: {
        additionalData: "@import '@/assets/scss/index.scss';",
      },
    },
  },
};
