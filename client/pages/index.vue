<template>
  <v-main>
    <v-row align="center">
      <v-col md="8" sm="12" xs="12">
        <p class="text-h3 ml-8">Browse and Learn</p>
        <p class="text-h5 ml-8 font-weight-light">
          Commonly asked questions in Competitive Exams
        </p>
      </v-col>
      <v-col md="4" sm="8" xs="12">
        <v-img max-height="auto" width="auto" :src="`/images/tag.jpg`"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <p class="text-h4">Catagories</p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        v-for="catagory in catagories"
        :key="catagory"
        xs="12"
        sm="4"
        md="3"
        lg="3"
      >
        <v-card
          width="auto"
          height="auto"
          dark
          class="ml-6 mr-6 mb-2"
          color="indigo lighten-2"
        >
          <v-row>
            <v-col align="center">
              <v-icon x-large>drafts</v-icon>
              <p>{{ catagory }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-btn
                color="yellow darken-1 indigo--text"
                @click="catagorySelect(catagory)"
              >
                explore<v-icon small>arrow_forward_ios</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      catagories: [
        "Computer Science",
        "Current Affairs",
        "Medical",
        "Government Exams"
      ]
    };
  },
  methods: {
    catagorySelect(name) {
      const url = name.split(" ").join("-");
      console.log(url);
      this.$router.push("/" + url);
    }
  }
};
</script>
