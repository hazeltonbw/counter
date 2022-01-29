import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement } from "./Components/CounterSlice";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.value);
  return (
    <div className="App">
      <div className="container">
        <h1>Simple Counter React/Redux App</h1>
        <div className="buttons">
          <button className="decrement" onClick={() => dispatch(decrement())}>
            -
          </button>
          <button className="increment" onClick={() => dispatch(increment())}>
            +
          </button>
        </div>
        <h2 className="count">{count}</h2>
      </div>
    </div>
  );
}

export default App;
