import { defineStore } from "pinia";
import { User, emptyUser } from "~~/data/types";

export const useUserStore = defineStore("user", () => {
  const user = ref(emptyUser);
  const email = ref(emptyUser.email);
  const password = ref(emptyUser.password);

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

export const useUserrStore = defineStore("user-store", () => {
  const user: Ref<User> = ref(emptyUser);
  const newUser = (u: User) => {
    user.value = u;
  };
  return { user, newUser };
});
