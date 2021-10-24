import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// First arg in render() is the element that we want to create and the Second arg in render() is where we want to place the created element in the index.html file

ReactDOM.render(
  <div>
    <p className="main">
      Are you about the four-day work week? You only work on the following days:
    </p>
    <ul className="days">
      <li>Monday</li>
      <li>Tuesday</li>
      <li>Wednesday</li>
      <li>Thursday</li>
    </ul>
    <p>And your weekend begins on Friday! Yay!</p>
  </div>,
  document.getElementById("root")
);
