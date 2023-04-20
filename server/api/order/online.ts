import { products } from "~~/data/products";

export default defineEventHandler(() => {
  return products.filter(p => p.user.online === true);
});
