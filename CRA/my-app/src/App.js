import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  const info = {
    firstName: "Park",
    lastName: "Jin",
    withImg: true,
  };
  return (
    <div className="App">
      {/* <Header title={"Learn React A"} />
      <Header title={"Learn React B"} />
      <Header title={"Learn React C"} /> */}
      <Header />
      <Welcome {...info} />
    </div>
  );
}

export default App;
