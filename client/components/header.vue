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
    <v-btn dark depressed color="indigo lighten-1" class="mr-2"
      >Reading Mode</v-btn
    >
    <v-btn dark depressed color="indigo lighten-1">Quiz Mode</v-btn>
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    switchToAdmin() {
      this.$router.push("/admin-login");
    }
  }
};
</script>
