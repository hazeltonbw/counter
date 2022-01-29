// store here
import { counterReducer } from "./slices/CounterSlice";
import { darkModeReducer } from "./slices/DarkModeSlice";
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
    counter: counterReducer,
    lightTheme: darkModeReducer,
});
export const store = createStore(reducers, enhancer);
