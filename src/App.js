import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }
  render() {
    let btnText = this.state.isLoggedIn ? "Log Out" : "Log In";
    let userMessage = this.state.isLoggedIn
      ? "You are now logged in"
      : "You are now logged out";
    return (
      <div>
        <button onClick={this.handleClick}>{btnText}</button>
        <h2>{userMessage}</h2>
      </div>
    );
  }
}

export default App;
