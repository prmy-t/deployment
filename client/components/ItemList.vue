<template>
  <div>
    <v-row justify="center">
      <v-col sm="6" xs="12" md="4" lg="4">
        <v-text-field
          v-model="search"
          class="ml-2"
          prepend-inner-icon="search"
          :placeholder="'Search ' + type"
          filled
          dense
          rounded
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="12" md="12" sm="12" xs="12" align="start">
        <p class="text-h4 font-weight-bold ml-3">
          {{ type.charAt(0).toUpperCase() + type.slice(1) }}
          ({{ Object.keys(items).length }})
        </p>
      </v-col>
    </v-row>
    <v-row v-if="Object.keys(items).length > 1">
      <!-- <v-col>{{ filtereditems }}</v-col> -->
      <v-col
        cols="12"
        lg="3"
        md="4"
        sm="6"
        xs="12"
        align="center"
        v-for="(tag, index) in filtereditems"
        :key="index"
      >
        <v-btn
          class="font-weight-bold text-h6"
          height="50"
          width="280"
          dark
          color="red"
          @click="tagClick(index, tag)"
        >
          <div>{{ index }} ({{ tag }})</div>
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col class="text-h6" align="center">
        No Data
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    items: {},
    type: String
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filtereditems() {
      let itemObj = {};
      let ans = Object.keys(this.items).filter(tag => {
        return tag.match(this.formateSearch(this.search));
      });
      for (let i in ans) {
        if (this.items.hasOwnProperty(ans[i])) {
          itemObj[ans[i]] = Object.values(this.items)[i];
        }
      }
      return itemObj;
    }
  },

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

    async tagClick(index) {
      this.$router.push("/admin/edit-site/by-" + this.type + "/" + index);
    }
  }
};
</script>

<style></style>
