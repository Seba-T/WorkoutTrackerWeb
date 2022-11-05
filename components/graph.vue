<template>
  <div v-if="pending">I'm loading</div>
  <div v-else class="main">
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
  pending: Ref<boolean>;
}>();
</script>
<style scoped>
.chart {
  height: 50vh;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style>
body {
  margin: 0;
}
</style>
