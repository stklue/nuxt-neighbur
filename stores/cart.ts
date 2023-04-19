import { defineStore } from "pinia";
import { Product, emptyCart } from "~~/data/types";

export const useCart = defineStore("cart", () => {
  const cart = ref(emptyCart);
  function add(p: Product) {
    cart.value.products.push(p);
  }
  function remove(p: Product) {
    cart.value.products = cart.value.products.filter(x => x.id !== p.id);
  }

  const getCartItems = () => cart.value.products.length;
  return { cart, add, remove, getCartItems };
});

