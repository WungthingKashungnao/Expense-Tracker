import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"; //external package

import { Line } from "react-chartjs-2"; //external package
import { styled } from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { dateFormat } from "../../utils/dateFormat";

// registering chartjs elements
ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Chart = () => {
  // on the chart date will be on the x-axis and the values will be on the y-axis

  const { incomes, expenses } = useGlobalContext();

  //   data object  for chartjs which will be used on the line element
  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc; //destructuring date from incomes state
      return dateFormat(date);
    }),
    // data sets for income and expenses
    datasets: [
      {
        label: "Income",
        data: [
          ...incomes.map((income) => {
            const { amount } = income; //destructuring amount from incomes state
            return amount;
          }),
        ],
        backgroundColor: "green",
        tension: 0.2, //tesnion is for the curve ont the graph
      },
      {
        label: "Expenses",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense; //destructuring amount from expenses state
            return amount;
          }),
        ],
        backgroundColor: "red",
        tension: 0.2, //tesnion is for the curve ont the graph
      },
    ],
  };

  return (
    <ChartStyled>
      <Line data={data} />
    </ChartStyled>
  );
};

export default Chart;

const ChartStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
`;
