import {createStore} from "redux";
const initialState = { counter: 0 , showCounter:true}
const countReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return { counter: state.counter + 1 , showCounter : state.showCounter};
  }
  if (action.type === 'decrement') {
    return { counter: state.counter - 1 , showCounter : state.showCounter};
  }
  if (action.type === 'increse') {
    return { counter: state.counter + action.amount , showCounter : state.showCounter};
  }
  if(action.type === 'toggle'){
    return { counter: state.counter , showCounter : !state.showCounter};
  }
  return  state ; // don't retun with {}, just state
};
// NOTES":
// We sould never do state.counter++ as we should never mutate current state,
//Best practice is we should always override the prev state and retrun new state.

// We always have to add all the field while returning new object, coz lets say if we retrn like below 
//  return { counter: state.counter} 
// then , the showCounter value will be undefined.

const store = createStore(countReducer); // ruducer which will updated the data

export default store;
// First dispatch will executed and It will call reducer
// the argument we are passing thorugh dispatch will go in second argument i.e action of the reducer method
// once the value of state variable changed, It will call the subscrive method
