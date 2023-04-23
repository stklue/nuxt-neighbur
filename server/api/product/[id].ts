import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~~/types/supabase";

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params!.id) as number;

  const client = serverSupabaseClient<Database>(event);

  const { data: product } = await client
    .from("Product")
    .select("*")
    .eq("id", id)
    .single();

  return product;
});
