import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFocus = (e) => {
    const { target } = e;
    const inputType = target.name;
    if (inputType === "name" && !name) {
      setErrorMessage(`Please put your name`);
      return;
    }

    if (inputType === "email" && !validateEmail(email)) {
      setErrorMessage("Email is invalid");

      return;
    }

    if (inputType === "message" && !message) {
      setErrorMessage(`Please leave a message`);
      return;
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage(`Please put your name`);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");

      return;
    }

    if (!message) {
      setErrorMessage(`Please leave a message`);
      return;
    }

    setName("");

    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form>
        <div class="form-group row">
          <label for="nameInput" class="col-sm-2 col-form-label">
            Name:{" "}
          </label>
          <div class="col-sm-10">
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              onBlur={handleFocus}
              type="text"
              placeholder="name"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="emailInput" class="col-sm-2 col-form-label">
            Email:{" "}
          </label>
          <div class="col-sm-10">
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              onBlur={handleFocus}
              type="email"
              placeholder="email"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="messageInput" class="col-sm-2 col-form-label">
            Message:{" "}
          </label>
          <div class="col-sm-10">
            <textarea rows="4" cols="50"
              value={message}
              name="message"
              onChange={handleInputChange}
              onBlur={handleFocus}
              type="message"
              placeholder="message here"
            />
          </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-10">
          <button type="button" class="btn btn-dark col-sm-2" onClick={handleFormSubmit}>
            Submit
          </button>
          </div>
        </div>
      </form>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
