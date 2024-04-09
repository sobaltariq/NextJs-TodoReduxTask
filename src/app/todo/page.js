import AddUpdateTodo from "@/components/todo/AddTodo";
import ToDo from "@/components/todo/TodoList";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <div className="outer-container">
        <div className="main-top-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5px",
              alignItems: "center",
            }}
          >
            <h1>Todo</h1>
            <Link href={"todo/edit"} className="btn-blue">
              Add New
            </Link>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            vitae quibusdam ullam unde, voluptates et quo nobis. Illum dolor
            omnis hic laborum beatae dicta officia tempore, cupiditate voluptate
            et!
          </p>
        </div>
        <ToDo />
      </div>
    </>
  );
}

export default page;
