<template>
  <div>
    <v-bottom-navigation app absolute dark background-color="red">
      <v-btn @click="homeEvent">
        <span class="text-subtitle-1 font-weight-bold">Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <!-- BUTTON 2 -->
      <v-bottom-sheet v-model="sheet" inset>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            <span class="text-subtitle-2 font-weight-bold">Catagories</span>
            <v-icon>description </v-icon>
          </v-btn>
        </template>
        <v-sheet class="text-center" height="auto" width="auto" rounded="lg">
          <v-row justify="space-between" align="center">
            <v-spacer></v-spacer>
            <v-col justify="top" align="end" cols="12" md="4" sm="4">
              <v-btn class="mr-3" text color="error" @click="sheet = !sheet">
                close
              </v-btn>
            </v-col>
            <!-- <v-col align="start " class="text-h6 ml-5" cols="12" md="7" sm="7">
              Select From Catagories
            </v-col> -->
          </v-row>
          <v-container>
            <v-row class="mt-1 ml-8 mr-8">
              <v-col
                v-for="item in catagories"
                :key="item.title"
                cols="12"
                md="6"
                sm="12"
              >
                <v-btn
                  @click="selectCatagory(item.title)"
                  width="300"
                  class="ml-2 mr-2"
                  ><v-icon left>{{ item.icon }}</v-icon> {{ item.title }}
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="mb-8"></v-row>
          </v-container>
        </v-sheet>
      </v-bottom-sheet>

      <!-- BUTTON 3 -->
      <v-btn @click="snackbar = true">
        <span class="text-subtitle-2 font-weight-bold">Past Papers</span>
        <v-icon>restore_page </v-icon>
      </v-btn>
    </v-bottom-navigation>

    <!-- SNACKBAR -->
    <v-snackbar dark color="grey darken-3" v-model="snackbar" timeout="2000">
      Coming Soon
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      catagories: [
        { title: "Computer Science", icon: "laptop_mac" },
        { title: "Current Affairs", icon: "online_prediction" },
        { title: "Medical", icon: "medical_services" },
        { title: "Government Exams", icon: "gavel" }
      ],
      sheet: false,
      snackbar: false
    };
  },
  methods: {
    homeEvent() {
      this.$router.push("/");
    },
    selectCatagory(name) {
      this.sheet = false;
      const url = name.split(" ").join("-");
      this.$router.push("/" + url);
    }
  }
};
</script>
