<template>
  <v-main>
    <v-container fluid class="w-full">
      <h1>Shopping cart</h1>
      <div v-if="!store.cart.length" style="text-align: center">
        <h1>Empty cart...</h1>
      </div>
      <div v-else>
        <v-card
          class="mx-auto mb-4 d-flex align-center"
          width="full"
          v-for="item in store.cart"
          :key="item.id"
        >
          <v-card-title>{{ item.title }}</v-card-title>
          <v-img height="200px" :src="item.photos[0]"></v-img>
          <v-btn @click="removeFormCart(item.id)" class="mr-4">Remove</v-btn>
        </v-card>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CartView",
});
</script>

<script setup>
import { useProductsStore } from "@/stores/products";

const store = useProductsStore();

const removeFormCart = (id) => {
  store.removeItemFromCart(id);
};
</script>
