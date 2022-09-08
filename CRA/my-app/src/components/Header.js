import logo from "../logo.svg";
import React from "react";

const Header = (props) => {
  //props : object
  // props. 으로 접근 가능
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        <code>src/App.js</code>
        and save to reload. HI React CRA
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </a>
    </header>
  );
};
export default Header;
