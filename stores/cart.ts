import { defineStore } from "pinia";
import createRandId, {
  OrderItemData,
  Product,
  User,
  emptyCart,
} from "~~/data/types";
import { useUserStore } from "./user";

export const useCart = defineStore("cart", () => {
  const cart = ref(emptyCart);
  const { user } = useUserStore();
  function add(p: Product, u: User) {
    cart.value.products.push({
      id: createRandId(),
      userId: user.id,
      chefId: u.id,
      product: p,
      total: p.price,
      quantity: 0,
      reason: "",
      confirmed: "",
      rating: 0,
    });
    cart.value.total = cart.value.products.reduce(
      (accumulator, product) => accumulator + product.total,
      0
    );
  }
  function remove(o: OrderItemData) {
    cart.value.products = cart.value.products.filter((x) => x.id !== o.id);
    cart.value.total = cart.value.total - o.total;
  }

  const getCartItems = () => cart.value.products.length;
  return { cart, add, remove, getCartItems };
});
