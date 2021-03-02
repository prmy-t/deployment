<template>
  <div>
    <Header />
    <v-main>
      <v-row>
        <v-col md="4">
          <div class="ml-3 mt-2 text-md-h4 text-sm-h4 ">
            <v-icon large color="red lighten-1" class="mb-2"
              >local_library
            </v-icon>
            Reading Mode
          </div>
        </v-col>
        <v-divider class="mt-5 mb-5" vertical> </v-divider>
        <v-col md="7">
          <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col md="7" sm="12" xs="12">
          <p class="text-h3 ml-8">{{ catagory }}</p>
          <p class="text-h5 ml-8 font-weight-light">
            Browse & Learn Specific Catagory
          </p>
        </v-col>
        <v-col md="5" sm="8" xs="12">
          <v-img
            max-height="auto"
            width="auto"
            :src="`/images/${this.$route.params.id}.jpg`"
          ></v-img>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
import Header from "../components/public/header";
export default {
  components: { Header },
  data() {
    return {
      catagory: String,
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
  },
  mounted() {
    this.catagory = this.$route.params.id.split("-").join(" ");
    // console.log(this.catagory);
  }
};
</script>

<style></style>
