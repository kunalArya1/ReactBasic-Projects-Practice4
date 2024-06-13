import React from "react";
import TodoList from "./Components/TodoList";

const todoItem = [
  { id: 1, task: "Writing 1-page poem", isDone: true },
  { id: 2, task: "Gym", isDone: false },
  { id: 3, task: "Shopping", isDone: false },
  { id: 4, task: "Standup call", isDone: true },
];
const App = () => {
  return (
    <div>
      <TodoList todoItems={todoItem} />
    </div>
  );
};

export default App;
