<template>
  <div>
    <NavBar />
    <div>
      <!-- <img style="width:800px;height:500px;" src="/img/home/bg.png" alt="" /> -->
    </div>
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