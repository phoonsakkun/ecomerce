<template>
  <v-main>
    <v-container fluid>
      <v-card class="mx-auto">
        <v-img :src="selectedProduct.photos[0]" width="300px"></v-img>
        <v-card-title>{{ selectedProduct.title }}</v-card-title>
        <v-card-subtitle>{{ selectedProduct.tags }}</v-card-subtitle>
        <v-card-text>{{ selectedProduct.price }}</v-card-text>
        <v-card-text>{{ selectedProduct.description }}</v-card-text>
        <div class="d-flex">
          <v-card-actions>
            <v-btn @click="addCart">Add to cart</v-btn>
            <v-btn @click="router.push({ name: 'products' })">Back</v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductView",
});
</script>

<script setup>
import { computed } from "vue";
import { useProductsStore } from "../stores/products";
import { useRoute, useRouter } from "vue-router";

const store = useProductsStore();
const route = useRoute();
const router = useRouter();

const selectedProduct = computed(() => {
  return store.products.find((item) => item.id === Number(route.params.id));
});

const addCart = () => {
  store.addToCart(selectedProduct.value);
  router.push({ name: "products" });
};
</script>
