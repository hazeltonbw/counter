import { createStore, applyMiddleware, compose } from "redux";

const initialState = { value: 0 };
export const increment = () => {
  return {
    type: "counter/increment",
  };
};
export const decrement = () => {
  return {
    type: "counter/decrement",
  };
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/increment":
      return {
        value: state.value + 1,
      };
    case "counter/decrement":
      return {
        value: state.value - 1,
      };
    default:
      return state;
  }
};

/* Had to include this to get Redux Devtools to work 
   on Google Chrome
*/
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware()
  // other store enhancers if any
);
export const store = createStore(counterReducer, enhancer);
