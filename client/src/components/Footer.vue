<template>
  <div id="footer" class="pt-10">
    <v-card class="text-center body">
      <v-btn
        class="mt-5"
        dark
        text
        v-for="item in navItems"
        :key="item.title"
        :href="item.href"
        color="white"
      >
        {{ item.title }}
      </v-btn>
      <v-row dense no-gutters justify="center">
        <v-btn
          class="mt-5"
          dark
          text
          v-for="item in icons"
          :key="item.icon"
          :href="item.href"
          color="white"
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-row>

      <span style="color: white" class="pt-5">
        <span>Charles Kenneth C. Labit</span>
        <h6 class="mx-4">⛪️ Kawit, Cavite</h6>
        <h6
          class="mx-4"
          v-clipboard="'charleslabit@gmail.com'"
          @click="copyText()"
          style="cursor:pointer"
        >
          📧 charleslabit@gmail.com
        </h6>
      </span>
    </v-card>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
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
  computed: {},
  methods: {
    copyText() {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Copied to clipboard",
        showConfirmButton: false,
        timer: 800,
      });
    },
  },
};
</script>

<style></style>
