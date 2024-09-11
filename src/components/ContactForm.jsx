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
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        form.current,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Email sent successfully!"); // Show success alert
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          alert("Error sending email: " + error.text); // Show error alert
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
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
