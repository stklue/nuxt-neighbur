import { defineStore } from "pinia";
import createRandId, {
  OrderItem,
  OrderItemData,
  Product,
  User,
  emptyCart,
  emptyOrderItem,
} from "~~/data/types";
import { useUserStore } from "./user";

export const useCart = defineStore("cart", () => {
  const cart = ref(emptyCart);
  const currentOrder: Ref<OrderItem> = ref(emptyOrderItem);
  const { user } = useUserStore();
  function add(p: Product, id: string, q: number) {
    currentOrder.value = {
      id: createRandId(),
      user_id: -1,
      uid: id,
      quantity: q,
      total: q * p.price!,
      rating: 4,
      confirmed: "processing",
      reason: "",
      order_user: p.user_product!,
      // product: {
      //   available: p.available,
      //   created_at: p.created_at,
      //   description: p.description,
      //   expire_at: "",
      //   id: p.id,
      //   image: p.image,
      //   pname: p.pname,
      //   plate: p.plate,
      //   price: p.price,
      //   recurring: p.recurring,
      //   type: p.type,
      //   user_product: p.user_product,
      // },
    };
    cart.value.products.push(currentOrder.value);
    cart.value.total = cart.value.products.reduce(
      (accumulator, product) => accumulator + product.total,
      0
    );
  }
  function remove(o: OrderItemData) {
    cart.value.products = cart.value.products.filter((x) => x.id !== o.id);
    cart.value.total = cart.value.total - o.total;
  }

  const getCurrentOrder = () => currentOrder.value

  const getCartItems = () => cart.value.products.length;
  return { cart, add, remove, getCartItems, currentOrder, getCurrentOrder };
});
