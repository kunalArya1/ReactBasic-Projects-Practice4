import React from "react";
import { useState } from "react";

const TodoList = ({ todoItems }) => {
  const [todoList, settodoList] = useState(todoItems);

  const handleDelete = (id) => {
    const filteredTodo = todoList.filter((todo) => todo.id !== id);
    settodoList(filteredTodo);
  };

  console.log(todoList);
  return (
    <div className=" text-center ">
      <h1 className=" font-bold text-2xl p-5 ">Todo List App </h1>
      {todoList.length > 0 ? (
        todoList.map((todo, index) => (
          <div
            key={todo.id}
            className=" p-4 bg-slate-300 w-1/2 mx-auto my-2 rounded-md font-semibold"
          >
            <div className=" flex justify-between px-3">
              <h1
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
              >
                {todo.task}
              </h1>
              <button
                onClick={() => handleDelete(todo.id)}
                className=" text-xl"
              >
                ❌
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1>No Todo List Found</h1>
      )}
    </div>
  );
};

export default TodoList;
