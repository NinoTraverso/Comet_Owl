import React from "react";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";
import ContactForm from "./ContactForm";

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

      {/* 
      <div
        id="Exoplore"
        className="text-center d-flex flex-column align-items-center"
      >
        <h1>Explore exoplanets</h1>
        <h3 className="mx-4">
          Have you ever wondered about other planets outside our solar system?
          You can explore a full list of current and updated discovered
          exoplanets in Exoplore where you'll be able to explore exoplanets
          features from size, temperature, composition and more!
        </h3>
        <h2 className="w-25 text-center">
          <a
            href="https://exoplore.vercel.app/"
            className="text-secondary text-decoration-none bg-rounded"
          >
            Exoplore
          </a>
        </h2>
      </div>
*/}
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
