<template>
  <div>
    <Header />
    <v-main>
      <v-container fill-height fluid>
        <v-row class="mt-8" justify="space-around">
          <v-col cols="12" sm="6" xs="12" md="5">
            <v-card height="180" rounded="lg" color="#f2f2f2">
              <v-card-title class="font-weight-bold text-h5">
                Edit Existing MCQs
              </v-card-title>
              <v-card-text>
                Browse catagory wise MCQs.<br />
                Add & Edit MCQs.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="red"
                  >Enter <v-icon right>chevron_right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" xs="12" md="5">
            <v-card height="auto" rounded="lg" color="#f2f2f2">
              <v-card-title class="font-weight-bold text-h5">
                Add MCQ Using .xlsx Sheet
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col> Add MCQs by uploading Excel Sheet.{{ sheet }} </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="12">
                    <v-file-input
                      v-model="sheet"
                      chips
                      outlined
                      dense
                      show-size
                      prepend-icon="description"
                      label="Select file"
                    ></v-file-input>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="8" v-if="empty">
                    <v-alert outlined dense type="error">
                      select file to upload !
                    </v-alert>
                  </v-col>
                </v-row>
                <v-row>
                  <v-spacer></v-spacer>
                  <v-col cols="12" md="4">
                    <v-btn @click="xlSheet" dark color="red"
                      >Upload <v-icon right>upload</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- SNACKBAR -->
      <v-snackbar dark color="success" v-model="saved" timeout="2000">
        <v-icon left>check_circle </v-icon>
        saved successfully!
        <template v-slot:action="{ attrs }">
          <v-btn color="white" text v-bind="attrs" @click="saved = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-main>
  </div>
</template>
<script>
import Header from "../../../components/admin/header";
export default {
  layout: "admin",
  components: { Header },
  data() {
    return {
      sheet: null,
      saved: false,
      empty: false
    };
  },
  computed: {
    isLoggedIn: {
      get() {
        return this.$store.state.auth.isLoggedIn;
      },
      set(isLoggedIn) {
        this.$store.commit("auth/SET_ISLOGGEDIN", isLoggedIn);
      }
    }
  },
  methods: {
    singleEntry() {
      this.$router.push("edit-site/add-mcq");
    },
    async xlSheet() {
      let formData = new FormData();
      formData.append("sheet", this.sheet);

      const res = await this.$axios.post(
        "http://localhost:3000/admin/file-upload",
        formData
      );
      if (res) {
        if (res.data.saved) {
          this.empty = false;
          this.saved = true;
          this.sheet = null;
        }
        if (res.data.empty) {
          this.empty = true;
        }
      }
    }
  }
};
</script>
