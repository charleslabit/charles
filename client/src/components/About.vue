<template>
  <div id="about" class="pa-7" >
    <v-container>
      <div class="my-5 text-md-h3 text-sm-h4 mx-auto" style="color: #1565c0">
        WHO AM I?
      </div>
      <v-row class="text-h6">
        <v-col class="text-right text-center" md="4" sm="12" cols="12">
          <v-avatar size="150">
            <img src="../../public/profile.jpg" alt="John" />
          </v-avatar>

          <h4 class="pt-3">Web Developer</h4>
          <span style="color: #1565c0">Charles Kenneth C. Labit</span>
          <h6 class="mx-4">⛪️ Kawit, Cavite</h6>
          <h6
            class="mx-4"
            v-clipboard="'charleslabit@gmail.com'"
            @click="copyText()"
            style="cursor: pointer"
          >
            📧 charleslabit@gmail.com
          </h6>

          <h6 class="mx-4">📱 0947-546-8235</h6>
        </v-col>
        <v-col md="8" sm="12" cols="12">
          <p>
            I am a web developer who have more than 2 years of experience using
            Vue.js, Vuetify, Node.js, Express.js, REST API and the database that
            I used are MySQL, MSSQL and CouchDB.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "About",
  data: () => ({
    //
  }),
  created(){
  },
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
  computed:{

  },
 
};
</script>

<style></style>
