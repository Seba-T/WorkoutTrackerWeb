<template>
  <div>
    <el-button type="success" plain>This is a test</el-button>
    <graph></graph>
    <!-- <NuxtLayout :name="layout"></NuxtLayout> -->
  </div>
</template>
<script setup lang="ts">
import { ElButton } from "element-plus";

definePageMeta({
  layout: false,
});
</script>
