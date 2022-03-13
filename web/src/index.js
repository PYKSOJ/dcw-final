import React from "react";
import ReactDOM from "react-dom";

// import pkg from "semantic-ui-react/package.json";
import Navbar from "./Navbar";
import App from "./App";
const element = (
  <div>
    <Navbar />
    <App />
  </div>

);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(element, document.getElementById("root"));
