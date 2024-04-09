import ContactForm from "@/components/contact/ContactForm";
import React from "react";

function page() {
  return (
    <>
      <div className="outer-container">
        <div className="main-top-container">
          <h1>Contact Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            vitae quibusdam ullam unde, voluptates et quo nobis. Illum dolor
            omnis hic laborum beatae dicta officia tempore, cupiditate voluptate
            et!
          </p>
        </div>
        <ContactForm />
      </div>
    </>
  );
}

export default page;
