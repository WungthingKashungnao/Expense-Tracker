const router = require("express").Router();
const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/income.js");

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome);

module.exports = router;
