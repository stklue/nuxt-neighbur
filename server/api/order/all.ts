import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~~/types/supabase";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);

  const q = getQuery(event);
  const id = Number.parseInt(q.id as string);

  const { data: ordersPending } = await client
    .from("Order")
    .select("*, Product(*)")
    .eq("order_creator", id).order('created_at', { ascending: false });

  return ordersPending;
});
