import { defineStore } from "pinia";
import createRandId, {
  Cart,
  OrderItem,
  Product as product,
  emptyOrderItem,
} from "~~/data/types";

type OrderProduct = OrderItem & {
  Product?: product;
};
export const emptyCart: Cart<OrderProduct> = {
  products: [],
  total: 0,
};

export const useCart = defineStore("cart", () => {
  const cart: Ref<Cart<OrderProduct>> = ref(emptyCart);
  const currentOrder: Ref<OrderProduct> = ref(emptyOrderItem);
  const currentOrderWithoutProduct: Ref<OrderProduct> = ref(emptyOrderItem);
  function add(p: product, id: number, q: number) {
    currentOrder.value = {
      id: createRandId(),
      student_uid: id,
      quantity: q,
      total: q * p.price!,
      rating: 4,
      confirmed: "processing",
      reason: "",
      order_creator: p.creator!,
      order_product: p.id!,
      Product: p,
    };
    currentOrderWithoutProduct.value = {
      id: createRandId(),
      student_uid: id,
      quantity: q,
      total: q * p.price!,
      rating: 4,
      confirmed: "processing",
      reason: "",
      order_creator: p.creator!,
      order_product: p.id!,
    };
    cart.value.products.push(currentOrder.value);
    cart.value.total = cart.value.products.reduce(
      (accumulator, product) => accumulator + product.total,
      0
    );
  }
  function remove(o: OrderItem) {
    cart.value.products = cart.value.products.filter((x) => x.id !== o.id);
    cart.value.total = cart.value.total - o.total;
  }

  const getCurrentOrder = () => currentOrder.value;
  const getOrderWithProduct = () => currentOrderWithoutProduct.value;

  const getCartItems = () => cart.value.products.length ?? 0;
  const updateCart = (c: Cart<OrderProduct>) => {
    cart.value = c;
  };

  const getTotal = () => {
    return cart.value.products.reduce(
      (accumulator, product) => accumulator + (product.total * product.quantity),
      0
    );
  };

  const updateOrderItems = (o: OrderItem[]) => {
    if (o.length > 0) {
      cart.value.products = o;
    }
  };

  return {
    cart,
    add,
    remove,
    getCartItems,
    currentOrder,
    getCurrentOrder,
    updateCart,
    updateOrderItems,
    getOrderWithProduct,
    getTotal
  };
});
