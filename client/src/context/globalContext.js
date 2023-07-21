import { createContext, useContext, useState } from "react";
import axios from "axios";
import Income from "../components/Income/Income";

const BASE_URL = "http://localhost:3001/api/v1/";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  //   function to add income
  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getIncomes(); //calling the function getIncomes after adding income
  };

  // function to get income
  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`);
    setIncomes(response.data);
    // console.log(response.data);
  };

  // function to delete income
  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncomes(); //calling the function getIncomes after deleting income
  };

  //function to calculate total income
  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome += income.amount;
    });
    return totalIncome;
  };

  // function add expense
  const addExpense = async (expense) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, expense)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpenses(); //calling the function getExpenses after adding expense
  };

  // function to get expense
  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expense`);
    setExpenses(response.data);
    // console.log(response.data);
  };

  // function to delete expense
  const deleteExpense = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpenses(); //calling the function getExpenses after deleting expense
  };

  //function to calculate total expense
  const totalExpenses = () => {
    let totalExpense = 0;
    expenses.forEach((expense) => {
      totalExpense += expense.amount;
    });
    return totalExpense;
  };

  // function to calculate total balance
  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  // function for transaction history
  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    // sorting the history based on the dates
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return history.slice(0, 3); //returning only 3 elements from the array
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        totalIncome,
        expenses,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

//exporting the useGlobalContext function which return the GlobalContext
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
