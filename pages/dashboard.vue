<script setup lang="ts">
definePageMeta({ auth: false })
</script>
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

