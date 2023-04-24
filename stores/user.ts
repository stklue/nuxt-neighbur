import { defineStore } from "pinia";
import { Student, emptyUser } from "~~/data/types";

export const useUserStore = defineStore("user", () => {
  const _user: Ref<Student> = ref(emptyUser);

  const newUser = (u: Student) => {
    _user.value.id = u.id;
    _user.value.user_id = u.user_id;
    _user.value.location = u.location;
    _user.value.online = u.online;
    _user.value.name = u.name;
  };

  const updateEmail = (email: string) => {
    _user.value.email = email;
  };

  const user = () => _user.value;

  function updateUser(u: Student) {
    _user.value = u;
  }
  return { user, newUser, updateEmail, updateUser };
});
