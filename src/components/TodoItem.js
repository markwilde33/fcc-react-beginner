import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <h4>{props.todo.text}</h4>
    </div>
  );
}

export default TodoItem;
