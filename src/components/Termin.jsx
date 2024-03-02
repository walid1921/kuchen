import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PrimaryBtn from "./btn/PrimaryBtn";
import toast from "react-hot-toast";

function Termin() {
  const EMAIL_URL = import.meta.env.VITE_EMAIL_URL;

  const formRef = useRef();

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
      errors.name = "Name ist erforderlich";
    } else if (/\d|\./.test(name)) {
      errors.name = "Name darf keine Zahlen oder Punkte enthalten";
    }

    if (!email) {
      errors.email = "E-Mail ist erforderlich";
    } else if (!/@/.test(email)) {
      errors.email = "Ungültiges E-Mail-Format";
    }

    if (!message) {
      errors.message = "Nachricht ist erforderlich";
    }

    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          "service_7gydm4d", //! change it to your service ID / and also change in Vercel env variables
          "template_0b156ro",
          formRef.current,
          EMAIL_URL
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Nachricht erfolgreich gesendet");
            resetForm(); // Reset the input fields
          },
          (error) => {
            console.log(error.text);
            toast.error("Fehler beim Senden der Nachricht");
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
        <div className="md:mb-5 w-full">
          <input
            type="text"
            name="user_name"
            placeholder="Geben Sie Ihren Namen ein"
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
            placeholder="Geben Sie Ihre E-Mail ein"
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

      <div className="mb-10">
        <textarea
          type="text"
          name="message"
          rows={4}
          placeholder="Schreiben Sie Ihre Nachricht"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`text-sm  w-full p-3 focus:outline-none bg-white/30 border-neutral-400  resize-none border  
                ${errors.message ? "border-red-500" : ""}`}
        />

        {errors.message && (
          <div className="text-red-500 text-xs mb-2">{errors.message}</div>
        )}
      </div>

      <div className="center-center">
        <PrimaryBtn text="Absenden" icon="BsFillSendFill" />
      </div>
    </form>
  );
}

export default Termin;
