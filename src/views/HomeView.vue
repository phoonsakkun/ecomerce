<script setup>
import { onMounted } from "vue";
// import router from "../router";

// const products = ref([]);
// onMounted(async () => {
//   const response = await axiosClient.get("/");
//   console.log(response.data);
//   products.value = response.data.products;
// });
// const onClick = (id) => {
//   router.push("product/" + id);
// };
import { useProductsStore } from "../stores/products";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useProductsStore();

const onClick = (id) => {
  router.push({ name: "productById", params: { id } });
};

onMounted(async () => {
  store.fetchProductFromApi();
});
</script>

<template>
  <v-main>
    <v-container fluid>
      <div>
        <div class="d-flex flex-wrap gap-4">
          <v-card
            class="mx-auto mb-4"
            width="240"
            v-for="product in store.products"
            :key="product.id"
            @click="onClick(product.id)"
          >
            <v-img :src="product.photos[0]" height="200px"></v-img>
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-subtitle>{{ product.tags }}</v-card-subtitle>
            <v-card-text>{{ product.price }}</v-card-text>
          </v-card>
        </div>
      </div>
    </v-container>
  </v-main>
</template>
