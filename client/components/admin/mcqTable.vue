<template>
  <v-card>
    <v-card-title>
      <v-row align="center" justify="center">
        <v-col cols="12" lg="4" md="4" sm="4" xs="12">
          <div>MCQ Table</div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" lg="4" md="4" sm="4" xs="12">
          <v-text-field
            v-model="search"
            prepend-inner-icon="search"
            placeholder="Search MCQs"
            filled
            dense
            rounded
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col align="end" cols="12" lg="4" md="4" sm="4" xs="12">
          <v-dialog v-model="dialogAdd" max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on">add mcq</v-btn>
            </template>
            <MCQFORM
              title="Add"
              :editItemData="newItemData"
              @closeDialog="closeDialog"
            />
          </v-dialog>
        </v-col>
      </v-row>
    </v-card-title>

    <!-- Selected_Delete -->
    <v-row v-if="selected && selected.length > 0">
      <v-col cols="1">
        <v-btn
          @click="dialogSelectedDelete = true"
          class="ma-2"
          text
          color="error"
        >
          <v-icon medium color="error">delete</v-icon>Delete
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn class="ma-2 ml-10" text color="primary" @click="selected = []">
          Cancel
        </v-btn>
      </v-col></v-row
    >
    <v-divider></v-divider>

    <!-- DELETE_DIALOG -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <DIALOGDELETE @closeDialog="closeDialog" @deleteConfirm="deleteConfirm" />
    </v-dialog>

    <!-- DELETE_SELECTED_DIALOG -->
    <v-dialog v-model="dialogSelectedDelete" width="650px">
      <DELETESELECTEDMCQ :selected="selected" @closeDialog="closeDialog" />
    </v-dialog>
    <!-- EDIT/ADD DIALOG -->
    <v-dialog v-model="dialogEdit" max-width="600px">
      <MCQFORM
        title="Edit"
        :editItemData="editItemData"
        @closeDialog="closeDialog"
      />
    </v-dialog>

    <!-- DATA_TABLE -->
    <v-data-table
      :headers="headers"
      :items="mcqs"
      :expanded.sync="expanded"
      item-key="question"
      show-expand
      v-model="selected"
      show-select
      class="elevation-1"
      :search="search"
    >
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-container>
            <v-row>
              <v-col
                :class="
                  item.optionA === item.answer
                    ? 'font-weight-bold green--text'
                    : 'font-weight-bold'
                "
                cols="12"
                lg="3"
                md="3"
                sm="12"
                sx="12"
              >
                A. {{ item.optionA }}
              </v-col>
              <v-col
                :class="
                  item.optionB === item.answer
                    ? 'green--text font-weight-bold'
                    : 'font-weight-bold'
                "
                cols="12"
                lg="3"
                md="3"
                sm="12"
                sx="12"
              >
                B. {{ item.optionB }}
              </v-col>
              <v-col
                :class="
                  item.optionC === item.answer
                    ? 'font-weight-bold green--text'
                    : 'font-weight-bold'
                "
                cols="12"
                lg="3"
                md="3"
                sm="12"
                sx="12"
              >
                C. {{ item.optionC }}
              </v-col>
              <v-col
                :class="
                  item.optionD === item.answer
                    ? 'green--text font-weight-bold '
                    : 'font-weight-bold'
                "
                cols="12"
                lg="3"
                md="3"
                sm="12"
                sx="12"
              >
                D. {{ item.optionD }}
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                lg="1"
                md="1"
                sm="1"
                xs="1"
                class="font-weight-bold"
              >
                Tags:
              </v-col>
              <v-col cols="12" lg="11" md="11" sm="11" xs="11">
                {{ item.displayTags }}
              </v-col>
            </v-row>
          </v-container>
        </td>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          create
        </v-icon>
        <v-icon small @click="deleteItem(item._id)">
          delete
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import DIALOGDELETE from "../../components/admin/dialogs/dialogDelete";
import DELETESELECTEDMCQ from "../../components/admin/dialogs/dialogSelectedDelete";
import MCQFORM from "../../components/admin/dialogs/mcqForm";
export default {
  layout: "admin",
  components: { DIALOGDELETE, DELETESELECTEDMCQ, MCQFORM },
  props: {
    mcqs: {}
  },
  data() {
    return {
      newItemData: {
        question: "",
        category: "",
        subCategory: "",
        childCategory: "",
        tags: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: ""
      },
      editItemData: [],
      dialogAdd: false,
      dialogEdit: false,
      dialogSelectedDelete: false,
      selected: [],
      dialogDelete: false,
      deleteItemData: String,
      expanded: [],
      search: "",
      tagFilter: "",
      headers: [
        { text: "", value: "data-table-expand" },
        {
          text: "Question",
          align: "start",
          value: "question"
        },
        { text: "Category", value: "category" },

        { text: "Actions", align: "right", value: "actions", sortable: false }
      ],

      AnswerRule: [
        (v => v === this.optionA || "Password must match with optionA") ||
          (v => v === this.optionB || "Password must match with option"),
        v => v === this.optionC || "Password must match with options",
        v => v === this.option || "Password must match with options"
      ]
    };
  },
  // watch: {
  //   mcqs(val) {
  //     for (let i in val) {
  //       this.filtaryu = [];
  //       let tags = val[i].tags.split(" ");
  //       for (let j in tags) {
  //         if (this.tagFilter) {
  //           if (this.tagFilter && tags[j]) {
  //             this.filtaryu.push(val[i]);
  //           }
  //         } else {
  //           this.filtaryu.push(val[i]);
  //         }
  //       }
  //     }
  //   }
  // },

  methods: {
    answerValue(answer) {
      this.answer = answer;
    },

    editItem(item) {
      this.editItemData = item;
      this.dialogEdit = true;
    },
    // async addMcq() {
    //   let mcq = this.newItemData;
    //   let stringTags = mcq.tags.split(", ");
    //   mcq.tagsArray = stringTags;
    //   const res = await this.$axios.post(
    //     "http://localhost:3000/admin/edit-site/add-mcq",
    //     { mcq }
    //   );
    //   if (res) {
    //     this.getMcqTable();
    //     this.dialogAdd = false;
    //   }
    // },
    // async editMcq() {
    //   let mcq = this.editItemData;
    //   let stringTags = mcq.tags.split(", ");
    //   mcq.tagsArray = stringTags;
    //   const res = await this.$axios.post(
    //     "http://localhost:3000/admin/edit-site/edit-mcq",
    //     { mcq }
    //   );
    //   if (res) {
    //     this.getMcqTable();
    //     this.dialogEdit = false;
    //   }
    // },
    deleteItem(itemId) {
      this.deleteItemData = itemId;
      this.dialogDelete = true;
    },
    async deleteConfirm() {
      let itemId = this.deleteItemData;

      const res = await this.$axios.post(
        "http://localhost:3000/admin/edit-site/delete-mcq",
        { itemId }
      );
      if (res.data === "success") {
        this.$emit("refresh");
        this.dialogDelete = false;
      }
    },
    closeDialog() {
      this.$emit("refresh");
      this.selected = [];
      this.dialogAdd = false;
      this.dialogEdit = false;
      this.dialogDelete = false;
      this.dialogSelectedDelete = false;
    }
  }
};
</script>

<style></style>
