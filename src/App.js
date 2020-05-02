import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Clarice",
      age: 29,
    };
  }

  render() {
    return (
      <div>
        <h1>Hi my name is {this.state.name}</h1>
        <h3> When I first met Hannibal I was {this.state.age} years old</h3>
      </div>
    );
  }
}

export default App;
