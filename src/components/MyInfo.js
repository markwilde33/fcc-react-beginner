import React from "react";

// functional component(s)
function MyInfo() {
  return (
    <div className="DottedBox">
      <div className="DottedBox_content">
        <h1>Mark</h1>
        <p>
          <strong>Likes coding, doesn't like watching TV</strong>
        </p>
        <h3>Here are some places I would like to visit</h3>
        <ul>
          <li>Almeria</li>
          <li>San Francisco</li>
          <li>Vienna</li>
        </ul>
      </div>
    </div>
  );
}

export default MyInfo;
