import React from "react";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";
import { ContactUs } from "./ContactForm";

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
        </div>
      </div>
      <div className="w-75 mx-5 mt-3 mb-5">
        <ContactUs />
      </div>
    </div>
  );
}

export default Contact;
