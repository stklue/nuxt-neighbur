export default defineNuxtRouteMiddleware(async (to, from) => {
 
  const authClient = useSupabaseAuthClient()
  const isUser = await authClient.auth.getUser()
  console.log("User", isUser.data);
  
  if (!isUser.data) {
    return navigateTo("/introduction");
  }
});
