export default defineNuxtConfig({
  ssr: false,
  pages: true,
  build: {
    transpile: [
      "vuetify",
      /echarts/,
      /zrender/,
      "~~types/types",
      "vue-echarts",
      "resize-detector",
    ],
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],

  auth: {
    isEnabled: true,
    globalAppMiddleware: true,
    provider: {
      type: "authjs",
    },
  },

  modules: ["@pinia/nuxt", "@sidebase/nuxt-auth"],
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: [
          "~~types/types",
          "@pinia/nuxt",
          "@sidebase/nuxt-auth/dist/types",
        ],
      },
    },
  },
});
