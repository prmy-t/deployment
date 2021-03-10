<template>
  <div>
    <Header />
    <v-main :id="target" class="mb-5 #f5f5f5">
      <v-row class="mt-10"></v-row>
      <v-row align="center">
        <v-col align="center" md="12" sm="12" xs="12">
          <p class="text-h3  font-weight-bold">
            Pakistan's Biggest Learning Source
          </p>
          <p class="text-h5  font-weight-light">
            Browse and Learn Your Favorite Catagories.
          </p>
        </v-col>
      </v-row>
      <Catagories :categories="categories" />
    </v-main>
  </div>
</template>

<script>
import Header from "../components/public/header";
import Catagories from "../components/public/catagories";
export default {
  components: { Catagories, Header },
  data() {
    return {};
  },
  computed: {},
  data() {
    return {
      categories: {}
    };
  },
  computed: {
    target: {
      get() {
        return this.$store.state.scroll.target;
      },
      set(target) {
        this.$store.commit("auth/SET_TARGET", target);
      }
    }
  },
  mounted() {
    this.currentMode = "reading";
    this.categoryData();
  },
  methods: {
    async categoryData() {
      const res = await this.$axios.get(
        "http://localhost:3000/get-mcq-catagories"
      );
      if (res) {
        console.log(res.data.categories);
        this.categories = res.data.categories;
      }
    },
    categorySelect(name) {
      const url = name.split(" ").join("-");
      console.log(url);
      this.$router.push("/" + url);
    }
  }
};
</script>
