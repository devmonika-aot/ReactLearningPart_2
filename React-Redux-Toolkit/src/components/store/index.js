import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//We will create slice for each global state
// If we have authentication data in Authentication.js componnet we will create slice for that as well.
// Here , we have date with data counter and showCounter from Counter.js component as global state,
// We will create slice .

const counterSlice = createSlice({
  name: "coucounter",
  initialState:initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    Toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});


const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
// We won't use createStore as It can have only one reducer
//const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
// here if we have more than one reducer in it then we can do like below:
//const store = configureStore({
//  reducer: {counter:counterSlice.reducer ,auth:authSlice.reducer})
// });

// counterSlice.actions is returning all the method define inside reducers as KEY. So method name KEY
export const authAction = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;
