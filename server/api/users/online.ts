import usersJson from "~~/data/users.json";
import { User } from "~~/data/types";
export default defineEventHandler((event) => {
  const q = getQuery(event);
  const users: User[] = usersJson;

  return users.filter((u) => u.online === true && u.location === q.location);
});
