<template>
  <div>
    <Header />
    <v-main color="#f2f2f2">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title> Select file from machine </v-card-title>
              <v-card-text>
                <v-file-input
                  accept="image/jpg"
                  chips
                  outlined
                  dense
                  multiple
                  show-size
                  multiple
                  prepend-icon="description"
                  label="Select file"
                ></v-file-input>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Header from "../../../components/admin/header";
export default {
  layout: "admin",
  components: { Header }
};
</script>

<style></style>
