import { User } from "~~/data/types";
import { usePaymentStore } from "~~/stores/getStarted";
import { useUserStore } from "~~/stores/user";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  const userX = client.from("User").select("id").eq("id", user.value?.id).single()
  // const { user } = useUserStore();
  console.log("User:", userX);

  if (user.value === null) {
    return navigateTo("/introduction");
  } 
});
