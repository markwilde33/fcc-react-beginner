import React from "react";

function TodoItem(props) {
  const todoComplete = {
    fontStyle: "italic",
    color: "grey",
    textDecoration: "line-through",
  };
  const todoIncomplete = {
    color: "#FF8C00",
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? todoComplete : todoIncomplete}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
