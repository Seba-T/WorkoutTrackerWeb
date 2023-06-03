<script setup lang="ts">
import { ECBasicOption } from 'echarts/types/dist/shared';
import { THEME_KEY } from 'vue-echarts';
import { useTheme, useDisplay } from 'vuetify'

provide(THEME_KEY, useTheme().global.name.value);
const currentTheme = useTheme();
const { mobile } = useDisplay();
const exerciseData = await useAllExercisePerformance('test');
const strikeRecord = await useStrikeRecord();
const options = ref<RichOption[]>();
const strikeOption = ref<ECBasicOption>();
const backgroundColor = ref<string | undefined>();
if (exerciseData !== null) {
    options.value = useExerciseGraphOptions(exerciseData, backgroundColor, mobile);
    strikeOption.value = useStrikeGraphOption(strikeRecord, backgroundColor, mobile);
}

watch(
    () => currentTheme.global.name.value,
    (newVal) => {
        if (newVal == 'dark') {
            backgroundColor.value = 'rgb(18,18,18)';
        }
        else {
            backgroundColor.value = undefined;
        }
    }
);


</script>
<template>
    <Suspense>
        <template #default>
            <div class="container">
                <Graph v-for="option in options" :key="option.key" :option="option.graph"></Graph>
                <Graph v-if="strikeOption != undefined" :option="(strikeOption)"></Graph>
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
