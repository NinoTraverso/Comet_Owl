import React from "react";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";

function Contact() {
  return (
    <div>
      <Analytics />
      <SpeedInsights />
      <div className="nav-separator"></div>
      <div className="d-flex flex-column text-center align-items-center my-4">
        <h3 className="bg-dark bg-rounded ">Contact</h3>
        <input
          type="text"
          placeholder="Name"
          className="text-light bg-dark my-1"
        />
        <input
          type="email"
          placeholder="Email"
          className=" text-light bg-dark my-1"
        />
        <input
          type="text"
          placeholder="Message"
          className=" text-light bg-dark my-1"
        />
        <button className="text-light bg-dark border border-none my-1 px-4">
          Send
        </button>
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
