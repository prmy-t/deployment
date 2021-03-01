<template>
  <v-app id="inspire">
    <v-app-bar app flat absolute color="yellow darken-3">
      <v-tooltip v-if="!isLoggedIn" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon medium @click="switchToPublic" v-bind="attrs" v-on="on"
            ><v-icon> admin_panel_settings </v-icon></v-btn
          >
        </template>
        <span>Switch to Public</span>
      </v-tooltip>

      <v-tooltip v-if="isLoggedIn" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon medium @click="logOut" v-bind="attrs" v-on="on"
            ><v-icon>logout </v-icon></v-btn
          >
        </template>
        <span>Log Out</span>
      </v-tooltip>

      <v-toolbar-title class="ml-1"><b>App</b>name</v-toolbar-title>
      <v-toolbar-title class="ml-5 text-subtitle-2"
        >( ADMIN PANEL )</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn dark depressed color="indigo lighten-1" class="mr-2"
        >Reports</v-btn
      >
      <v-btn dark depressed color="indigo lighten-1">Add Mcq's</v-btn>
    </v-app-bar>
    <nuxt />
    <Footer />
  </v-app>
</template>
<script>
import Footer from "../components/footer";
export default {
  components: { Footer },
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
    switchToPublic() {
      this.$router.go(-1);
    },
    logOut() {
      this.$removeCookie("token");
      this.isLoggedIn = false;
      this.$router.push("/");
    }
  }
};
</script>
