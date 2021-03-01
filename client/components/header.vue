<template>
  <v-app-bar app flat absolute color="yellow darken-3">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click="switchToAdmin" v-bind="attrs" v-on="on"
          ><v-icon>admin_panel_settings </v-icon></v-btn
        >
      </template>
      <span>Switch to Admin</span>
    </v-tooltip>
    <v-toolbar-title><b>App</b>name</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tooltip v-if="currentMode === 'quiz'" left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          depressed
          color="indigo lighten-1"
          class=" mr-2"
          @click="redingMode"
          v-bind="attrs"
          v-on="on"
          >Reading Mode</v-btn
        >
      </template>
      <span>switch to {{ currentMode }} mode</span>
    </v-tooltip>

    <v-tooltip v-if="currentMode === 'reading'" left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          depressed
          color="indigo lighten-1"
          @click="quizMode"
          v-bind="attrs"
          v-on="on"
          >Quiz Mode
        </v-btn></template
      >
      <span>switch to reading mode</span>
    </v-tooltip>
    <v-col md="3">
      <v-text-field
        class="mt-6 ml-2"
        placeholder="search"
        prepend-inner-icon="search"
        filled
        rounded
        dense
      >
      </v-text-field>
    </v-col>
  </v-app-bar>
</template>
<script>
export default {
  computed: {
    currentMode: {
      get() {
        return this.$store.state.mode.currentMode;
      },
      set(currentMode) {
        this.$store.commit("mode/SET_CURRENTMODE", currentMode);
      }
    }
  },
  methods: {
    switchToAdmin() {
      this.$router.push("/admin-login");
    },
    redingMode() {
      this.currentMode = "reading";
      this.$router.push("/");
    },
    quizMode() {
      this.currentMode = "quiz";
      this.$router.push("/quiz");
    }
  }
};
</script>
<style scoped>
.active {
  color: red;
}
</style>
