import { User } from "~~/data/types";
import usersJson from "~~/data/users.json";

export default defineEventHandler((event) => {
  // users?location=Obz Square
  const q = getQuery(event);
  const allUsers: User[] = usersJson;
  return allUsers.filter((u) => u.location === q.location);
});
