<template>
  <section class="about" id="about">
    <v-container>
      <h2 class="my-5 text-md-h3 text-sm-h4" style="color: #1565c0">
        WHO AM I?
      </h2>
      <v-row class="text-h6">
        <v-col md="4" sm="12">
          <p>
            I am a full stack developer with 2 years of experience who is adept
            at creating client and server side apps that are user friendly,
            reliability, maintainability, flexibility, reusablity and responsive
            using Vue.js (Vuetify Framework) and Node.js (Express.js) and the
            database that I used are MySQL, MSSQL and CouchDB.
          </p>
        </v-col>
        <v-col class="hidden-sm-and-down" md="4" sm="12">
          <v-row>
            <h4 class="mx-4">Location:</h4>
            <span>Kawit, Cavite</span>
          </v-row>
          <v-row>
            <h4 class="mx-4">Email:</h4>
            <span>charleslabit@gmail.com</span>
          </v-row>
          <v-row>
            <h4 class="mx-4">Phone:</h4>
            <span>0947-546-8235</span>
          </v-row>
        </v-col>
        <v-col
          class="text-right text-center text-uppercase hidden-sm-and-down"
          md="4"
        >
          <v-avatar size="300">
            <img src="../../public/me2.png" alt="John" />
          </v-avatar>
          <h2 class=" pt-3">Full Stack Developer</h2>
          <span  style="color: #1565c0"
            >Charles Kenneth C. Labit</span
          >
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style></style>
