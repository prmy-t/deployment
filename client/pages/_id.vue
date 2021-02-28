<template>
  <v-main>
    <v-row>
      <v-col>
        <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col align="center">
        <p class="text-h3">hello at {{ $route.params.id }}</p>
      </v-col></v-row
    >
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "Home",
          disabled: false,
          href: "/"
        },
        {
          text: `${this.$route.params.id}`,
          disabled: true,
          href: "/"
        }
      ]
    };
  }
};
</script>

<style></style>
