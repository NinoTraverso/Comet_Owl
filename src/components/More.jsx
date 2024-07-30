import React from "react";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";

function More() {
  return (
    <div>
      <Analytics />
      <SpeedInsights />
      <div className="nav-separator"></div>
      <div
        id="Exoplore"
        className="text-center d-flex flex-column align-items-center"
      >
        <h1>Explore exoplanets</h1>
        <h3 className="w-75 mx-5">
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
    </div>
  );
}

export default More;
