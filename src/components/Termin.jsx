import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PrimaryBtn from "./btn/PrimaryBtn";

function Termin() {
  const EMAIL_URL = import.meta.env.VITE_EMAIL_URL;

  const formRef = useRef();
  const [done, setDone] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!name) {
      errors.name = "Name is required";
    } else if (/\d|\./.test(name)) {
      errors.name = "Name should not contain numbers or dots";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/@/.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!message) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          "service_75azj3m",
          "template_lzm7tak",
          formRef.current,
          EMAIL_URL
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            resetForm(); // Reset the input fields
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setErrors(errors);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handelSubmit}
      className="lg:w-[90%] mx-10 lg:mx-0"
    >
      <div className="center-center flex-wrap md:flex-nowrap gap-5 ">
        <div className="mb-5 w-full">
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`text-sm w-full p-3 mb-2 focus:outline-none bg-white/30 border-neutral-400   border  
                 ${errors.name ? "border-red-500" : ""}`}
          />

          {errors.name && (
            <div className="text-red-500 text-xs mb-2">{errors.name}</div>
          )}
        </div>
        <div className="mb-5 w-full">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`text-sm w-full p-3 mb-2 focus:outline-none bg-white/30 border-neutral-400  border  
                ${errors.email ? "border-red-500" : ""}`}
          />

          {errors.email && (
            <div className="text-red-500 text-xs mb-2">{errors.email}</div>
          )}
        </div>
      </div>

      <div className="mb-5">
        <textarea
          type="text"
          name="message"
          rows={4}
          placeholder="Write your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`text-sm w-full p-3 focus:outline-none bg-white/30 border-neutral-400  resize-none border  
                ${errors.message ? "border-red-500" : ""}`}
        />

        {errors.message && (
          <div className="text-red-500 text-xs mb-2">{errors.message}</div>
        )}
      </div>

      <div className="center-center">
        <PrimaryBtn text="Absenden" />
      </div>
    </form>
  );
}

export default Termin;
