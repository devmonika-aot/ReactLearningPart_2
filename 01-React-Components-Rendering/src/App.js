import ExpenseItem   from "./Components/ExpenseItem";
import NewExpense from "./Components/NewExpense";
function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const newExpenseHandler = (newExpenseData)=>{
    // NOTE
    // No need od arrar destructuring as we already added ID in NewExpense.js components.
    // We only do  destructuring if we have to add anything in the object
    console.log(newExpenseData)
  }
  return (
    <div>
      <h2><NewExpense addNewExpense={newExpenseHandler}/></h2>
      <ExpenseItem date={expenses[0].date} title={expenses[0].title} price={expenses[0].amount}></ExpenseItem>
      <ExpenseItem date={expenses[1].date} title={expenses[1].title} price={expenses[1].amount}></ExpenseItem>
      <ExpenseItem date={expenses[2].date} title={expenses[2].title} price={expenses[2].amount}></ExpenseItem>
      <ExpenseItem date={expenses[3].date} title={expenses[3].title} price={expenses[3].amount}></ExpenseItem>
      
    </div>
  );
}

export default App;
