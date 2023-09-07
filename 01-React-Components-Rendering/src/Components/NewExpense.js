import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const newExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.addNewExpense(newExpenseData);
    console.log(newExpenseData)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={newExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
