import React, { useState } from "react";
import { styled } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";

const Form = () => {
  const { addIncome } = useGlobalContext; //extracting function from the useGlobalContext
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
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {/*input for the title */}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Salary"
          onChange={() => handleInput("Salary title")}
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
          onChange={() => handleInput("amount")}
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

      <div className="submit-btn">
        <button> Add Income</button>
      </div>
    </FormStyled>
  );
};

export default Form;

const FormStyled = styled.form``;
