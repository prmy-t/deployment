<template>
  <v-card>
    <v-card-title class="headline"
      >Are you sure you want to delete this
      {{ selected.length }} Mcqs?</v-card-title
    >
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
      <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    selected: {}
  },
  data() {
    return {};
  },
  methods: {
    async deleteItemConfirm() {
      let selectedMcqs = this.selected;
      const res = await this.$axios.post(
        "http://localhost:3000/admin/edit-site/delete-selected-mcqs",
        { selectedMcqs }
      );
      if (res) {
        this.$emit("closeDialog");
      }
    },
    closeDelete() {
      this.$emit("closeDialog");
    }
  }
};
</script>

<style></style>
