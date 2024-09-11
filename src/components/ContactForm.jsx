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
    <form ref={form} onSubmit={sendEmail}>
      <div
        id="contactFormContainer"
        className="d-flex flex-column justify-content-center align-items-start p-3"
      >
        <div className="align-self-center">
          <img src="/assets/iconEmail.svg" alt="" />
        </div>
        <input
          className="inputName w-50 my-4 rounded"
          type="text"
          name="user_name"
          placeholder="  Your name"
          required
        />
        <input
          className="inputEmail w-50 my-4 rounded"
          type="email"
          name="user_email"
          placeholder="  Your email"
          required
        />
        <textarea
          className="inputMessage w-75 my-4 rounded"
          name="message"
          maxLength="500"
          placeholder="  Write your message..."
          required
        />

        <input
          id="submitButton"
          className="align-self-start pt-2 pb-2 px-4 "
          type="submit"
          value="Send"
        />
      </div>
    </form>
  );
};
