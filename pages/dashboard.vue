<script setup lang="ts">
definePageMeta({ auth: false })
</script>
<template>
    <Suspense>
        <template #default>
            <GraphDisplay></GraphDisplay>
        </template>
        <template #fallback>
            <v-layout class="fill-height align-center justify-center" style="margin-top: 40px;">
                <v-flex xs12 sm6 md4>
                    <v-alert colored-border color="info" elevation="2" variant="tonal">
                        <v-layout align-center justify-start d-flex>
                            <v-progress-circular indeterminate color="blue lighten-1"></v-progress-circular>
                            <div class="ml-3" style="color: black;">
                                Hold tight, we're loading your data...
                            </div>
                        </v-layout>
                    </v-alert>
                </v-flex>
            </v-layout>
        </template>
    </Suspense>
</template>

