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
          <v-btn @click="editItem(item)">add mcq</v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-divider></v-divider>

    <!-- DELETE_DIALOG -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline"
          >Are you sure you want to delete this item?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- EDIT/ADD DIALOG -->
    <v-dialog v-model="dialogEdit" max-width="600px">
      <v-card>
        <v-card-title>
          Add mcq
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-textarea
                placeholder="Question"
                clearable
                filled
                class="pa-2"
                auto-grow
                solo
                v-model="question"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
              <v-text-field
                prepend-icon="category"
                placeholder="Category"
                filled
                dense
                rounded
                :rules="ContactRules"
                v-model="category"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
              <v-text-field
                prepend-icon="sell"
                placeholder="Tegs"
                filled
                dense
                rounded
                :rules="ContactRules"
                v-model="tags"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
              <v-text-field
                prepend-icon="list"
                placeholder="Option A"
                filled
                dense
                rounded
                :rules="ContactRules"
                v-model="optionA"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
              <v-text-field
                prepend-icon="list"
                placeholder="Option B"
                filled
                dense
                rounded
                :rules="ContactRules"
                v-model="optionB"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
              <v-text-field
                prepend-icon="list"
                placeholder="Option C"
                filled
                dense
                rounded
                :rules="ContactRules"
                v-model="optionC"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
              <v-text-field
                prepend-icon="list"
                placeholder="Option D"
                filled
                dense
                rounded
                :rules="ContactRules"
                v-model="optionD"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col align="center" cols="12" md="6" lg="6" sm="12" xs="12">
              <v-text-field
                prepend-icon="grade"
                placeholder="Answer"
                filled
                dense
                rounded
                :rules="ContactRules"
                v-model="answer"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn dark outlined @click="dialogEdit = false" color="red">
            cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn @click="addMcq" dark color="red"> add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- DATA_TABLE -->
    <v-data-table
      :headers="dessertHeaders"
      :items="desserts"
      :expanded.sync="expanded"
      item-key="question"
      show-expand
      class="elevation-1"
      :search="search"
    >
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-container>
            <v-row>
              <v-col cols="12" lg="3" md="3" sm="12" sx="12">
                A. OptionA
              </v-col>
              <v-col cols="12" lg="3" md="3" sm="12" sx="12">
                B. OptionB
              </v-col>
              <v-col cols="12" lg="3" md="3" sm="12" sx="12">
                C.OptionC
              </v-col>
              <v-col cols="12" lg="3" md="3" sm="12" sx="12">
                D. OptionD
              </v-col>
            </v-row>
          </v-container>
        </td>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          create
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          delete
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      question: "",
      category: "",
      tags: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      answer: "",
      dialogDelete: false,
      dialogEdit: false,
      expanded: [],
      search: "",
      dessertHeaders: [
        { text: "", value: "data-table-expand" },
        {
          text: "Question",
          align: "start",
          value: "question"
        },
        { text: "Category", value: "category" },
        { text: "Tags", value: "tag" },
        { text: "Actions", align: "right", value: "actions", sortable: false }
      ],
      desserts: [
        {
          question: "Frozen Yogurt",
          category: 159,
          tag: 6.0
        },

        {
          question: "Eclair",
          category: 262,
          tag: 16.0
        },
        {
          question: "Cupcake",
          category: 305,
          tag: 3.7
        },
        {
          question: "Gingerbread",
          category: 356,
          tag: 16.0
        },
        {
          question: "Jelly bean",
          category: 375,
          tag: 0.0
        },
        {
          question: "Lollipop",
          category: 392,
          tag: 0.2
        },
        {
          question: "Honeycomb",
          category: 408,
          tag: 3.2
        }
      ]
    };
  },
  methods: {
    editItem(item) {
      this.dialogEdit = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    async addMcq() {
      let question = this.question;
      let category = this.category;
      let tags = this.tags;
      let optionA = this.optionA;
      let optionB = this.optionB;
      let optionC = this.optionC;
      let optionD = this.optionD;
      let answer = this.answer;

      const res = await this.$axios.post(
        "http://localhost:3000/admin/edit-site/add-mcq",
        { question, category, tags, optionA, optionB, optionC, optionD, answer }
      );
      if (res) {
        console.log(res.data);
        this.dialogEdit = false;
      }
    }
  }
};
</script>

<style></style>
