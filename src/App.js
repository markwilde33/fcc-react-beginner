// working with event handling in react

import React from "react";

function onClick() {
  console.log("say hello to my little friend");
}

class App extends React.Component {
  render() {
    return (
      <div>
        <img
          onMouseOver={() => console.log("Bill is a good man")}
          src="https://www.fillmurray.com/200/100"
          alt="Bill Murray"
        />
        <br />
        <br />
        <button onClick={onClick}>Click me</button>
      </div>
    );
  }
}

export default App;
