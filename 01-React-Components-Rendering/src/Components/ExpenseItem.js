import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
import react,{useState} from "react";


function ExpenseItem(props) {
  
  const[title,setTitle]=useState(props.title)

  const clickHandler = () =>{
    setTitle("Updated")
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.price}</div>
      <button onClick={clickHandler}>changes title</button>
    </Card>
  );
}
export default ExpenseItem;
// To format shft+alt+f
