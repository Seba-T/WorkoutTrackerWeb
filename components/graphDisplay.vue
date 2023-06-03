<script setup lang="ts">
import { ECBasicOption } from 'echarts/types/dist/shared';
import { THEME_KEY } from 'vue-echarts';
import { useTheme, useDisplay } from 'vuetify'

provide(THEME_KEY, useTheme().global.name.value);
const currentTheme = useTheme();
const { mobile } = useDisplay();
let exerciseData: ExerciseData[] | null = null;
let strikeRecord: StrikeRecordData[] | null = null;

try {
    exerciseData = await useAllExercisePerformance('test');
    strikeRecord = await useStrikeRecord();
} catch (e) {
    console.log(e);
}

const options = ref<RichOption[]>();
const strikeOption = ref<ECBasicOption>();
const backgroundColor = ref<string | undefined>();
if (exerciseData !== null && strikeRecord !== null) {
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
    <div class="container">
        <Graph v-for="option in options" :key="option.key" :option="option.graph"></Graph>
        <Graph v-if="strikeOption != undefined" :option="(strikeOption)"></Graph>
    </div>
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
