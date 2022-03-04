<template>
  <div>
    <b-container>
      <b-navbar toggleable="lg">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-button pill class="bg-blue ms-5 loginBtn">تسجيل الدخول</b-button>
          <b-navbar-nav class="ml-auto primaryColor fw-bold">
            <b-nav-item class="link" href="#">المسارات التعليمية</b-nav-item>
            <b-nav-item class="link" href="#">عن الموقع</b-nav-item>
            <b-nav-item class="link" href="#">اتصل بنا</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

        <b-navbar-brand class="logo" href="#">
          <h3
            class="
              d-inline-block
              mx-2
              logoFont
              text-uppercase
              logoText
              secondaryColor
            "
          >
            tawjihi
          </h3>
          <img width="50" height="50" src="/img/logo.png" alt="" />
        </b-navbar-brand>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>