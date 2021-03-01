<template>
  <v-app id="inspire">
    <Header />
    <nuxt />
    <Footer />
  </v-app>
</template>
<script>
import Header from "../components/header";
import Footer from "../components/footer";
export default {
  components: { Header, Footer },
  computed: {}
};
</script>
