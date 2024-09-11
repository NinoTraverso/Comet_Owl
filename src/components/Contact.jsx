import React from "react";
import { ContactUs } from "./ContactForm";

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="d-flex flex-column justify-content-end mt-5">
      <div className="nav-separator"></div>
      <div className="w-75 mx-5 mt-3 mb-5">
        <ContactUs />
      </div>
    </div>
  );
}

export default Contact;
