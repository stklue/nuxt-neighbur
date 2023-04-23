import productsJson from "~~/data/products.json";
import usersJson from "~~/data/users.json";
import { Product, User } from "~~/data/types";
import { AggData } from "../order/[userId]";
import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { Database } from "~~/types/supabase";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);
  const serverUser = await serverSupabaseUser(event);

  const { data: userData } = await client
    .from("User")
    .select("*")
    .eq("id", serverUser?.id)
    .single();
  const { data: onlineNearMe } = await client
    .from("User")
    .select("*")
    .eq("location", userData?.location)
    .eq("online", true).neq("id", userData?.id);

  const { data: products } = await client
    .from("Product")
    .select("*")
    .eq("user_id", serverUser?.id);
  console.log("This is the data: ", userData?.location);

  // const q = getQuery(event);

  // const products: Product[] = productsJson;
  // const onlineUsers = users.filter(
  //   (u) => u.online === true && u.location === q.location
  // );
  // const onlineProd = products.filter((p) =>
  //   onlineUsers.map((o) => o.id).includes(p.userId)
  // );
  // let r: AggData<Product, User, User>[] = [];
  // for (let i = 0; i < onlineUsers.length; i++) {
  //   r.push({ o: onlineProd[i], p: onlineUsers[i] });
  // }
  // return r;
  return onlineNearMe;
});
