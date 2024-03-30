import React from "react";

function Home() {
  return (
    <div>
      <div id="solarSystem" className="mx-5">
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
        <div className="pelicanNebulaImg m-5">
          <img
            src="./assets/space-images/northAmericanPelicanNebula.jpg"
            alt="North American and Pelican Nebula"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
