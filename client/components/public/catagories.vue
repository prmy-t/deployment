<template>
  <div>
    <v-row justify="center">
      <v-col sm="6" xs="12" md="3">
        <v-text-field
          v-model="search"
          class="ml-2"
          prepend-inner-icon="search"
          placeholder="Search categories"
          filled
          rounded
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-10"> </v-row>
    <v-container justify="center">
      <v-row>
        <v-col align="start">
          <p class="text-h4 font-weight-bold ml-3">
            categories
          </p>
        </v-col>
      </v-row>
      <v-row justify="start" no-gutters>
        <v-col
          align="center"
          v-for="category in filteredCategories"
          :key="category"
          class="mb-5"
          cols="12"
          xs="12"
          sm="4"
          md="3"
        >
          <v-card
            width="auto"
            height="230px"
            class="ml-1 mb-1 mr-2"
            color="grey lighten-3"
          >
            <v-row>
              <v-chip dark class="font-weight-bold ml-5 mt-3 red">
                100+ mcqs
              </v-chip>
            </v-row>
            <v-row>
              <v-col align="center">
                <v-icon color="red" x-large></v-icon>
                <p class="red--text text-h5 mt-1">{{ category }}</p>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col class="mb-3" align="center">
                <a
                  @click="buttonEvent(catgory.title)"
                  class=" grey--text text-h6 "
                  >20 Sub Categories</a
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col
          md="12"
          class="mt-5 mb-10"
          v-if="categories && !categories.length"
        >
          <p class="text-h6" align="center">
            No Category Found<v-icon class="ml-1 mb-1"
              >sentiment_very_dissatisfied
            </v-icon>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    categories: {}
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filteredCategories() {
      if (this.categories.length > 0)
        if (this.categories) {
          return this.categories.filter(category => {
            return category.match(this.formateSearch(this.search));
          });
        }
    }
  },
  mounted() {},
  methods: {
    formateSearch(search) {
      if (search) {
        const vel = search.split(" ");
        for (var i = 0; i < vel.length; i++) {
          vel[i] = vel[i].charAt(0).toUpperCase() + vel[i].slice(1);
        }
        let value = vel.join(" ");
        return value;
      } else return "";
    },
    buttonEvent(name) {
      const url = name.split(" ").join("-");
      this.$router.push("/" + url);
    }
  }
};
</script>
