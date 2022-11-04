import ElementPlus from "unplugin-element-plus/vite";

export default defineNuxtConfig({
  build: {
    transpile: ["element-plus/es", /echarts/, /zrender/],
  },
  vite: {
    plugins: [ElementPlus()],
  },
  modules: [
    // ...
    "@pinia/nuxt",
  ],
});
