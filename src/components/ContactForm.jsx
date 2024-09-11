import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Sending email with:", {
      serviceID: process.env.REACT_APP_SERVICE_KEY,
      templateID: process.env.REACT_APP_TEMPLATE_KEY,
      publicKey: process.env.REACT_APP_PUBLIC_KEY,
    });

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset(); // Optional: reset the form after successful submission
        },
        (error) => {
          alert("Error sending message. Please try again later.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="name">Name</label>
      <input type="text" name="user_name" id="name" required />

      <label htmlFor="email">Email</label>
      <input type="email" name="user_email" id="email" required />

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" required />

      <input type="submit" value="Send" />
    </form>
  );
};
