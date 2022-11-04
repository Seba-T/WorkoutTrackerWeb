<template>
  <div v-if="pending">I'm loading</div>
  <div v-else class="main">
    <v-chart
      ref="chart"
      v-for="option in options"
      :key="option.key"
      class="chart"
      :option="option.graph"
    />
  </div>
</template>
<script setup lang="ts">
// import { useDark, useToggle } from "@vueuse/core";
// import { EChartsCoreOption } from "echarts/core";
// import { THEME_KEY } from "vue-echarts";
// import * as echarts from "echarts/core";
import VChart from "vue-echarts";

const chart = ref<HTMLElement>();

// echarts.dispose(chart.value);

// const isDark = useDark();
// const toggleDark = useToggle(isDark);

const { options, pending } = await useAllExercisePerformance("current User");
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
