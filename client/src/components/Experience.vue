<template>
  <section class="experience" id="experience">
    <v-container>
      <h2
        class="my-5  text-md-h3 text-sm-h4"
        style="color:#1565c0"
      >
        WHERE I'VE BEEN?
      </h2>
      <v-row>
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item
            v-for="(exp, index) in experience"
            :key="index"
            color="#1565c0"
          >
            <template v-slot:opposite>
              <span> {{ exp.year }} </span>
            </template>
            <v-card class="elevation-2">
              <v-card-title
                style="color:#1565c0"
                >{{ exp.title }}</v-card-title
              >
              <v-card-text class="text-h6">
                {{ exp.content }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Experience",
  data: () => ({
    experience: [
       {
        title: "HRD Singapore Pte. Ltd.",
        content:
          "At HRD Singapore, i was employed as an Office Staff and designated as programmer and my roles are to remake the old system into web and also to create a new system that will ease the work load of the employees.",
        year: "2021",
      },
      {
        title: "HRD Singapore Pte. Ltd.",
        content:
          "At HRD Singapore, i was employed as an Office Staff and designated as programmer and my roles are to remake the old system into web and also to create a new system that will ease the work load of the employees.",
        year: "2020",
      },
      {
        title: "HRD Singapore Pte. Ltd.",
        content:
          "At HRD Singapore, i was employed as an Office Staff and designated as programmer and my roles are to remake the old system into web and also to create a new system that will ease the work load of the employees.",
        year: "2019",
      },
      {
        title: "HRD Singapore Pte. Ltd.",
        content:
          "At HRD Singapore, i was employed as an Office Staff and designated as programmer and my roles are to remake the old system into web and also to create a new system that will ease the work load of the employees.",
        year: "2018",
      },
    ],
  }),
};
</script>

<style></style>
