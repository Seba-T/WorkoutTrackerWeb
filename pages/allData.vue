<script setup lang="ts">
const options = await useAllExercisePerformance("current User");
</script>
<template>
  <Suspense>
    <template #default>
      <div class="container">
        <Graph
          v-for="option in options"
          :key="option.key"
          :option="option.graph"
        ></Graph>
      </div>
    </template>
    <template #fallback>
      <p>We are loading!!!</p>
    </template>
  </Suspense>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
