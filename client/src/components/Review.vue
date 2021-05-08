<template>
  <div id="review" class="pa-7">
    <v-container>
      <h2
        class="my-5 font-weight-light text-md-h3 text-sm-h4 text-center"
        style="color: #1565c0"
      >
        Do you have any suggestions?
      </h2>
      <v-row justify="center">
        <v-col md="4" sm="12">
          <p class="display-1 text-center">
            I would greatly appreciate your feedback !
          </p>
        </v-col>
        <v-col md="2" cols="12" align="center">
          <v-avatar size="100">
            <img src="../../public/profile.jpg" />
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
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-on="on"
                      v-bind="attrs"
                      block
                      dark
                      color="#1565c0"
                      :loading="loading"
                      @click="addFeedBack()"
                      >Send
                      <v-icon>mdi-firebase</v-icon>
                    </v-btn>
                  </template>
                  <span>This message will be saved in firestore.</span>
                </v-tooltip>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center" class="my-10">
        <span class="text-h3">REVIEWS </span>
      </v-row>
      <v-row>
        <v-col
          v-for="item in computedFeedbackList"
          :key="item.id"
          lg="3"
          md="4"
          sm="6"
          cols="12"
        >
          <v-card height="250px" style="overflow: auto">
            <v-toolbar dense flat>
              <span class="pr-3">Date:</span>{{ item.createddate }}
              <v-spacer></v-spacer
              ><v-icon color="orange">mdi-firebase</v-icon></v-toolbar
            >
            <hr />
            <v-card-title class="text-h6">{{ item.name }}</v-card-title>
            <v-card-subtitle class="text-h7">{{ item.email }}</v-card-subtitle>
            <v-card-text class="text-h7">{{ item.message }} </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { db } from "../config/db";
import moment from "moment";
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
  computed: {
    computedFeedbackList() {
      const sortedFeedback = [...this.feedbackList];
      return sortedFeedback.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.createddate) - new Date(a.createddate);
      });
    },
  },
  methods: {
    getFeedBack() {
      this.firebaseConnect.onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.feedbackList.push({
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            message: doc.data().message,
            createddate: doc.data().createddate,
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
          .add({
            name: this.name,
            email: this.email,
            message: this.message,
            createddate: moment().format("YYYY-MM-DD hh:mm:ss"),
          })
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
