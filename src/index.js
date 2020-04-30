import React from "react";
import ReactDom from "react-dom";

// ReactDom.render(What do I want to render, where do I want to render it);
ReactDom.render(
  <div>
    <ul>
      <li>hello</li>
      <li>hoo hah</li>
      <li>boo boo</li>
    </ul>
  </div>,
  document.getElementById("root")
);
