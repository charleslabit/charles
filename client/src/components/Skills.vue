<template>
  <div class="pa-7" id="skills">
    <v-container>
      <h2 class="my-5 text-md-h3 text-sm-h4" style="color: #1565c0">
        WHAT I KNOW?
      </h2>

      <v-row justify="space-around">
        <v-col md="6" sm="12" >
          <h3 class="text-h5 my-5" style="color: #1565c0">My Skills</h3>

          <h4 class="text-h6" style="color: #1565c0">Technical Skills</h4>
          <v-row v-for="skill in skillTech" :key="skill.title">
            <v-col cols="4" align-self="center"
              ><span>
                {{ skill.title }}
              </span></v-col
            >
            <v-col cols="8">
              <v-rating
                half-increments
                size="25"
                readonly
                v-model="skill.rating"
                color="#1565c0"
                background-color="grey darken-3"
              ></v-rating>
            </v-col>
          </v-row>
          <h4 class="text-h6 mt-4" style="color: #1565c0">Soft Skills</h4>
          <v-row v-for="(skill, index) in skillSoft" :key="index">
            <v-col cols="4" align-self="center"
              ><span>{{ skill.title }}</span></v-col
            >
            <v-col cols="8">
              <v-rating
                half-increments
                readonly
                size="25"
                v-model="skill.rating"
                color="#1565c0"
                background-color="grey darken-3"
              ></v-rating>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4" class="hidden-sm-and-down">
          <h3 class="text-h5 my-5" style="color: #1565c0">My Education</h3>
          <v-row class="pt-3">
            <v-row>
              <v-col class="pa-4 ml-4">
                <v-row
                  ><span class="text-h6" style="color: #1565c0">
                    AMA Computer College
                  </span></v-row
                >
                <v-row wrap justify="end"
                  ><span class="text-h5" style="color: #1565c0"
                    >Bachelor of Science in Computer Engineering
                    (2014-2018)</span
                  ></v-row
                >
              </v-col>
            </v-row>
          </v-row>
          <v-row class="mt-5 hidden-sm-and-down">
            <v-col class="mt-5">
              <span class="text-h5" style="color: #1565c0">Skills Detail</span>
              <ul v-for="skill in skillDetail" :key="skill.content">
                <li class="my-2">
                  <span style="color: #1565c0">{{ skill.title }}: </span>
                  <span>{{ skill.content }}</span>
                </li>
              </ul>
            </v-col>
          </v-row>
          <v-row class="mt-5 hidden-sm-and-down">
            <v-col class="mt-5">
              <span class="text-h5" style="color: #1565c0">Databases</span>
              <ul v-for="skill in skillDatabase" :key="skill.content">
                <li class="my-2">
                  <span style="color: #1565c0">{{ skill.title }} </span>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    skillTech: [
      { title: "HTML", rating: 3 },
      { title: "CSS", rating: 3 },
      { title: "Javascript", rating: 3.5 },
      { title: "Vue.js", rating: 3.5 },
      { title: "Node.js", rating: 3 },
      { title: "Magic XPA", rating: 3.5 },
      { title: "Magic XPA RIA", rating: 3 },
    ],
    skillSoft: [
      { title: "Problem Solving", rating: 4 },
      { title: "Sharp Mind", rating: 4 },
      { title: "Adaptability", rating: 3.5 },
      { title: "Teamwork", rating: 4 },
      { title: "Ability to accept constructive criticism", rating: 4 },
      { title: "Approachability", rating: 3.5 },
    ],
    skillDatabase: [
      { title: "MySQL" },
      { title: "MSSQL" },
      { title: "CouchDB" },
      { title: "Firebase" },
    ],
    skillDetail: [
      { title: "JavaScript", content: "ES5 and ES6" },
      {
        title: "Vue.js",
        content: "VueX, Vue Router, Vuetify",
      },

      { title: "Node.js", content: "Express.js, REST API" },
      {
        title: "Other Javascript libraries",
        content:
          "Axios, Express.js, Chart.js, Excel.js, Sweetalert2, Moment.js, Knex.js and etc.",
      },
    ],
  }),
};
</script>

<style>
.v-rating {
  cursor: context-menu;
}
</style>
