import { defineStore } from "pinia";
import { Product, emptyCart } from "~~/data/types";

export const useCart = defineStore("cart", () => {
  const cart = ref(emptyCart);
  function add(p: Product) {
    cart.value.products.push(p);
    cart.value.total = cart.value.products.reduce(
      (accumulator, product) => accumulator + product.price,
      0
    );
  }
  function remove(p: Product) {
    cart.value.products = cart.value.products.filter((x) => x.id !== p.id);
    cart.value.total = cart.value.total - p.price;
  }

  const getCartItems = () => cart.value.products.length;
  return { cart, add, remove, getCartItems };
});
