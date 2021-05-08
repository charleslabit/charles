<template>
<nav>
  <v-navigation-drawer
    app
    color="#03002d"
    width="280px"
    :value="drawer"
    class="hidden-lg-and-up"
  >
    <a href="#home" style="text-decoration: none">
      <div class="text-center white--text">
        <div class="mt-3">
          <v-avatar size="120">
            <img src="../../public/profile.jpg" alt="John" />
          </v-avatar>
        </div>
        <div class="my-2 text-md-h4 text-sm-h5 font-weight-thin">
          Charles Kenneth C. Labit
        </div>
        <div class="my-2 text-md-h5 text-sm-h6 font-weight-thin">
          Web Developer
        </div>
      </div>
    </a>
    <v-divider color="white"></v-divider>
    <v-list>
      <v-list-item-group class="my-4">
        <v-list-item
          v-for="(item, i) in navItems"
          :key="i"
          :href="item.href"
          :target="item.target"
        >
          <v-list-item-content>
            <v-list-item-title
              class="white--text text-center text-md-h6 text-sm-body-1 font-weight-thin"
            >
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-row justify="center">
      <v-list v-for="(item, i) in icons" :key="i">
        <v-list-item :href="item.href">
          <v-icon color="white">{{ item.icon }}</v-icon>
        </v-list-item>
      </v-list>
    </v-row>
  </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
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
};
</script>

<style></style>
