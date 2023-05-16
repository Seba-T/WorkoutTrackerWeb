<script setup lang="ts">
import { THEME_KEY } from 'vue-echarts';
import { useTheme } from 'vuetify'

provide(THEME_KEY, useTheme().global.name.value);

const exerciseData = await useAllExercisePerformance('test');
const options = ref<RichOption[]>();
if (exerciseData !== null)
  options.value = useGraphOption(exerciseData);

</script>
<template>
  <Suspense>
    <template #default>
      <div class="container">
        <Graph v-for="option in options" :key="option.key" :option="option.graph"></Graph>
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
