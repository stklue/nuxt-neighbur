export default defineNuxtRouteMiddleware(async (to, from) => {
 
  const authClient = useSupabaseAuthClient()
  const isUser = await authClient.auth.getUser()
  console.log("This is the User", isUser.data);
  
  if (isUser.data.user == null) {
    return navigateTo("/introduction");
  }
});
