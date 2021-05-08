<template>
  <div id="review" class="pa-7">
    <v-container>
      <h2
        class="my-5 font-weight-light text-md-h3 text-sm-h4 text-center"
        style="color:#1565c0"
      >
        Do you have any suggestions?
      </h2>
      <v-row justify="center">
        <v-col md="4" sm="12">
          <p class="display-1  text-center">
            I would greatly appreciate your feedback !
          </p>
        </v-col>
        <v-col md="2" cols="12" align="center">
          <v-avatar size="100">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
          </v-avatar>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="col-md-6 col-sm-12">
          <v-card>
            <v-card-text>
              <v-form class="px-3" ref="form">
                <v-text-field
                  label="Name"
                  prepend-icon="mdi-account"
                  v-model="name"
                  :rules="nameRules"
                ></v-text-field>
                <v-text-field
                  label="Email"
                  prepend-icon="mdi-email"
                  v-model="email"
                  :rules="emailRules"
                ></v-text-field>
                <v-textarea
                  maxlength="300"
                  counter
                  no-resize
                  label="Message"
                  prepend-icon="mdi-lead-pencil"
                  v-model="message"
                  :rules="messageRules"
                ></v-textarea>
                <v-btn
                  block
                  class="#1565c0"
                  :loading="loading"
                  @click="addFeedBack()"
                  >Send</v-btn
                >
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="item in feedbackList"
          :key="item.id"
          lg="3"
          md="4"
          sm="6"
          cols="12"
        >
          <v-card height="250px" style="overflow: auto;">
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-subtitle>{{ item.email }}</v-card-subtitle>
            <v-card-text>{{ item.message }} </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { db } from "../config/db";
export default {
  data: () => ({
    firebaseConnect: db.collection("feedback"),
    feedbackList: [],
    loading: false,
    name: "",
    email: "",
    message: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    messageRules: [
      (v) => !!v || "Message is required",
      (v) => (v && v.length >= 5) || "Message must be more than 5 characters",
    ],
  }),
  created() {
    this.getFeedBack();
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    getFeedBack() {
      this.firebaseConnect.onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.feedbackList.push({
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            message: doc.data().message,
          });
        });
      });
    },
    // submit() {
    //   if (this.$refs.form.validate()) {
    //     this.loading = true;
    //     Swal.fire({
    //       icon: "success",
    //       title: "Message Sent !",
    //       position: "top-end",
    //       showConfirmButton: false,
    //       timer: 750,
    //     });
    //     this.loading = false;
    //   }
    // },
    addFeedBack() {
      if (this.$refs.form.validate()) {
        this.feedbackList = [];
        this.loading = true;
        Swal.fire({
          icon: "success",
          title: "Message Sent !",
          position: "top-end",
          showConfirmButton: false,
          timer: 750,
        });
        db.collection("feedback")
          .add({ name: this.name, email: this.email, message: this.message })
          .then(() => {
            this.name = this.email = this.message = "";
            console.log("Document successfully written!");
            this.loading = false;
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    },
  },
};
</script>
<style>
.swal-button:focus {
  box-shadow: none;
}
.truncate-overflow::before {
  content: "...";
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
