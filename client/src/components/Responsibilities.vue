<template>
  <section class="pa-5">
    <v-container>
      <h3 class="my-5 text-h4" style="color: #1565c0">
        My Duties and Responsibilities
      </h3>
      <!-- <h2 style="color: #1565c0">Our Main Function</h2>

      <h3 class="my-2">
        Develop and maintain system for production and support department of HRD
        group of companies. Engaged in orders, import and export, warehouse,
        inventory, house plan management and Human Resource Information System.
      </h3> -->

      <h4 class="text-h6 mt-4" style="color: #1565c0">A. Daily</h4>
      <ul class="my-2">
        <li v-for="item in daily" :key="item">
          {{ item }}
        </li>
      </ul>

      <h4 class="text-h6 mt-4" style="color: #1565c0">B. Periodic</h4>
      <ul class="my-2">
        <li v-for="item in periodic" :key="item">
          {{ item }}
        </li>
      </ul>

      <h4 class="text-h6 mt-4" style="color: #1565c0">C. Occasional</h4>
      <ul class="my-2">
        <li v-for="item in occasional" :key="item">
          {{ item }}
        </li>
      </ul>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    daily: [
      "Maintain and modify existing system.",
      "Data modifications as requested by users.",
      "Performs data extraction as requested by users.",
      "System Analysis and fixing system troubles",
      "Act as support for system users for their system concerns",
    ],
    periodic: [
      "Updating of master tables if needed as user’s requests for additional values.",
      "Support and attends to co-members queries in technical aspects.",
    ],
    occasional: [
      "Develop the approved requested system.",
      "Creation of Database for newly approved requested system",
      "Attend meeting with the requester as part of system development and system modification if needed.",
      "Trainer of newly hired staffs",
    ],
  }),
};
</script>

<style></style>
