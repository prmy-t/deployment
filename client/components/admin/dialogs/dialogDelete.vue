<template>
  <v-card>
    <v-card-title class="headline"
      >Are you sure you want to delete this item?</v-card-title
    >
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
      <v-btn color=" red " text @click="deleteItemConfirm">
        <v-icon left>delete</v-icon> delete</v-btn
      >
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    deleteItemConfirm() {
      this.$emit("deleteConfirm");
    },
    closeDelete() {
      this.$emit("closeDialog");
    }
  }
};
</script>

<style></style>
