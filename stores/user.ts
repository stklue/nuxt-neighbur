import { defineStore, createPinia , Pinia } from "pinia";
import { User, emptyUser } from "~~/data/types";




export const useUserStore = defineStore("user", () => {
  const user: Ref<User> = ref(emptyUser);

  const newUser = (u: User) => {
    user.value.id = u.id;
    user.value.location = u.location;
    user.value.online = u.online;
    user.value.name = u.name;
    localStorage.setItem("currentUser", JSON.stringify(user.value));
  };

  const updateEmail = (email: string) => {
    user.value.email = email;
  };
  return { user, newUser, updateEmail };
});
