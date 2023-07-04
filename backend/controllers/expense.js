const ExpenseSchema = require("../models/expenseModel.js");

// method for adding expense start
exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body; //receiving data from the user

  const expense = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    if (!title || !amount || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a number and greater than 0" });
    }

    await expense.save(); //saving data into mongodb database
    res.status(200).json({ message: "Expense added" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
  console.log(expense);
};
// method for adding expense end

// method for getting expense start
exports.getExpense = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 }); //getting all the data from the database and sorting by the latest creation date
    res.status(200).json(expenses); //sending the response
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};
// method for getting expense end

// method to delete expense start
exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "Expense deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error", error: err });
    });
};
// method to delete expense end
