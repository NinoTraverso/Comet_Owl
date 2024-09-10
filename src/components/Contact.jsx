import React from "react";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";
import { ContactForm } from "./ContactForm";

function Contact() {
  return (
    <div>
      <Analytics />
      <SpeedInsights />
      <div className="nav-separator"></div>
      <div className="d-flex flex-column text-center align-items-center my-4">
        <div className="w-75 mx-5 mt-3 mb-5">
          <h1
            id="contactTitle"
            className="sectionTitle d-none d-xl-block align-self-end"
          >
            CONTACT
          </h1>
          <h1
            id="contactTitle"
            className="sectionTitleMedium d-none d-md-block d-xl-none text-center"
          >
            CONTACT
          </h1>
          <h1
            id="contactTitle"
            className="sectionTitleSmall d-block d-md-none text-center"
          >
            CONTACT
          </h1>
          <ContactForm />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Contact;
