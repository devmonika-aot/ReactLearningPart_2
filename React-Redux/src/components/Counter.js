import classes from "./Counter.module.css";
import { UseSelector, useDispatch, useSelector } from "react-redux";

const Counter = () => {
  // We use useSelector to extract data from store, this useSelector is ran by react when it loads.
  // The reason we used useSelector instead of useStore is , When we use useSelector, It automatically
  // subscribe to the store. So here, Counter components automatically subscribe to store, It will be called
  // automatically if counter value in the store changes.
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter) // extracting showCounter as well, so that
  //whenever value gets changed, It will re-execute the Counter.js component as It subscribe automatically
  // This hooks is executed by react as well when it loads.

 // console.log("checking weather Counter component is getting called after each val updation in store")
  const dispatch = useDispatch();
 

  const increase = () => {
    dispatch({ type: "increse", amount:5 }); // passing payload while calling reducer
  };
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={increase}>increase by 5 </button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
