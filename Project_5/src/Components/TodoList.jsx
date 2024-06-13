import React from "react";
import { useState } from "react";

const TodoList = ({ todoItems }) => {
  const [todoList, settodoList] = useState(todoItems);

  const isCompleted = (id) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id == id ? { ...todo, isDone: true } : todo
    );

    settodoList(updatedTodoList);
  };

  console.log(todoList);
  return (
    <div className=" text-center ">
      <h1 className=" font-bold text-2xl p-5">TodoList App </h1>
      <div>
        {todoList.map((todo) => (
          <div
            key={todo.id}
            className=" bg-slate-300 p-4 mx-auto w-1/2 my-2 rounded-md font-semibold flex justify-between px-6"
          >
            <h1
              style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
              className=" text-xl"
            >
              {todo.task}
            </h1>
            <button
              onClick={() => isCompleted(todo.id)}
              className=" p-3 bg-green-800 text-white rounded-lg"
            >
              Mark as Done
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
