<script setup lang="ts">
definePageMeta({
  key: (route) => route.fullPath,
});

const { options, pending } = await useAllExercisePerformance("current User");
</script>
<template>
  <div>
    <Graph
      v-for="option in options"
      :key="option.key"
      :option="option.graph"
      :pending="pending.value"
    ></Graph>
  </div>
</template>
