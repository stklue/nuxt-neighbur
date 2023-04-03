import { usePaymentStore } from "~~/stores/getStarted";

export default defineNuxtRouteMiddleware((to, from) => {
  // const user = useSupabaseUser();
  const store = usePaymentStore();
  const { pay } = store;
  if (!pay) {
    return navigateTo("/introduction");
  }
});
