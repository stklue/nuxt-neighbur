import productsJson from "~~/data/products.json";
import usersJson from "~~/data/users.json";
import { Product, User } from "~~/data/types";
import { AggData } from "../order/[userId]";

export default defineEventHandler((event) => {
  const id = parseInt(event.context.params!.id) as number;
  const products: Product[] = productsJson;
  const users: User[] = usersJson;
  let r = {};
  const prod = products.find((prod) => prod.id === id);
  r = {
    o: prod,
    p: users.find((u) => u.id === prod?.userId),
  };
  return r as AggData<Product, User, User>;
});
