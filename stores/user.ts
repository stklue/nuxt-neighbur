import { defineStore } from "pinia";
import createRandId, { User, emptyUser } from "~~/data/types";
import { useStorage } from "@vueuse/core";

export const useUserStore = defineStore("user", () => {
  
  const user: Ref<User> = ref(
    // emptyUser
    // process.server ? '' : !!localStorage.getItem('userDetails')
    JSON.parse(String(localStorage.getItem("currentUser"))) || emptyUser
  );

  const newUser = (u: User) => {
    user.value.avatar = u.avatar;
    user.value.password = u.password;
    user.value.location = u.location;
    user.value.online = u.online;
    user.value.name = u.name;
    localStorage.setItem("currentUser", JSON.stringify(user.value));
  };

  const updateEmail = (email: string) => {
    user.value.email = email;
    user.value.id = createRandId();
  };
  return { user, newUser, updateEmail };
});
