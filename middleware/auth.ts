export default defineNuxtRouteMiddleware(async (to, from) => {
 
  const authClient = useSupabaseAuthClient()
  const isUser = await authClient.auth.getUser()

  if (!isUser.data) {
    return navigateTo("/introduction");
  }
});
