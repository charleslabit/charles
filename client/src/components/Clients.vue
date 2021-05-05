<template>
  <section class="clients" id="clients">
    <v-container>
      <h2
        class="my-5 font-weight-light text-md-h3 text-sm-h4"
        style="color:#1565c0"
      >
        WHAT MY CLIENTS SAY
      </h2>
      <v-row>
        <v-col
          class="col-md-4 col-sm-12"
          v-for="comment in comments"
          :key="comment.client"
        >
          <v-row>
            <v-icon large style="color:#1565c0">mdi-format-quote-open</v-icon>
          </v-row>
          <v-card outlined>
            <v-card-text>
              <blockquote class="blockquote">
                {{ comment.comment }}
              </blockquote>
            </v-card-text>
          </v-card>

          <v-row justify="end">
            <v-icon large style="color:#1565c0">mdi-format-quote-close</v-icon>
          </v-row>
          <v-row justify="end" class="pr-2">
            <h4 class="text-h6 font-weight-thin " style="color:#1565c0">
              {{ comment.client }} |
            </h4>
            <span class=" font-weight-light pt-2">{{
              comment.company
            }}</span>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    comments: [
      {
        client: "Mr. Japanese",
        comment: "Arigatou gozaimashita !",
        company: "HRD Singapore Pte. Ltd.",
      },
      {
        client: "Mark Zuckerberg",
        comment:
          "Charles did a quick job! ",
        company: "Facebook",
      },
      {
        client: "Albert Einstein",
        comment: "Outstanding !",
        company: "Einstein Incorporated",
      },
    ],
  }),
};
</script>
