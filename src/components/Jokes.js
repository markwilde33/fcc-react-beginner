import React from "react";

function Jokes(props) {
  return (
    <div className="joke-card">
      <h3>{props.question}</h3>
      <h3>{props.punchLine}</h3>
    </div>
  );
}
export default Jokes;
