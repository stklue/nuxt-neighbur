import { usePaymentStore } from "~~/stores/getStarted";
import { useUserStore } from "~~/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const store = usePaymentStore();
  const { user } = useUserStore();
  
  const { pay } = store;
  if (user.id === -1) {
    return navigateTo("/introduction");
  }
});
