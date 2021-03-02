<template>
  <v-app-bar app flat absolute color="gray lighten-3">
    <v-avatar size="25" class="ml-5 mr-2" color="red"> </v-avatar>

    <v-toolbar-title
      ><b class="font-weight-bold text-h4 red--text"
        >Path.pk</b
      ></v-toolbar-title
    >
    <v-spacer></v-spacer>

    <v-spacer></v-spacer>
    <v-btn
      large
      dark
      depressed
      color="red lighten-1"
      class="mr-8 font-weight-bold text-subtitle-1"
      
      >submit MCQ's ?</v-btn
    >
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {};
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
    
  }
};
