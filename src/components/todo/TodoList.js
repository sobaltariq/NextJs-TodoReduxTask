"use client";
import axios from "axios";
import "../todo/todo.css";

import React, { useEffect, useState } from "react";
import Link from "next/link";

function ToDo() {
  const [todoList, setTodoList] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const fetchData = async () => {
    await axios
      .get(`${URL}?limit=10`)
      .then((response) => {
        setTodoList(response.data);
        console.log(response.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTodoItem = async (id, title) => {
    const deleteItem = await axios.delete(`${URL}/${id}`);
    if (deleteItem.status == 200) {
      const newTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newTodoList);
      alert(`Deleted ${title}`);
      console.log("Deleted");
    } else {
      console.log("Delete Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(todoList);
  return (
    <>
      <div className="todo-list-container">
        <div className="top-container">
          <h2>Todos</h2>
        </div>

        <div className="todo-list-container">
          <>
            {todoList && todoList.length > 0 ? (
              todoList.map((todo, index) => {
                return (
                  <div className="todo-card" key={todo.id}>
                    <div className="todo-meta">
                      <p>Number: {todo.id}</p>
                    </div>
                    <div className="main-content">
                      <h1>{todo.title}</h1>
                      <p>
                        <strong>User: {todo.userId}</strong>
                      </p>
                      <p>{todo.body}</p>
                    </div>
                    <div className="todo-controls">
                      <p
                        className="btn-red"
                        onClick={() => {
                          deleteTodoItem(todo.id, todo.title);
                        }}
                      >
                        Delete
                      </p>
                      <Link
                        className="btn-blue"
                        href={`/todo/update?id=${todo.id}`}
                      >
                        Update
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Loading</p>
            )}
          </>
        </div>
      </div>
    </>
  );
}

export default ToDo;
