import ElementPlus from "unplugin-element-plus/vite";

export default defineNuxtConfig({
  ssr: false,
  pages: true,
  build: {
    transpile: [
      "element-plus/es",
      /echarts/,
      /zrender/,
      "~~types/types",
      "vue-echarts",
      "resize-detector",
    ],
  },
  auth: {
    isEnabled: true,
    globalAppMiddleware: true,
  },
  vite: {
    plugins: [ElementPlus()],
  },
  modules: ["@pinia/nuxt", "@sidebase/nuxt-auth"],
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: [
          "element-plus/global",
          "~~types/types",
          "@pinia/nuxt",
          "@sidebase/nuxt-auth/dist/types",
        ],
      },
    },
  },
});
