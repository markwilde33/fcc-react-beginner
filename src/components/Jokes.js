import React from "react";

function Jokes(props) {
  return (
    <div className="joke-card">
      <h3>{props.joke.question}</h3>
      <h3>{props.joke.punchline}</h3>
    </div>
  );
}
export default Jokes;
