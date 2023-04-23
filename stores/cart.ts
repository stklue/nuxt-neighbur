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
  function add(p: Product, id: string, q: number) {
    cart.value.products.push({
      id: createRandId(),
      userId: id,
      quantity: q,
      total: q * p.price!,
      rating: 4,
      confirmed: "processing",
      reason: "",
      product: {
        available: p.available,
        created_at: p.created_at,
        description: p.description,
        expire_at: "",
        id: p.id,
        image: p.image,
        pname: p.pname,
        plate: p.plate,
        price: p.price,
        recurring: p.recurring,
        type: p.type,
        user_product: p.user_product,
      },
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
