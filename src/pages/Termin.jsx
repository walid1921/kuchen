import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PrimaryBtn from "../components/btn/PrimaryBtn";

function Termin() {
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
          "-EZm67h-WYQsh0NsQ"
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
    <div className="w-full">
      <form
        ref={formRef}
        onSubmit={handelSubmit}
        className=" center-center flex-col "
      >
        <div className="mb-5 ">
            <option value="">
                Select your option
                
            </option>

          {errors.name && (
            <div className="text-red-500 text-xs mb-2">{errors.name}</div>
          )}
        </div>
        <div className="mb-5 ">
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`text-sm w-full p-3 mb-2 focus:outline-none rounded-md border  focus:border-sky-700
              focus:bg-blue-100 transition-all ease-in-out hover:border-sky-700 duration-100  ${
                errors.name ? "border-red-500" : ""
              }`}
          />

          {errors.name && (
            <div className="text-red-500 text-xs mb-2">{errors.name}</div>
          )}
        </div>

        <div className="mb-5">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`text-sm w-full p-3 mb-2 focus:outline-none rounded-md border  focus:border-sky-700
              focus:bg-blue-100 transition-all ease-in-out hover:border-sky-700 duration-100 ${
                errors.email ? "border-red-500" : ""
              }`}
          />

          {errors.email && (
            <div className="text-red-500 text-xs mb-2">{errors.email}</div>
          )}
        </div>

        <div className="mb-5">
          <textarea
            type="text"
            name="message"
            rows={4}
            placeholder="Write your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`text-sm w-full p-3 focus:outline-none rounded-md resize-none border  focus:border-sky-700
              focus:bg-blue-100 transition-all ease-in-out hover:border-sky-700 duration-100 ${
                errors.message ? "border-red-500" : ""
              }`}
          />

          {errors.message && (
            <div className="text-red-500 text-xs mb-2">{errors.message}</div>
          )}
        </div>

        <PrimaryBtn text="send" />
      </form>
    </div>
  );
}

export default Termin;
