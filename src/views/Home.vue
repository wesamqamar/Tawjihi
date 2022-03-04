<template>
  <div>
    <b-container>
      <NavBar :items="navItems" />
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () => import("./components/home/NavBar.vue"),
  },
  data() {
    return {
      navItems: [
        {
          id: 1,
          label: "المسارات التعليمية",
        },
        {
          id: 2,
          label: "عن الموقع",
        },
        {
          id: 3,
          label: "اتصل بنا",
        },
      ],
    };
  },
};
</script>

<style>
</style>