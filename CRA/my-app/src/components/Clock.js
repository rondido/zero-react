import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    console.log("componentdidMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    console.log("this.state.date");
  }
  componentWillUnmount() {
    console.log("componentWillUnMount");
    clearInterval(this.timerID);
  }
  render() {
    return (
      <>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </>
    );
  }
}
