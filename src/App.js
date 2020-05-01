import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData";

function App() {
  const todoItems = todosData.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ));
  return <div className="todo-list">{todoItems}</div>;
}

export default App;
