import "./App.css";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPractice_1 from "./EventPractice_1";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import { Component } from "react";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

// 랜덤 색상 생성
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  
  render() {
    return (
      <div>
        {/* <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollBottom()}>맨 밑으로</button> */}
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
