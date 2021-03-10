<template>
  <div>
    <Header />
    <v-main>
      <v-container fill-height fluid>
        <v-row justify="center">
          <v-col cols="12" md="3" lg="3" sm="1" xs="1"> </v-col>
          <v-col cols="12" md="2" lg="2" sm="2" xs="1"> </v-col>
        </v-row>
        <v-row justify="space-around">
          <!-- Card-1 -->
          <v-col cols="12" sm="6" xs="12" md="5">
            <v-card width="auto" height="auto" rounded="lg" color="#f2f2f2">
              <v-card-title class="font-weight-bold text-h5">
                <v-row justify="space-between">
                  <v-col cols="12" lg="6" md="7" sm="8">
                    Edit Existing MCQs
                  </v-col>
                  <v-col class="mr-3" cols="12" lg="3" md="4" sm="4">
                    <v-btn @click="editMcqs" dark color="red"
                      >Database<v-icon right>chevron_right</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-title>
              <v-card-text style="overflow-y: auto; height:128px">
                Browse catagory wise MCQs.<br />
                Add & Edit MCQs.
              </v-card-text>
              <v-card-actions>
                <v-btn @click="byTags" dark color="red">
                  by Tags
                  <v-icon right>sell</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="byCategories" dark color="red">
                  by Categories
                  <v-icon right>category</v-icon></v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- Card-2 -->
          <v-col cols="12" sm="6" xs="12" md="5">
            <v-card height="auto" rounded="lg" color="#f2f2f2">
              <v-card-title class="font-weight-bold text-h5">
                Add MCQ Using .xlsx Sheet
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col> Add MCQs by uploading Excel Sheet. </v-col>
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
              </v-card-text>
              <v-card-actions>
                <v-btn @click="viewData" v-if="view" color="success">
                  View Data
                </v-btn>

                <v-spacer></v-spacer>
                <v-btn @click="xlSheet" dark color="red"
                  >Upload <v-icon right>upload</v-icon></v-btn
                >
              </v-card-actions>
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
      empty: false,
      view: false
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
    editMcqs() {
      this.$router.push("edit-site/edit-mcqs");
    },
    viewData() {
      this.$router.push("/admin/edit-site/edit-mcqs");
    },
    byCategories() {
      this.$router.push("/admin/edit-site/by-categories");
    },
    byTags() {
      this.$router.push("/admin/edit-site/by-tags");
    },
    byCategories() {
      this.$router.push("/admin/edit-site/by-categories");
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
          this.view = true;
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
