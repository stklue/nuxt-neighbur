import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const email = ref("");
  const password = ref("");
  function updateEmail(e: string) {
    email.value = e;
  }
  function updatePass(e: string) {
    password.value = e;
  }

  const getEmail = () => email;
  const getPass = () => password;

  return { email, updateEmail, getEmail, password, updatePass, getPass };
});
