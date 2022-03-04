<template>
  <b-container>
    <NavBar />
    <LoginPage />
  </b-container>
</template>

<script>
export default {
  components: {
    NavBar: () => import("./components/NavBar.vue"),
    LoginPage: () => import("./components/login/LoginPage.vue"),
  },
};
</script>

<style>
</style>