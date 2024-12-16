const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  type: { type: String, enum: ["text", "grid", "checkbox"], required: true },
  questionText: { type: String, required: true },
  options: [{ type: String }], // For checkbox/grid
  image: { type: String }, // Optional
});

const FormSchema = new mongoose.Schema({
  title: { type: String, required: true },
  headerImage: { type: String }, // Optional
  questions: [QuestionSchema],
});

module.exports = mongoose.model("Form", FormSchema);
