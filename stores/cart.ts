import { defineStore } from "pinia";
import createRandId, { OrderItem, Product, emptyCart } from "~~/data/types";

export const useCart = defineStore("cart", () => {
  const cart = ref(emptyCart);
  function add(p: Product) {
    cart.value.products.push({product: p, id: createRandId(), total: p.price, quantity: 0});
    cart.value.total = cart.value.products.reduce(
      (accumulator, product) => accumulator + product.total,
      0
    );
  }
  function remove(o: OrderItem) {
    cart.value.products = cart.value.products.filter((x) => x.id !== o.id);
    cart.value.total = cart.value.total - o.total;
  }

  const getCartItems = () => cart.value.products.length;
  return { cart, add, remove, getCartItems };
});
