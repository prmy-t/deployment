const mongoose = require("mongoose");

const mcqSchema = mongoose.Schema({
  date: "",
  question: String,
  optionA: String,
  optionB: String,
  optionC: String,
  optionD: String,
  answer: String,
  category: String,
  subCategory: String,
  childCategory: String,
  tags: [],
});

module.exports = mongoose.model("Mcq", mcqSchema);
