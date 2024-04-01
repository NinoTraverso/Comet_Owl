import React from "react";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";

function Home() {
  return (
    <div>
      <div className="nav-separator"></div>
      <Analytics />
      <SpeedInsights />
      <div
        id="solarSystem"
        className="d-flex flex-row justify-content-between align-items-center mx-4"
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
      <div className="welcomeText d-flex justify-content-center align-items-center">
        <h1>Welcome to CometOwl</h1>
      </div>
      {/* ------------------------------------------------SECOND SECTION -------------------------------------------- */}
      <div className="d-flex flex-column  flex-xl-row justify-content-around align-items center">
        <div className="pelicanNebulaImg align-self-center rounded mx-5">
          <img
            src="./assets/space-images/northAmericanPelicanNebula.jpg"
            alt="North American and Pelican Nebula"
            className="rounded"
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
          <div>
            <img src="./assets/icons/satellite.svg" alt="" />
          </div>
          <h1 className="w-75 text-center">
            At CometOwl we strive to give you the best Astronomy experience...
          </h1>
          <div className="loaderTwo my-5"></div>
        </div>
      </div>
      <div className="separator"></div>
      {/*---------------------------------------------- THIRD SECTION ----------------------------------------- */}
      <div className="d-flex flex-column  flex-xl-row justify-content-around align-items center">
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
          <div>
            <img src="./assets/icons/rocket.svg" alt="" />
          </div>
          <h1 className="w-75 text-center">
            Discover the Solar System and delve with us into the stars.
          </h1>
          <div className="loaderThree my-5"></div>
        </div>
        <div className="pelicanNebulaImg align-self-center rounded mx-5">
          <img
            src="./assets/space-images/spaceFlashlight.jpg"
            alt="Nightsky and flashlight"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
