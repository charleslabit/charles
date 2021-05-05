<template>
  <div class="home" id="home">
    <div :style="screenHeight" class="text-center body">
      <h2 class="text-sm-h3 font-weight-thin text-md-h2 white--text">
        Charles Kenneth C. Labit
      </h2>
      <h1 class="text-sm-h3 text-md-h2 font-weight-thin white--text">
        FULL STACK DEVELOPER
      </h1>
      <p class="text-h6 font-weight-thin hidden-sm-and-down white--text">
        If it doesn't scare you, you're probably not dreaming big enough. - Tory
        Burch
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    screenHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xl":
          return "height: 100vh;";
        case "lg":
          return "height: 50vh;";
        case "md":
          return "height: 50vh;";
        case "sm":
          return "height: 0vh;";
        default:
          return "height: 0vh;";
      }
    },
  },
};
</script>

<style>
.body {
  /* height: 100vh; */
  background-image: url("../assets/background.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
