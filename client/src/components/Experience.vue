<template>
  <div id="experience" class="pa-7">

    <v-container>

      <h2 class="my-5  text-md-h3 text-sm-h4" style="color:#1565c0">
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
              <v-card-title style="color:#1565c0">{{ exp.title }}</v-card-title>
              <v-card-text class="text-h6">
                {{ exp.content }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Experience",
  data: () => ({
    experience: [
      {
        title: "H.R.D. Singapore Pte., Ltd.",
        content:
          "At HRD Singapore, i was employed as an Office Staff and designated as a programmer and my roles are to develop and maintain system for production and support department of HRD group of companies. Engaged in orders, import and export, warehouse, inventory, house plan management and Human Resource Information System.",
        year: "2021",
      },
      {
        title: "H.R.D. Singapore Pte., Ltd.",
        content:
          "At HRD Singapore, i was employed as an Office Staff and designated as a programmer and my roles are to develop and maintain system for production and support department of HRD group of companies. Engaged in orders, import and export, warehouse, inventory, house plan management and Human Resource Information System.",
        year: "2020",
      },
      {
        title: "H.R.D. Singapore Pte., Ltd.",
        content:
          "At HRD Singapore, i was employed as an Office Staff and designated as a programmer and my roles are to develop and maintain system for production and support department of HRD group of companies. Engaged in orders, import and export, warehouse, inventory, house plan management and Human Resource Information System.",
        year: "2019",
      },
      {
        title: "H.R.D. Singapore Pte., Ltd.",
        content:
          "At HRD Singapore, i was employed as an Office Staff and designated as a programmer and my roles are to develop and maintain system for production and support department of HRD group of companies. Engaged in orders, import and export, warehouse, inventory, house plan management and Human Resource Information System.",
        year: "2018",
      },
    ],
  }),
};
</script>

<style></style>
