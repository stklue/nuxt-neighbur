import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~~/types/supabase";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);

  const id = Number.parseInt(event.context.params?.index as string);

  const { data: orders } = await client
    .from("Order")
    .select("*")
    .eq("student_uid", id);
    

  return orders;
});
