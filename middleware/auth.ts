import { usePaymentStore } from "~~/stores/getStarted";

export default defineNuxtRouteMiddleware((to, from) => {
  const store = usePaymentStore();
  const { pay } = store;
  if (!pay) {
    return navigateTo("/introduction");
  }
});
