import ElementPlus from "unplugin-element-plus/vite";

export default defineNuxtConfig({
  pages: true,
  build: {
    transpile: ["element-plus/es", /echarts/, /zrender/, "~~types/types"],
  },
  vite: {
    plugins: [ElementPlus()],
  },
  modules: [
    // ...
    "@pinia/nuxt",
  ],
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["element-plus/global", "~~types/types"],
      },
    },
  },
});
