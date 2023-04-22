import productsJson from "~~/data/products.json";
import usersJson from "~~/data/users.json";
import { Product, User } from "~~/data/types";
import { AggData } from "../order/[userId]";
export default defineEventHandler((event) => {
  const q = getQuery(event);
  const users: User[] = usersJson;
  const products: Product[] = productsJson;
  const onlineUsers = users.filter(
    (u) => u.online === true && u.location === q.location
  );
  const onlineProd = products.filter((p) =>
    onlineUsers.map((o) => o.id).includes(p.userId)
  );
  let r: AggData<Product, User, User>[] = [];
  for (let i = 0; i < onlineUsers.length; i++) {
    r.push({ o: onlineProd[i], p: onlineUsers[i] });
  }
  return r;
});
