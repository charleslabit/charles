<template>
  <div id="project" class="pa-7">
    <v-container>
      <h2 class="my-5 text-md-h3 text-sm-h4" style="color: #1565c0">
        Sample Projects
      </h2>

      <v-carousel height="700" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item
          v-for="(project, index) in project_detail"
          :key="index"
        >
          <v-row justify="center" class="my-5">
            <v-col
              cols="12"
              class="text-h5"
              style="color: #1565c0"
              align="center"
            >
              {{ project.project_name }}
            </v-col>
            <v-col
              cols="12"
              class="text-h6"
              style="color: #1565c0"
              align="center"
            >
              {{ project.project_skill }}
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col md="6" sm="12" class="pa-5">
              <v-row class="pa-5">
                <h3 class="mb-2 text-h6" style="color: #1565c0">
                  Project Details
                </h3>
                <p style="color: #1565c0">
                  {{ project.project_desc }}
                </p>
              </v-row>
              <v-row class="px-5" >
                <v-col cols="12" class="hidden-sm-and-down">
                  <h3 class="text-h6" style="color: #1565c0">Project info</h3>
                </v-col>
                <v-col md="12" class="hidden-sm-and-down">
                  <v-list color="transparent">
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="#1565c0">mdi-account</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title
                        class="hidden-sm-and-down"
                        style="color: #1565c0"
                      >
                        Client Name:
                      </v-list-item-title>
                      <v-list-item-subtitle
                        class="mr-5 "
                        style="color: #1565c0"
                      >
                        {{ project.client_name }}
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col cols="12" class="hidden-sm-and-down">
                  <v-list color="transparent">
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="#1565c0" large>mdi-calendar</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title
                        class=" hidden-sm-and-down"
                        style="color: #1565c0"
                      >
                        Project Date:
                      </v-list-item-title>
                      <v-list-item-subtitle
                        class="mr-5 "
                        style="color: #1565c0"
                      >
                        {{ project.project_date }}
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col cols="12">
                  <v-list color="transparent">
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="#1565c0" large>mdi-link</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title
                        class="hidden-sm-and-down"
                        style="color: #1565c0"
                      >
                        Preview
                      </v-list-item-title>
                      <v-list-item-subtitle class="mr-5">
                        <v-btn
                          outlined
                          target="_blank"
                          :href="project.project_url"
                          color="#1565c0"
                          dark
                          >Preview</v-btn
                        >
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="6" class="pa-5 hidden-sm-and-down">
              <v-img
                :src="project.project_image"
                style="width: 600px; height: 260px ;"
                class="mt-5"
              ></v-img>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>

     
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    project_detail: [
      {
        project_name: "Todo Application",
        project_skill: "HTML, CSS, Javascript, and Vue.js(Vuetify, Vuex, Vuex-Persistedstate)",
        project_desc:
          "A Todo Application that is build by Vue.js with Vuetify framework and store data in local storage using Vuex Persisted State.",
        project_date: "2021-05-01",
        client_name: "Personal project",
        project_image: require("../../public/TodoApp.png"),
        project_url: "https://todoapp-pfudmg2og-charleslabit.vercel.app/",
      },
    ],
  }),
};
</script>
