const IncomeSchema = require("../models/incomeModel.js");

// method for adding income start
exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body; //receiving data from the user

  const income = IncomeSchema({
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

    await income.save(); //saving data into mongodb database
    res.status(200).json({ message: "Income added" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
  console.log(income);
};
// method for adding income end

// method for getting income start
exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 }); //getting all the data from the database and sorting by the latest creation date
    res.status(200).json(incomes); //sending the response
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};
// method for getting income end

// method to delete income start
exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Income deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error", error: err });
    });
};
// method to delete income end
