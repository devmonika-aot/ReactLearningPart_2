import { useState } from "react";
import ExpenseItem from "./Components/ExpenseItem";
import ExpensesFilter from "./Components/ExpensesFilter";
import NewExpense from "./Components/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [dummyexpenses, updateDummyExpenses] = useState(expenses);
  const [filterYear, setFilterYear] = useState("2020");

  const newExpenseHandler = (newExpenseData) => {
    // NOTE
    // No need od arrar destructuring as we already added ID in NewExpense.js components.
    // We only do  destructuring if we have to add anything in the object

    // updateDummyExpenses(expenses.push(newExpenseData)) -> use destructering whenever we have to DD DATA bw array
    updateDummyExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
    console.log(newExpenseData);
  };
  const selectedYear = (val) => {
    setFilterYear(val);
    console.log(val);
  };

  const filteredExpenses = dummyexpenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  let expenseContent = <p>The List is empty</p>;
  if (filteredExpenses.length > 0) {
    expenseContent =
      filteredExpenses.length > 0 &&
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.amount}
        />
      ));
  }

  return (
    <div>
      <h2>
        <NewExpense addNewExpense={newExpenseHandler} />
      </h2>
      <ExpensesFilter onSelectYear={selectedYear} />

      {expenseContent}
    </div>
  );
}

export default App;
