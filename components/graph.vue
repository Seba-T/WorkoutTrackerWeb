<template>
  <div v-if="pending">I'm loading</div>
  <div v-else>
    <v-chart
      v-for="option in options"
      :key="option.key"
      class="chart"
      :option="option.graph"
    />
  </div>
</template>
<script setup lang="ts">
import VChart from "vue-echarts";

const { options, pending } = await useAllExercisePerformance("current User");
</script>
<style scoped>
.chart {
  height: 100vh;
}
</style>

<style>
body {
  margin: 0;
}
</style>
