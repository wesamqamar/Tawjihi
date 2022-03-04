<template>
  <b-navbar toggleable="lg">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-button pill class="bg-blue ms-5 loginBtn">تسجيل الدخول</b-button>
      <b-navbar-nav class="ml-auto primaryColor fw-bold">
        <b-nav-item v-for="(item, index) in items" :key="index"
         class="link" href="#">{{item.label}}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-brand class="logo" href="#">
      <Logo />
    </b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {
    
  data() {
    return {
      items: [
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