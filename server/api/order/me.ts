import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { Database } from "~~/types/supabase";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);

  const q = getQuery(event);

  const { data: ordersPending } = await client
    .from("Order")
    .select("*, Product(id, pname, price)")
    .eq("order_user", q.id);

  return ordersPending;
});
