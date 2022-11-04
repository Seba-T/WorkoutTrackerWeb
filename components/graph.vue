<template>
  <div v-if="pending">I'm loading</div>
  <div v-else class="main">
    <el-button type="success" plain @click="toggleDark()"
      >Change the color dear</el-button
    >

    <v-chart
      v-for="option in options"
      :key="option.key"
      class="chart"
      :option="option.graph"
    />
  </div>
</template>
<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

import VChart from "vue-echarts";
import { ElButton } from "element-plus";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const { options, pending } = await useAllExercisePerformance(
  "current User",
  isDark.value
);
</script>
<style scoped>
.chart {
  height: 100vh;
}

.main {
  display: inline

}
</style>

<style>
body {
  margin: 0;
}
</style>
