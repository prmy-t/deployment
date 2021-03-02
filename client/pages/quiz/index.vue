<template>
  <div>
    <v-row>
      <v-col> <Header /> </v-col
    ></v-row>
    <v-main class="mb-5">
      <v-row align="center">
        <v-col md="8" sm="12" xs="12">
          <!-- <p class="text-h5 ml-8 font-weight-light">
          Welcome to Quiz Mode
        </p> -->
          <p class="text-h3 ml-8">Welcome to Quiz Area</p>
          <p class="text-h5 ml-8 font-weight-light">
            Be ready to test your Knowladge.
          </p>
        </v-col>
        <v-col md="4" sm="8" xs="12">
          <v-img
            max-height="auto"
            width="auto"
            :src="`/images/quiz-tag.jpg`"
          ></v-img>
        </v-col>
      </v-row>

      <Catagories :catagories="catagories" />
    </v-main>
  </div>
</template>
<script>
import Header from "../../components/public/header";
import Catagories from "../../components/public/catagories";
export default {
  components: { Catagories, Header },
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
    this.currentMode = "quiz";
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
