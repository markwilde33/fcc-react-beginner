import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://anapioficeandfire.com/api/characters/100")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          character: data,
        });
        console.log(data);
      });
  }

  render() {
    const output =
      this.state.loading === true
        ? "Please stand by"
        : this.state.character.name;
    return (
      <div>
        <br />
        <h1>Code goes here</h1>
        <h3 style={{ color: "blue" }}>{output}</h3>
      </div>
    );
  }
}

export default App;
