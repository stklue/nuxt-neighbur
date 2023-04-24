import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { Student } from "~~/data/types";
import { Database } from "~~/types/supabase";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);
  const serverUser = await serverSupabaseUser(event);

  // Get the users Student data
  const { data: userData } = await client
    .from("Student")
    .select("*")
    .eq("user_id", serverUser?.id)
    .single();

  const currentUser: Student = userData as unknown as Student;
  console.log("User", currentUser);

  const q = getQuery(event);

  const { data: ordersPending } = await client
    .from("Order")
    .select("*, Student(*)")
    .eq("order_creator", currentUser.id);

  return ordersPending;
});
