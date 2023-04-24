import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { Database } from "~~/types/supabase";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);
  const serverUser = await serverSupabaseUser(event);

  const id = parseInt(event.context.params!.userId) as number;
  const q = getQuery(event);

  const { data: ordersPending } = await client
    .from("Order")
    .select("*, Student(*)")
    .eq("student_uid", "63eb0b49-1fe8-4056-8058-c95bb737e4b0");

  console.log("DATA: ", ordersPending);

  return ordersPending;
});
