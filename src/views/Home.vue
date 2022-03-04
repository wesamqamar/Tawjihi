<template>
  <b-container>
    <NavBar />
    <HomePage />
  </b-container>
</template>

<script>
export default {
  components: {
    NavBar: () => import("./components/home/NavBar.vue"),
    HomePage: () => import("./components/home/HomePage.vue"),
  },
};
</script>

<style>
</style>