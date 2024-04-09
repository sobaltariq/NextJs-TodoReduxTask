"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./tasks.css";
import axios from "axios";

function TasksList() {
  //   const URL = "https://reqres.in/api/todos";
  const URL = "https://64b8271d21b9aa6eb0799ebb.mockapi.io/api/Tasks";
  const [tasksList, setTasksList] = useState([]);

  const getAllTasks = async () => {
    await axios
      .get(URL)
      .then((response) => {
        setTasksList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletetask = async (id, title) => {
    const deletedTask = await axios.delete(`${URL}/${id}`);
    if (deletedTask.status === 200) {
      alert(`Task Deleted ${title}`);

      const newTasksList = tasksList.filter((task) => {
        task.id != id;
      });
      setTasksList(newTasksList);
      getAllTasks();
    }
  };

  useEffect(() => {
    getAllTasks();
    console.log(tasksList[0]);
  }, []);
  return (
    <>
      <div className="task-main-container">
        <div className="top-container">
          <h2>Todos</h2>
        </div>

        <div className="task-list-container">
          <>
            {tasksList && tasksList.length > 0 ? (
              tasksList.map((task, index) => {
                return (
                  <div className="task-card" key={index}>
                    <div className="task-meta">
                      <p>Id: {task.id}</p>
                      <p>Date: {task.createdAt.slice(0, 10)}</p>
                    </div>
                    <div className="main-content">
                      <h1>{task.title}</h1>
                      <p>
                        <strong>Description: {task.description}</strong>
                      </p>
                    </div>
                    <div className="task-controls">
                      <p
                        className="btn-red"
                        onClick={() => {
                          deletetask(task.id, task.title);
                        }}
                      >
                        Delete
                      </p>
                      <Link
                        className="btn-blue"
                        href={`/todo/update?id=${"ok"}`}
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

export default TasksList;
