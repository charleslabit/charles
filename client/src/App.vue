<template>
  <v-app>
    <Header></Header>

    <v-main>
      <!-- <router-view /> -->
      <Home />
      <About />
      <!-- <Services /> -->
      <Experience />
      <Duties></Duties>
      <Skills />
      <Project />
      <!-- <Clients /> -->
      <Review />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
// import Services from "./components/Services";
import Duties from './components/Responsibilities'
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
// import Clients from "./components/Clients";
import Review from "./components/Review";
import Footer from "./components/Footer"
export default {
  name: "App",
  components: {
    Header,
    Home,
    About,
    // Services,
    Duties,
    Experience,
    Skills,
    Project,
    // Clients,
    Review,
    Footer
  },

  data: () => ({
    //
  }),
  created() {
    this.TOGGLE_DRAWER(true);
  },
  methods: {},
};
</script>

<style>
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #bdbdbd;
}
::-webkit-scrollbar-thumb {
  background: #616161;
}
</style>
