import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { Database } from "~~/types/supabase";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);
  const serverUser = await serverSupabaseUser(event);

  const q = getQuery(event);

  const { data: ordersPending } = await client
    .from("Order")
    .select("*, Product(id, pname, price)")
    .eq("order_user", q.id);

  const { data: userPaying } = await client
    .from("Order")
    .select("*, User(name)")
    .eq("uid", serverUser?.id)
    
    console.log("Paying: ", userPaying);
    

  return ordersPending;
});
