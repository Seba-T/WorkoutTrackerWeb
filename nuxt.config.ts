import { staticBlock } from "@babel/types";
import ElementPlus from "unplugin-element-plus/vite";

export default defineNuxtConfig({
  ssr: true,
  routeRules: {
    "/allData/**": { static: true },
  },
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
        types: ["element-plus/global", "~~types/types", "@pinia/nuxt"],
      },
    },
  },
});
