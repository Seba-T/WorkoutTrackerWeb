<script setup lang="ts"></script>
<template>
  <div>
    <Suspense>
      <template #default>
        <GraphDisplay></GraphDisplay>
      </template>
      <template #fallback>
        <p>We are loading!!!</p>
      </template>
    </Suspense>
  </div>
</template>

<style scoped></style>
