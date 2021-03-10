<template>
  <div>
    <Header />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" lg="4" md="4" sm="4" xs="12">
            <v-btn text dark color="red" @click="backTo">
              <v-icon left>navigate_before </v-icon> return</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <ITEMLIST type="tags" :items="tags" />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Header from "../../../../components/admin/header";
import ITEMLIST from "../../../../components/ItemList";
export default {
  layout: "admin",
  components: { Header, ITEMLIST },
  data() {
    return {
      tags: {}
    };
  },
  mounted() {
    this.tagsTable();
  },
  methods: {
    async tagsTable() {
      const res = await this.$axios.get(
        "http://localhost:3000/admin/get-mcq-table/by-tags"
      );
      if (res) {
        this.tags = res.data.tagObj;
      }
    },
    backTo() {
      this.$router.go(-1);
    }
  }
};
</script>

<style></style>
