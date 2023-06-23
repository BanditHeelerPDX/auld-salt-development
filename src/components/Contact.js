import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handleBlur = (field) => {
    if (field === "name" && name === "") {
      setNameError(true);
    }

    if (field === "email" && email === "") {
      setEmailError(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="contact-form">
      <div className="flex-row">
        <h2 className="title">Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            onBlur={() => handleBlur("name")}
          />
          {nameError && <p className="error">Name is required</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => handleBlur("email")}
          />
          {emailError && <p className="error">Invalid email address</p>}
          <textarea
            placeholder="Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
          <button type="submit">Deliver</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
