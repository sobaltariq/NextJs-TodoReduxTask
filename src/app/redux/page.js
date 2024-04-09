import CounterRedux from "@/components/redux/CounterRedux";
import Link from "next/link";
import React from "react";

function Page() {
  const URL = "https://api.nstack.in/v1/todos";
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
            <h1>Redux</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            vitae quibusdam ullam unde, voluptates et quo nobis. Illum dolor
            omnis hic laborum beatae dicta officia tempore, cupiditate voluptate
            et!
          </p>
        </div>
        <CounterRedux />
      </div>
    </>
  );
}

export default Page;
