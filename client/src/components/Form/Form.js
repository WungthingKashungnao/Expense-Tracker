import React, { useState } from "react";
import { styled } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";

import { plus } from "../../utils/Icons";

const Form = () => {
  const { addIncome, getIncomes } = useGlobalContext(); //extracting function from the useGlobalContext
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState; //desstructuring inputState
  //   function to handleinput
  const handleInput = (name) => (e) => {
    // updating the inputState based on the data recieved, [name] is an object, it can be any of the elements of inputState
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState); //sending data to the useGlobalContext
    getIncomes();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {/*input for the title */}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Salary title"
          onChange={handleInput("title")}
        />
      </div>

      {/* input for the amount */}
      <div className="input-control">
        <input
          type="text"
          value={amount}
          name={"amount"}
          id={"amount"}
          placeholder="Salary Amount"
          onChange={handleInput("amount")}
        />
      </div>

      {/* input for the dates */}
      <div className="input-control">
        {/* DatePicker is from an external package */}
        <DatePicker
          id="date"
          placeholderText="Enter a Date"
          selected={date}
          dateFormat="dd/mm/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>

      {/* options for input */}
      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investiments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">Youtube</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* description  */}
      <div className="input-control">
        <textarea
          name="description"
          value={description}
          id="description"
          placeholder="Add a reference"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
        ></textarea>
      </div>

      <div className="submit-btn">
        <Button
          name={"Add Income"}
          icon={plus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent)"}
          color={"#fff"}
        />
      </div>
    </FormStyled>
  );
};

export default Form;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    input {
      width: 100%;
    }
  }
  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;
