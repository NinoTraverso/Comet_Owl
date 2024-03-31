import React from "react";
import Analytics from "./Analytics";

function Home() {
  return (
    <div id="homeContent">
      <div className="nav-separator"></div>
      <Analytics />
      <div
        id="solarSystem"
        className="d-flex flex-row justify-content-between align-items-center mx-3"
      >
        <div id="sun"></div>
        <div id="mercury" className="planet"></div>
        <div id="venus" className="planet"></div>
        <div id="earth" className="planet"></div>
        <div id="mars" className="planet"></div>
        <div id="jupiter" className="planet"></div>
        <div id="saturn" className="planet"></div>
        <div id="uranus" className="planet"></div>
        <div id="neptune" className="planet"></div>
      </div>
      <div className="loader d-flex justify-content-center m-5 mx-auto"></div>
      <div>
        <div className="pelicanNebulaImg">
          <img
            src="./assets/space-images/northAmericanPelicanNebula.jpg"
            alt="North American and Pelican Nebula"
          />
        </div>
        <div>
          <h1>Adding some text</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
