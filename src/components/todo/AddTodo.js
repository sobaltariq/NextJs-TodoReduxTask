"use client";
import React, { useEffect, useState } from "react";
import "../todo/todo.css";
import axios from "axios";

function AddTodo({ userId }) {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const [todoId, setTodoId] = useState("");
  const [todoTitle, setTodoTitle] = useState("");

  const onChangeId = (e) => {
    setTodoId(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  const addTodoItem = async () => {
    const response = await axios.post(`${URL}`, {
      userId: todoId,
      title: todoTitle,
    });
    if (response.status === 201) {
      alert("Todo Added");
      console.log(response.data);
    } else {
      console.log("Add Error");
    }
  };
  useEffect(() => {
    setTodoId(userId);
  }, []);

  return (
    <>
      <div className="add-update-container">
        <div className="top-container todo-controls">
          <h2>Add New</h2>
        </div>
        <div className="add-todo-form">
          <input
            type="number"
            placeholder="Id"
            value={todoId}
            onChange={onChangeId}
          />
          <input
            type="text"
            placeholder="Enter Title"
            onChange={onChangeTitle}
          />
          <input
            type="button"
            value="Save"
            className="btn-blue"
            onClick={() => {
              addTodoItem(todoId);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default AddTodo;
