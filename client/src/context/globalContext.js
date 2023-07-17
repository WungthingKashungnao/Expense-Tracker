import { createContext, useContext, useState } from "react";
import axios from "axios";

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
  };

  // function to get income
  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`);
    setIncomes(response.data);
    // console.log(response.data);
  };

  // getIncomes();
  return (
    <GlobalContext.Provider value={{ addIncome, getIncomes, incomes }}>
      {children}
    </GlobalContext.Provider>
  );
};

//exporting the useGlobalContext function which return the GlobalContext
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
