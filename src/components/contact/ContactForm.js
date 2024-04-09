"use client";
import React, { useEffect, useState } from "react";
import "./contactForm.css";

function ContactForm() {
  const [warning, setWarning] = useState(false);
  const [mailWarning, setMailWarning] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  useEffect(() => {
    console.log(formValues);
    console.log("warning mail: ", mailWarning);
    console.log("warning: ", warning);
    console.log("endwith", formValues.email.endsWith("@gmail.com"));
  }, [mailWarning, warning, formValues]);

  const onValueChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.number]: e.target.value,
      [e.target.password]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      (formValues.name.trim() == "") |
      (formValues.email.trim() == "") |
      (formValues.password.trim() == "")
    ) {
      setWarning(true);
      setMailWarning(false);
    } else if (
      !formValues.email.endsWith("@yahoo.com") &&
      !formValues.email.endsWith("@gmail.com") &&
      !formValues.email.endsWith("@outlook.com")
    ) {
      setMailWarning(true);
      setWarning(false);
    } else {
      setWarning(false);
      setMailWarning(false);
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="main-top-container">
          <h1>Form</h1>
        </div>

        <div className="form-container">
          <form
            action=""
            className="contact-form-wrapper"
            onSubmit={submitHandler}
          >
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Name"
                value={formValues.name}
                onChange={onValueChange}
                name="name"
                className={
                  warning & (formValues.name.trim() == "")
                    ? "input-border-error"
                    : ""
                }
              />
              <input
                type="email"
                placeholder="Email (gmail, yahoo, outlook)"
                value={formValues.email}
                onChange={onValueChange}
                name="email"
                className={
                  warning & (formValues.email.trim() == "")
                    ? "input-border-error"
                    : ""
                }
              />
            </div>
            <div className="input-wrapper">
              <input
                type="number"
                placeholder="Number"
                value={formValues.number}
                onChange={onValueChange}
                name="number"
              />
              <input
                type="password"
                placeholder="Password"
                value={formValues.password}
                onChange={onValueChange}
                name="password"
                className={
                  warning & (formValues.password.trim() == "")
                    ? "input-border-error"
                    : ""
                }
              />
            </div>
            <input type="submit" className="btn-submit" />
            <p
              className="submit-warning"
              style={{ display: warning ? "block" : "none" }}
            >
              Please Enter All The Fields
            </p>
            <p
              className="submit-warning"
              style={{ display: mailWarning ? "block" : "none" }}
            >
              Invalid Mail
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
