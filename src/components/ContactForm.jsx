import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!");

          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <div
        id="contactFormContainer"
        className="d-flex flex-column justify-content-center align-items-center p-3 mx-auto"
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <input
          className="inputName w-100 my-4 rounded"
          type="text"
          name="user_name"
          placeholder="  Your name"
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <input
          className="inputEmail w-100 my-4 rounded"
          type="email"
          name="user_email"
          placeholder="  Your email"
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <textarea
          className="inputMessage w-100 my-4 rounded"
          name="message"
          maxLength="500"
          placeholder="  Write your message..."
          required
          style={{ padding: "10px", fontSize: "16px", minHeight: "150px" }}
        />
        <input
          id="contactFormButton"
          className="align-self-center pt-2 pb-2 my-4 px-4 btn btn-primary"
          type="submit"
          value="Send"
          style={{ width: "100%", fontSize: "18px" }}
        />
      </div>
    </form>
  );
};
