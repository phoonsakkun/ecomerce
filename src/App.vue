<script setup>
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { useUserStore } from "./stores/user";
import { useProductsStore } from "./stores/products";
import { useRouter } from "vue-router";

const { theme } = storeToRefs(useUserStore());
const { ToggleTheme } = useUserStore();

const store = useProductsStore();
const router = useRouter();
</script>

<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-btn @click="router.push({ name: 'products' })">
        <v-app-bar-title>My app</v-app-bar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="router.push({ name: 'cart' })">
        <v-app-bar-title>Shopping cart {{ store.cart.length }}</v-app-bar-title>
      </v-btn>
      <v-btn
        :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="ToggleTheme"
      >
      </v-btn>
    </v-app-bar>

    <RouterView />
  </v-app>
</template>
