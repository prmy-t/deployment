<template>
  <v-card>
    <v-card-title> {{ title }} MCQ </v-card-title>
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
            v-model="editItemData.question"
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
            v-model="editItemData.category"
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
            v-model="editItemData.tags"
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
            v-model="editItemData.optionA"
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
            v-model="editItemData.optionB"
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
            v-model="editItemData.optionC"
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
            v-model="editItemData.optionD"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col align="center" cols="12" md="6" lg="6" sm="12" xs="12">
          <v-select
            @change="answerValue"
            :items="dynamicAnswer"
            v-model="editItemData.answer"
            solo
            label="Select Answer"
          ></v-select>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn dark outlined @click="closeDialog" color="red">
        cancel
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="mcqEventHandler" dark color="red">{{ title }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    editItemData: Object
  },
  computed: {
    dynamicAnswer() {
      var a = this.editItemData.optionA;
      var b = this.editItemData.optionB;
      var c = this.editItemData.optionC;
      var d = this.editItemData.optionD;
      let answer = [];
      answer.push(a, b, c, d);
      return answer;
    }
  },
  methods: {
    async mcqEventHandler() {
      if (this.title === "Add") {
        let mcq = this.editItemData;
        let stringTags = mcq.tags.split(", ");
        mcq.tagsArray = stringTags;
        const res = await this.$axios.post(
          "http://localhost:3000/admin/edit-site/add-mcq",
          { mcq }
        );
        if (res) {
          this.$emit("closeDialog");
        }
      }
      if (this.title === "Edit") {
        let mcq = this.editItemData;
        let stringTags = mcq.tags.split(", ");
        mcq.tagsArray = stringTags;
        const res = await this.$axios.post(
          "http://localhost:3000/admin/edit-site/edit-mcq",
          { mcq }
        );
        if (res) {
          this.$emit("closeDialog");
        }
      }
    },
    async editMcq() {},
    answerValue(answer) {
      this.editItemData.answer = answer;
    },

    closeDialog() {
      this.$emit("closeDialog");
    }
  }
};
</script>

<style></style>
