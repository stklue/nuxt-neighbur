import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { Database } from "~~/types/supabase";

export default defineEventHandler(async (event) => {
  // const user_id = event.context.params!.id;

  const client = serverSupabaseClient<Database>(event);
  const serverUser = await serverSupabaseUser(event);

  const { data: user } = await client
    .from("Student")
    .select("*")
    .eq("user_id", serverUser?.id)
    .single();
  return user;
});
