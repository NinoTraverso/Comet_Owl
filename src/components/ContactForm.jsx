import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Add alert to check if form is submitting
    alert("Form submit triggered");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY, // Ensure this is correctly set in .env
        process.env.REACT_APP_TEMPLATE_KEY, // Ensure this is correctly set in .env
        form.current, // This should be the form reference
        process.env.REACT_APP_PUBLIC_KEY // Ensure this is correctly set in .env
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Error sending email: " + (error.text || "Unknown error"));
          console.error("Detailed error:", error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} id="contact-form">
      <div id="contactFormContainer" className="form-container">
        <input type="text" name="user_name" placeholder="Your name" required />
        <input
          type="email"
          name="user_email"
          placeholder="Your email"
          required
        />
        <textarea
          name="message"
          maxLength="500"
          placeholder="Write your message..."
          required
        />
        <input type="submit" value="Send" />
      </div>
    </form>
  );
};
