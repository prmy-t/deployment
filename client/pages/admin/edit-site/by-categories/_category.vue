<template>
  <div>
    <Header />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" lg="4" md="4" sm="4" xs="12">
            <v-btn dark text color="red" @click="backTo">
              <v-icon left>navigate_before </v-icon> return</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col> <MCQTABLE :mcqs="mcqs" @refresh="refresh" /> </v-col
        ></v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Header from "../../../../components/admin/header";
import MCQTABLE from "../../../../components/admin/mcqTable";
export default {
  layout: "admin",
  components: { Header, MCQTABLE },
  data() {
    return {
      category: this.$route.params.category,
      mcqs: []
    };
  },
  mounted() {
    this.getCategoryMcq();
  },
  methods: {
    async getCategoryMcq() {
      const res = await this.$axios.post(
        "http://localhost:3000/admin/get-mcq-table/by-categories/" +
          this.category
      );
      if (res.data) {
        this.mcqs = res.data.mcqs;
        if (this.mcqs.length < 1) {
          this.$router.go(-1);
        }
      }
    },
    backTo() {
      this.$router.go(-1);
    },
    refresh() {
      this.getCategoryMcq();
    }
  }
};
</script>

<style></style>
