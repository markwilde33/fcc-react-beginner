import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return (
      <div>
        <h1>
          The user is logged {this.state.isLoggedIn === true ? "in" : "out"}
        </h1>
      </div>
    );
  }
}

export default App;
