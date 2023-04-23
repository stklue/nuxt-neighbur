import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~~/types/supabase";

export default defineEventHandler(async (event) => {
  const id = event.context.params!.id as string;

  const client = serverSupabaseClient<Database>(event);

  const { data: user } = await client
    .from("User")
    .select("*")
    .eq("id", id)
    .single();

  return user;
});
