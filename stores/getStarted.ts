import { defineStore } from "pinia";

export const useGetStartedStore = defineStore("get-started", () => {
  const email = ref("");
  function updateEmail(e: string) {
    email.value = e;
  }

  const getEmail = () => email;
  return { email, updateEmail, getEmail };
});

export const usePaymentStore = defineStore("payment", () => {
  const pay = ref(true);
  function payed() {
    pay.value = true;
  }
  const getPay = () => pay.value;
  return {pay, payed, getPay };
});
