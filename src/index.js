// get 3rd party dependencies
import React from "react";
import ReactDom from "react-dom";
// import stylesheet
import "./style.css";

// import component
import App from "./App";

// ReactDom.render(What do I want to render, where do I want to render it);
ReactDom.render(<App />, document.getElementById("root"));
