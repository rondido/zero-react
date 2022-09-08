import React from "react";
import ReactDOM from "react-dom";
import FollowButton from "./components/FollowButton";

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<FollowButton />, domContainer);
