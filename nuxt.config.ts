export default defineNuxtConfig({
  ssr: false,
  pages: true,
  webpack: {
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 1000000,
      },
    },
  },
  build: {
    transpile: [
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
    enableGlobalAppMiddleware: false,
    defaultProvider: "github",
    origin: process.env.AUTH_ORIGIN,
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
