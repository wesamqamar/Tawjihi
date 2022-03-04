<template>
  <div>
    <b-container>
      <NavBar />
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () => import("./components/home/NavBar.vue"),
  },
};
</script>

<style>
</style>