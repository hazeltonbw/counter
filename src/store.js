// store here
import { counterReducer } from "./Components/CounterSlice";
import { darkModeReducer } from "./Components/DarkModeSlice";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
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

const reducers = combineReducers({
    counterReducer: counterReducer,
    darkModeReducer: darkModeReducer,
});
export const store = createStore(reducers, enhancer);
