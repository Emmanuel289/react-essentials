import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  React.createElement(
    "h1",
    {
      style: { color: "blue", fontFamily: "Sans-Serif" },
    },
    "This is an h1 element"
  ), // first arg in render() is the element that we want to create
  document.getElementById("root") // second arg in render() is where we want to place the created element in the index.html file
);
