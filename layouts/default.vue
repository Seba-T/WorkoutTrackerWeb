<template>
    <div>
        <v-navigation-drawer v-model="drawer" app>
            <v-list>
                <v-list-item @click="signOut({ callbackUrl: '/' })">
                    <v-list-item-icon>
                        <v-icon>mdi-logout</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="toggleTheme">
                    <v-list-item-icon>
                        <v-icon>mdi-brightness-6</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="d-inline-flex align-center">
                        <v-list-item-title>Toggle Theme</v-list-item-title>
                        <v-switch v-model="darkTheme" color="primary" class="d-inline-block"></v-switch>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <template v-slot:prepend>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title class="flex-wrapper">
                <NuxtLink to="/" class="logo-text">
                    <span class="workout">Workout</span><span class="tracker">Tracker</span>
                </NuxtLink>
            </v-app-bar-title>

            <template v-slot:append>
                <v-btn icon @click="signOut({ callbackUrl: '/' })">
                    <v-icon>mdi-logout</v-icon>
                </v-btn>
            </template>
        </v-app-bar>

        <v-main>
            <slot />
        </v-main>
    </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';

const { status, signOut } = useAuth();
const theme = useTheme();
const drawer = ref(false);
const darkTheme = ref(theme.global.name.value === 'dark');


const toggleTheme = () => {
    const newTheme = darkTheme.value ? 'light' : 'dark';
    theme.global.name.value = newTheme;
    darkTheme.value = !darkTheme.value;
};
</script>

<style scoped>
.logo-text {
    color: inherit;
    text-decoration: inherit;
    cursor: inherit;
    letter-spacing: -0.1ch;
    font-size: 26px;
}

.workout {
    font-weight: 300;
}

.tracker {
    font-weight: bold;
}
</style>

<style>
.flex-wrapper div {
    display: flex;
    align-items: center;
}
</style>
