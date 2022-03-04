<template>
  <div>
    <b-navbar toggleable="lg">
      <b-button pill class="bg-blue ms-5 loginBtn">تسجيل الدخول</b-button>
              <b-dropdown class="dropdownMenu m-md-2" text="">
          <b-dropdown-item v-for="(item, index) in items" :key="index">{{
            item.label
          }}</b-dropdown-item>
        </b-dropdown>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto primaryColor fw-bold">
          <b-nav-item
            v-for="(item, index) in items"
            :key="index"
            class="link"
            href="#"
            >{{ item.label }}</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-brand class="logo" href="#">
        <Logo />
      </b-navbar-brand>
    </b-navbar>
  </div>
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