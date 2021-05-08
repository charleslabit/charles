<template>
  <div id="home">
    <v-app-bar app color="#03002d" dark outlined>
      <v-app-bar-nav-icon class="hidden-lg-and-up" large @click="TOGGLE_DRAWER(drawer)"></v-app-bar-nav-icon>

    <div class="mx-auto hidden-md-and-down">
     <v-btn v-for="item in navItems" :key="item.title" :href="item.href" color="transparent" >
     {{item.title}}
     </v-btn>
    </div>
      <v-toolbar-title> </v-toolbar-title>
    </v-app-bar>
    <Drawer></Drawer>
 
  </div>
</template>

<script>
import Drawer from '../components/Header-Drawer'
export default {
  components:{
   Drawer,
  },
  data() {
    return {
      navItems: [
         { title: "Home", href: "#home" },
        { title: "About Me", href: "#about" },
        // { title: "Services", href: "#services" },
        { title: "Experience", href: "#experience" },
        { title: "Skills and Education", href: "#skills" },
        { title: "Project", href: "#project" },
        // { title: "Clients", href: "#clients" },
        { title: "Review", href: "#review" },
      ],
      icons: [
        {
          icon: "mdi-facebook",
          href: "https://facebook.com/charleskieeeee",
          target: "_blank",
        },
        {
          icon: "mdi-linkedin",
          href: "https://www.linkedin.com/in/charles-kenneth-labit-731a941b2/",
          target: "_blank",
        },
        {
          icon: "mdi-github",
          href: "https://github.com/charleslabit",
          target: "_blank",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.el__href {
  border-bottom: none !important;
}