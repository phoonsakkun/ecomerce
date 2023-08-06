import { ref } from "vue";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("product", {
  state: () => ({ products: [], cart: [] }),
  actions: {
    fetchProductFromApi() {
      fetch("http://localhost:3000")
        .then((res) => res.json())
        .then((json) => {
          this.products = json.products;
        });
    },
    addToCart(item) {
      this.cart.push(item);
    },
    removeItemFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
    },
  },
});
