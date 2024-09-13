import React from "react";
import { ContactUs } from "./ContactForm"; // Adjust the path if necessary

const Contact = () => {
  return (
    <div className="contact-container d-flex flex-column justify-content-center align-items-center">
      <div className="nav-separator d-none d-xl-block"></div>
      <br className="d-block d-xl-none" />
      <br className="d-block d-xl-none" />
      <h1 id="contactTitle">Contact</h1>
      <div className="form-container">
        <ContactUs />
      </div>
      <div className="d-none d-xl-block separator"></div>
    </div>
  );
};

export default Contact;
