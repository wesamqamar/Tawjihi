<template>
  <b-container>
    <NavBar :isNavbar="true" />
    <HomePage />
  </b-container>
</template>

<script>
export default {
  components: {
    NavBar: () => import("./components/NavBar.vue"),
    HomePage: () => import("./components/home/HomePage.vue"),
  },
};
</script>

<style>
</style>