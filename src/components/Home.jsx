import React from "react";

function Home() {
  return (
    <div>
      <div id="solarSystem" className="mx-5">
        <div id="sun"></div>
        <div id="mercury" class="planet"></div>
        <div id="venus" class="planet"></div>
        <div id="earth" class="planet"></div>
        <div id="mars" class="planet"></div>
        <div id="jupiter" class="planet"></div>
        <div id="saturn" class="planet"></div>
        <div id="uranus" class="planet"></div>
        <div id="neptune" class="planet"></div>
      </div>
      <h1 className="loader d-flex justify-content-center m-5">
        Welcome to CometOwl
      </h1>
    </div>
  );
}

export default Home;
