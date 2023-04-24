import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~~/types/supabase";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);

  const q = getQuery(event);
  const id = Number.parseInt(q.id as string);

  const { data: ordersConfirmed } = await client
    .from("Order")
    .select("*, Product(*)")
    .eq("student_uid", id)
    .eq("confirmed", "confirmed")
    .order("created_at", { ascending: false });

  return ordersConfirmed;
});
