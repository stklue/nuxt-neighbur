export default defineNuxtRouteMiddleware((to, from) => {
  // const user = useSupabaseUser();
  const user  =  false
  if (!user) {
    return navigateTo("/introduction");
  }
});
