import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { Student } from "~~/data/types";
import { useUserStore } from "~~/stores/user";
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

  const { data: onlineNearMe } = await client
    .from("Student")
    .select("*")
    .eq("location", userData?.location)
    .eq("online", true)
    .neq("id", currentUser.id);

  const onlineUsers: Student[] = onlineNearMe as unknown as Student[];

  const ids = onlineUsers.map((o) => o.id);

  const { data: products } = await client
    .from("Product")
    .select("*, Student(*)")
    .in("creator", ids);

  return products;
});
