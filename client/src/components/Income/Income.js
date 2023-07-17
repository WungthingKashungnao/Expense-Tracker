import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

const Income = () => {
  const { addIncome, getIncomes, incomes } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Income</h1>
        <div className="income-content">
          {/* form container start */}
          <div className="form-container">
            <Form />
          </div>
          {/* form container end */}
          {/* incomes container start */}
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description } =
                income; //destructuring data

              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                  indicatorColor="var(--color-green)"
                />
              );
            })}
          </div>
          {/* incomes container end */}
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
};

const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

export default Income;
