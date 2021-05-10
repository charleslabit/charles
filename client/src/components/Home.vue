<template>
  <div
    :style="screenHeight"
    class="text-center font-weight-thin body center-body "
  >
    <div class="animate__animated animate__fadeInDownBig">
   
      <h2 class="text-sm-h3  text-md-h2 white--text ">
        Charles Kenneth C. Labit
      </h2>
      <h1 class="text-sm-h3 text-md-h2  white--text">
        WEB DEVELOPER
      </h1>
      <p class="text-h6  hidden-sm-and-down white--text">
        If it doesn't scare you, you're probably not dreaming big enough. - Tory
        Burch
      </p>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
    };
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

.center-body {
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
