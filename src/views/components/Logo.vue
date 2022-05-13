<template>
  <div @click="goToPage('Home')">
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
  </div>
</template>

<script>
export default {
  methods: {
    goToPage(home) {
      this.$router.push({name: home})
    }
  }
};
</script>

<style>
</style>