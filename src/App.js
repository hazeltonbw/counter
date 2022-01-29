import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement } from "./slices/CounterSlice";
import { darkModeToggle } from "./slices/DarkModeSlice";
function App() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const darkMode = useSelector((state) => state.lightTheme.darkMode);
    const darkModeStyles = darkMode
        ? { backgroundColor: "#272727", color: "white" }
        : { backgroundColor: "#fff", color: "black" };
    return (
        <div style={darkModeStyles} className="App">
            <div className="container">
                <button
                    className="darkMode"
                    onClick={() => dispatch(darkModeToggle())}
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
                <h1>Simple Counter React/Redux App</h1>
                <div className="buttons">
                    <button
                        className="decrement"
                        onClick={() => dispatch(decrement())}
                    >
                        -
                    </button>
                    <button
                        className="increment"
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </button>
                </div>
                <h2 className="count">{count}</h2>
            </div>
        </div>
    );
}

export default App;
