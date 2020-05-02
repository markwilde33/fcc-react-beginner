// get 3rd party dependencies
import React from "react";
import ReactDom from "react-dom";
// import stylesheet
import "./style.css";

// import component
// import App from "./App";

// #2
class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="Clarice" />
        <Greeting />
      </div>
    );
  }
}
// #2
class Header extends React.Component {
  render() {
    return <p>Welcome, {this.props.username}!</p>;
  }
}

// #3
class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }
    return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
  }
}
// ReactDom.render(What do I want to render, where do I want to render it);
ReactDom.render(<App />, document.getElementById("root"));
