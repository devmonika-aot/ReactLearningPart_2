import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./store/index";

const Counter = () => {

  const counter = useSelector((state) => state.counter.counter); //as we have key value in configureStore,
  //we are having key as counter so that is why we use state.counter
  const showCounter = useSelector((state) => state.counter.showCounter) 

  const dispatch = useDispatch();

  const increase = () => {
    dispatch(counterActions.increase(5)); // passing payload while calling reducer
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
  
    dispatch(counterActions.Toggle());
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
