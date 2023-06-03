<template>
    <div class="container">
        <v-chart ref="chart" class="chart" :option="option" autoresize :theme="theme" />
    </div>
</template>
<script setup lang="ts">
import { ECBasicOption } from "echarts/types/dist/shared";
import VChart, { THEME_KEY } from "vue-echarts";
import { useTheme } from "vuetify/lib/framework.mjs";


const currentTheme = useTheme();
const chart = ref<HTMLElement>();
const theme = ref<string>(currentTheme.global.name.value);

watch(
    () => currentTheme.global.name.value,
    (newVal) => {
        theme.value = newVal;
    }
);

defineProps<{
    option: ECBasicOption;
}>();
</script>
<style scoped>
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
