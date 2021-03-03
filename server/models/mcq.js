const mongoose = require("mongoose");

const mcqSchema = mongoose.Schema({
  question: String,
  optionA: String,
  optionB: String,
  optionC: String,
  optionD: String,
  answer: String,
  category: String,
  tags: String,
});

module.exports = mongoose.model("Mcq", mcqSchema);
