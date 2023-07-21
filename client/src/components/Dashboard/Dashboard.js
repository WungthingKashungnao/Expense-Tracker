import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Chart from "../Chart/Chart";
import { dollar } from "../../utils/Icons";
import { useGlobalContext } from "../../context/globalContext";

const Dashboard = () => {
  const { totalIncome, totalExpenses, totalBalance } = useGlobalContext();
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {dollar}
                  {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expenses</h2>
                <p>
                  {dollar}
                  {totalExpenses()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                {dollar}
                {totalBalance()}
              </div>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
};

const DashboardStyled = styled.div``;
export default Dashboard;
