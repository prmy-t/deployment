<template>
  <div>
    <Header />
    <v-main class="mb-5 #f5f5f5">
      <v-row class="mt-10"></v-row>
      <v-row align="center">
        <v-col class="" align="center" md="12" sm="12" xs="12">
          <p class="text-h3 ml-8 font-weight-bold">
            Pakistan's Biggest Learning Source
          </p>
          <p class="text-h5 ml-8 font-weight-light">
            Browse and Learn Your Favorite Catagories.
          </p>
        </v-col>
      </v-row>
      <Catagories :catagories="catagories" />
    </v-main>
  </div>
</template>

<script>
import Header from "../components/public/header";
import Catagories from "../components/public/catagories";
export default {
  components: { Catagories, Header },
  data() {
    return {};
  },
  computed: {},
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
