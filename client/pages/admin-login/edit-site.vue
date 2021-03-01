<template>
  <v-main class=" mt-2 indigo lighten-4">
    <v-row>
      <v-col>
        <p class="text-h4">Home</p>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col cols="12" md="4" sm="6" xs="12">
        <v-card dark color="yellow darken-3" rounded="lg">
          <v-card-title class="indigo lighten-1 justify-center text-h5"
            >Edit Existing Mcqs</v-card-title
          >
          <v-divider> </v-divider>
          <v-card-text></v-card-text>
          <v-card-actions>
            <v-btn dark color="indigo lighten-1">Enter</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="6" xs="12">
        <v-card dark color="yellow darken-3" rounded="lg">
          <v-card-title class="justify-center text-h5 indigo lighten-1 "
            >Upload New Mcqs{{ isLoggedIn }}</v-card-title
          >
          <v-divider> </v-divider>
          <v-card-text></v-card-text>
          <v-card-actions>
            <v-btn dark color="indigo lighten-1">using .xls Sheet</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
export default {
  layout: "admin",
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
  mounted() {
    this.isLogeedIn = true;
  }
};
</script>

>
