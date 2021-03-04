<template>
  <div>
    <Header />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col>
            <McqTable />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Header from "../../../components/admin/header";
import McqTable from "../../../components/admin/mcqTable";

export default {
  layout: "admin",
  components: { Header, McqTable }
};
</script>

<style></style>
