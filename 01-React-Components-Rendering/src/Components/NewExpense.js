import React, {useState}from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [loadForm, updateLoadForm] = useState(false);
  const newExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.addNewExpense(newExpenseData);
    console.log(newExpenseData)
  };
  const expenseFormHandler = () => {
    updateLoadForm(true);
  };
  const cancelFormHandler = () => {
    updateLoadForm(false);
  };
  return (
    <div className="new-expense">
      <button onClick={expenseFormHandler}> Add New Expense</button>
      {loadForm && <ExpenseForm  onSaveExpenseData={newExpenseDataHandler} onCancelForm={cancelFormHandler}/>}
    
    </div>
  );
};

export default NewExpense;
