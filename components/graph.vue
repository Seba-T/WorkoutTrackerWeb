<template>
  <div class="container">
    <v-chart ref="chart" class="chart" :option="option" />
  </div>
</template>
<script setup lang="ts">
// import { useDark, useToggle } from "@vueuse/core";
// import { EChartsCoreOption } from "echarts/core";
// import { THEME_KEY } from "vue-echarts";
// import * as echarts from "echarts/core";
import { ECBasicOption } from "echarts/types/dist/shared";
import { Ref } from "vue";
import VChart from "vue-echarts";

const chart = ref<HTMLElement>();

defineProps<{
  option: Ref<ECBasicOption>;
}>();
</script>
<style scoped>
.chart {
}
.container {
  width: 100%;
  height: 70vh;
  margin: 0;
}
</style>

<style>
body {
  margin: 0;
}
</style>
