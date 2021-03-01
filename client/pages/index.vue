<template>
  <v-main>
    <v-row align="center">
      <v-col md="8" sm="12" xs="12">
        <p class="text-h3 ml-8">Welcome to Reading Area</p>
        <p class="text-h5 ml-8 font-weight-light">
          Browse and Learn Your Favorite Catagories.
        </p>
      </v-col>
      <v-col md="4" sm="8" xs="12">
        <v-img
          max-height="auto"
          width="auto"
          :src="`/images/reading-tag.jpg`"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <p class="text-h4">Catagories</p>
      </v-col>
    </v-row>
    <Catagories :catagories="catagories" />
    <v-row></v-row>
  </v-main>
</template>

<script>
import Catagories from "../components/public/catagories";
export default {
  components: { Catagories },
  data() {
    return {
      catagories: [
        { title: "Computer Science", icon: "laptop_mac" },
        { title: "Current Affairs", icon: "online_prediction" },
        { title: "Medical", icon: "medical_services" },
        { title: "Government Exams", icon: "gavel" }
      ]
    };
  },
  mounted() {
    this.currentMode = "reading";
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
