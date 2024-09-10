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
      <div className="d-flex flex-column flex-xl-row align-items-center mt-5 mb-5">
        <div className="w-75 mx-5 mt-3 mb-5">
          <ContactUs />
        </div>
        <div
          id="infoContainer"
          className="w-75 d-flex flex-column flex-xl-row justify-content-center align-items-center mt-5"
        >
          <div id="infoSvgContainer" className="align-self-center">
            <img src="/assets/iconInfo.svg" alt="emailIcon" />
          </div>
          <div
            id="infoTextContainer"
            className="d-flex flex-column justify-content-start align-items.-center me-md-5"
          >
            <h1 className="text-center">ABOUT ME</h1>
            <h4 className="text-center">I .</h4>
          </div>
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
