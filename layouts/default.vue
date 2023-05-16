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
          <v-list-item-content>
            <v-list-item-title>Toggle Theme</v-list-item-title>
            <v-switch v-model="darkTheme" color="primary"></v-switch>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="ml-4">
        <NuxtLink to="/" class="logo-text">
          WorkoutTracker
        </NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="signOut({ callbackUrl: '/' })">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
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
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
</style>
