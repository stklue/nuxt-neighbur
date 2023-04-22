import { OrderItem, Product, User } from "~~/data/types";
import orderJson from "~~/data/orders.json";
import productsJson from "~~/data/products.json";
import usersJson from "~~/data/users.json";

export interface AggData<T, S, U> {
  o: T;
  p: S;
  u?: U;
}

export default defineEventHandler((event) => {
  const orders: OrderItem[] = orderJson;
  const products: Product[] = productsJson;
  const users: User[] = usersJson;
  const id = parseInt(event.context.params!.userId) as number;
  const recent = orders.filter((order) => order.userId === id);
  const relatedProduct = products.filter((p) =>
    recent.map((r) => r.productId).includes(p.id)
  );
  const relatedUsers = users.filter((p) =>
    recent.map((r) => r.chefId).includes(p.id)
  );
  let r: AggData<OrderItem, Product, User>[] = [];
  for (let i = 0; i < recent.length; i++) {
    r.push({ o: recent[i], p: relatedProduct[i], u: relatedUsers[i] });
  }
  return r;
});
