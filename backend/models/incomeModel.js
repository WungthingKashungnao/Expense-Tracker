const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, //remove unecessary white spaces
      maxLength: 50,
    },
    amount: {
      type: Number,
      required: true,
      maxLength: 20,
      trim: true, //remove unecessary white spaces
    },
    type: {
      type: String,
      default: "income",
    },
    date: {
      type: Date,
      required: true,
      trim: true, //remove unecessary white spaces
    },
    category: {
      type: String,
      required: true,
      trim: true, //remove unecessary white spaces
    },
    description: {
      type: String,
      required: true,
      maxLength: 20,
      trim: true, //remove unecessary white spaces
    },
  },
  { timestamps: true } //timestamps will be created whenever we create or upadate an item
);

// Income is the name of the schema, but it will acutomatically be converted to incomes
module.exports = mongoose.model("Income", IncomeSchema);
