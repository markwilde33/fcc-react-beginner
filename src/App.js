import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      firstName: event.target.value,
      lastName: event.target.value,
    });
    console.log(this.state.firstName);
  }

  render() {
    return (
      <div>
        <h2>Code goes here</h2>
        <form>
          <input
            type="text"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <h2>
            {this.state.firstName} {this.state.firstName}
          </h2>
        </form>
      </div>
    );
  }
}

export default App;
