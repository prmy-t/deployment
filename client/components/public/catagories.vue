<template>
  <v-row justify="center">
    <v-col
      v-for="catagory in catagories"
      :key="catagory.title"
      class="mb-2"
      xs="12"
      sm="4"
      md="3"
      lg="2"
    >
      <v-card
        width="auto"
        height="auto"
        dark
        class="ml-6 mr-6 mb-2"
        color="indigo lighten-2"
      >
        <v-row>
          <v-col align="center">
            <v-icon x-large>{{ catagory.icon }}</v-icon>
            <p class="mt-1">{{ catagory.title }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            <v-btn
              small
              color="yellow darken-1 indigo--text"
              @click="catagorySelect(catagory.title)"
            >
              explore<v-icon small>arrow_forward_ios</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    catagories: {}
  },
  methods: {
    catagorySelect(name) {
      const url = name.split(" ").join("-");

      this.$router.push("/" + url);
    }
  }
};
</script>
