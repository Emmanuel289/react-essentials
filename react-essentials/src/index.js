import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

// First arg in render() is the element that we want to create and the Second arg in render() is where we want to place the created element in the index.html file

ReactDOM.render(
  <Router>
    <App login="Emmanuel289" />
  </Router>,
  document.getElementById("root")
);
