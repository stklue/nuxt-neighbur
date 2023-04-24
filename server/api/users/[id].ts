import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~~/types/supabase";

export default defineEventHandler(async (event) => {
  const id = Number.parseInt(event.context.params!.id) as number;

  const client = serverSupabaseClient<Database>(event);

  const { data: user } = await client
    .from("Student")
    .select("*")
    .eq("id", id)
    .single();

  return user;
});
