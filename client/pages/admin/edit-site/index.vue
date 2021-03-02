<template>
  <div>
    <Header />
    <v-main>
      <v-container fill-height fluid>
        <v-row class="mt-8" justify="space-around">
          <v-col cols="12" sm="6" xs="12" md="5">
            <v-card height="180" rounded="lg" color="#f2f2f2">
              <v-card-title class="font-weight-bold text-h5">
                Edit Existing MCQs
              </v-card-title>
              <v-card-text>
                Browse catagory wise MCQs.<br />
                Add & Edit MCQs.
              </v-card-text>
              <v-card-actions>
                <v-btn dark color="red">button1</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" xs="12" md="5">
            <v-card height="auto" rounded="lg" color="#f2f2f2">
              <v-card-title class="font-weight-bold text-h5">
                Add MCQ Using .xlsx Sheet
              </v-card-title>
              <v-card-text>
                Add MCQs by uploading Excel Sheet.
              </v-card-text>
              <v-card-actions>
                <v-btn dark color="red">button2</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import Header from "../../../components/admin/header";
export default {
  components: { Header },
  computed: {
    isLoggedIn: {
      get() {
        return this.$store.state.auth.isLoggedIn;
      },
      set(isLoggedIn) {
        this.$store.commit("auth/SET_ISLOGGEDIN", isLoggedIn);
      }
    }
  },
  methods: {
    singleEntry() {
      this.$router.push("edit-site/add-mcq");
    },
    xlSheet() {
      this.$router.push("edit-site/add-mcq-xlsheet");
    }
  }
};
</script>
