import { products } from "~~/data/products";
import { Product, RequestMeal, UserRequest } from "~~/data/types";
import { User } from "~~/data/types";
import usersJson from "~~/data/users.json";

export default defineEventHandler((event) => {
  const allUsers: User[] = usersJson;
  const id = parseInt(event.context.params!.id) as number;
  return allUsers.find((user) => user.id === id);
});
