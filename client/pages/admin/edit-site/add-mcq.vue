<template>
  <div>
    <Header />
    <v-main class="indigo lighten-5">
      <v-row align="center" class="red">
        <v-col align="center"> <v-btn>< back</v-btn> </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>hello</h2>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
import Header from "../../../components/admin/header";
export default {
  layout: "admin",
  components: { Header }
};
</script>

<style></style>
