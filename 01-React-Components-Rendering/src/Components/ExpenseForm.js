import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [changeTitle, setChangeTitle] = useState(""); // by default input field will be blank
  const [changeAmount, setChangeAmount] = useState("");
  const [changeDate, setChangeDate] = useState("");

  const titleChangeHandler = (event) => {
    setChangeTitle(event.target.value);
    console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setChangeAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setChangeDate(event.target.value);
  };
  const formsubmitHandler = (event) => {
    // by default form onsubmit has behaviour to load the page once onsubmit executed.

    event.preventDefault()
    const newExpense = {
      title: changeTitle,
      amount: changeAmount,
      date: new Date(changeDate)
    }
    props.onSaveExpenseData(newExpense);
    console.log(newExpense);
    setChangeTitle('');
    setChangeAmount('');
    setChangeDate('');
  };

  const cancelFormHnalder = () =>{
    props.onCancelForm()
  }

  return (
    <form onSubmit={formsubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={changeTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={changeAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>DATE</label>
          <input
            type="date"
            min="2009-01-02"
            max="2022-12-31"
            value={changeDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={cancelFormHnalder}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
