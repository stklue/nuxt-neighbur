import { defineStore } from "pinia";
import createRandId, {
  Cart,
  OrderItem,
  Product,
  User,
  emptyCart,
  emptyOrderItem,
} from "~~/data/types";

export const useCart = defineStore("cart", () => {
  const cart = ref(emptyCart);
  const currentOrder: Ref<OrderItem> = ref(emptyOrderItem);
  function add(p: Product, id: string, q: number) {
    currentOrder.value = {
      id: createRandId(),
      uid: id,
      quantity: q,
      total: q * p.price!,
      rating: 4,
      confirmed: "processing",
      reason: "",
      order_user: p.user_product!,
      order_product: p.id,
    };
    cart.value.products.push(currentOrder.value);
    cart.value.total = cart.value.products.reduce(
      (accumulator, product) => accumulator + product.total,
      0
    );
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  function remove(o: OrderItem) {
    cart.value.products = cart.value.products.filter((x) => x.id !== o.id);
    cart.value.total = cart.value.total - o.total;
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const getCurrentOrder = () => currentOrder.value;

  const getCartItems = () => cart.value.products.length;
  const updateCart = (c: Cart) => {
    cart.value = c;
  };

  return {
    cart,
    add,
    remove,
    getCartItems,
    currentOrder,
    getCurrentOrder,
    updateCart
  };
});
