<template>
  <v-app id="inspire">
    <v-app-bar app flat absolute color="yellow darken-3">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class=""
            icon
            medium
            @click="switchToPublic"
            v-bind="attrs"
            v-on="on"
            ><v-icon
              >{{ 2 === 2 ? "admin_panel_settings" : "logout" }}
            </v-icon></v-btn
          >
        </template>
        <span>Switch to Public</span>
      </v-tooltip>

      <v-toolbar-title class="ml-1"><b>App</b>name</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn dark depressed color="indigo lighten-1" class="mr-2"
        >Reports</v-btn
      >
      <v-btn dark depressed color="indigo lighten-1">Add Mcq's</v-btn>
    </v-app-bar>
    <nuxt />
  </v-app>
</template>
<script>
export default {
  methods: {
    switchToPublic() {
      this.$router.go(-1);
    }
  }
};
</script>
