<template>
  <section  id="services">
    <v-container>
      <v-row>
        <v-col md8>
          <h2
            class="my-5  text-md-h3 text-sm-h4 text-uppercase"
            style="color:#1565c0"
          >
            I can create a webpage that is:
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-md-8 col-sm-12">
          <v-expansion-panels popout multiple>
            <v-expansion-panel v-for="(ability, i) in abilities" :key="i">
              <v-expansion-panel-header class="text-h5 font-weight-light">{{
                ability.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content class="text-h6 font-weight-light">
                {{ ability.content }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Services",
  data: () => ({
    panel: "",
    abilities: [
      {
        title: "User Friendly",
        content:
          "I love to build simple and clean user interfaces with make sense to the average user that would required minimal explanation on how to use it. ",
      },
      {
        title: "Reliability",
        content:
          "Reliable enough to sustain in any condition. Should give consistently correct results. Product reliability is measured in terms of working of the project under different working environments and different conditions.",
      },
      {
        title: "Maintainability",
        content:
          "Maintenance should be cost-effective and easy. The system is easy to maintain and correcting defects or making a change in the software.",
      },
      {
        title: "Flexibility",
        content:
          "Flexible enough to modify. Adaptable to other products with which it needs interaction. Should be easy to interface with other standard 3rd party components.",
      },
      {
        title: "Reusablity",
        content:
          "Different code library classes should be generic enough to use easily in different application modules. Dividing the application into different modules so that modules can be reused across the application.",
      },
      {
        title: "Responsive",
        content:
          "There are alot of devices with different screen sizes, pixel densities and aspect ratios, it is my job as a front end developer to ensure that your sites/apps look good on those devices.",
      },
    ],
  }),
};
</script>
