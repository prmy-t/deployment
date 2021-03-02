<template>
  <div>
    <v-app-bar app flat absolute color="gray lighten-3">
      <v-avatar size="25" class="ml-5 mr-2" color="red"> </v-avatar>
      <v-toolbar-title
        ><b class="font-weight-bold text-h4 red--text"
          >Path.pk</b
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn @click="homeEvent" plain>home</v-btn>
      <v-btn plain>contact</v-btn>
      <v-btn plain>privacy policy</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        large
        dark
        depressed
        @click="snackbar = true"
        color="red lighten-1"
        class="mr-8 font-weight-bold text-subtitle-1"
        >submit MCQ's ?</v-btn
      >
    </v-app-bar>
    <v-snackbar dark color="grey darken-3" v-model="snackbar" timeout="2000">
      Coming Soon

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      snackbar: false
    };
  },
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
    homeEvent() {
      this.$router.push("/");
    }
  }
};
</script>
