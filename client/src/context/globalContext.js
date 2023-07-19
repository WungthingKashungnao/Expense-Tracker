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
  console.log(totalIncome());

  return (
    <GlobalContext.Provider
      value={{ addIncome, getIncomes, incomes, deleteIncome, totalIncome }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

//exporting the useGlobalContext function which return the GlobalContext
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
