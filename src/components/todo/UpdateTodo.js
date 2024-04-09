"use client";
import React, { useEffect, useState } from "react";
import "../todo/todo.css";
import axios from "axios";

function UpdateTodo({ userId }) {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const [todoId, setTodoId] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const [todoBody, setTodoBody] = useState("");

  const onChangeId = (e) => {
    setTodoId(e.target.value);
    console.log(`id: ${e.target.value}`);
  };
  const onChangeTitle = (e) => {
    setTodoTitle(e.target.value);
    console.log(`title: ${e.target.value}`);
  };
  const onChangeBody = (e) => {
    setTodoTitle(e.target.value);
    setTodoBody(e.target.value);
    console.log(`body: ${e.target.value}`);
  };

  const updateTodoItem = async (id) => {
    const response = await axios.put(`${URL}/${id}`, {
      userId: todoId,
      title: todoTitle,
      body: todoBody,
    });
    if (response.status === 200) {
      alert("Todo Updated");
      console.log(response.data);
    } else {
      console.log("Add Error");
    }
  };
  useEffect(() => {
    setTodoId(userId);
  }, [userId]);

  return (
    <>
      <div className="add-update-container">
        <div className="top-container todo-controls">
          <h2>Add New</h2>
        </div>
        <div className="add-todo-form">
          <input
            type="number"
            placeholder="id"
            value={todoId}
            onChange={onChangeId}
          />
          <input
            type="text"
            placeholder="Enter Title"
            onChange={onChangeTitle}
          />
          <textarea
            name="body"
            id="body"
            rows="5"
            placeholder="Body...."
            onChange={onChangeBody}
          />
          <input
            type="button"
            value="Save"
            className="btn-blue"
            onClick={() => {
              updateTodoItem(todoId);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default UpdateTodo;
