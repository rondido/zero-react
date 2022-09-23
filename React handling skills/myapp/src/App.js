import "./App.css";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPractice_1 from "./EventPractice_1";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import { Component } from "react";
import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return (
      <div>
        {/* <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollBottom()}>맨 밑으로</button> */}
        <IterationSample />
      </div>
    );
  }
}

export default App;
