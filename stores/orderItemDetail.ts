import { defineStore } from "pinia";
import { Product } from "~~/data/types";



export const useProductsStore = defineStore("products", () => {
  const products: Ref<Product[]> = ref([]);
  const getProducts = () => products;

  const setProducts = (p: Product[]) => {
    if (products.value.length === 0) {
      p.forEach((x) => products.value.push(x));
    }
  };

  return { products, setProducts, getProducts };
});
