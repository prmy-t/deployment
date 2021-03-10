<template>
  <div>
    <HEADER />
    <v-main color="#f2f2f2">
      <v-container>
        <v-row>
          <v-col align="center" justify="space-around">
            <LOGINFORM /> </v-col
        ></v-row>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import HEADER from "../../components/admin/header";
import LOGINFORM from "../../components/admin/loginForm";
export default {
  layout: "admin",
  components: { HEADER, LOGINFORM }
};
</script>
