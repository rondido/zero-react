import { useEffect } from "react";
import "./App.css";
//import Calculator from "./components/Calculator";
//import Clock from "./components/Clock";
//import Counter from "./components/Counter";
//import Counter2 from "./components/Counter2";
import FunctionClock from "./components/FunctionClock";
function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <FunctionClock />
    </div>
  );
}

export default App;
