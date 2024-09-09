import React from "react";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";

function More() {
  return (
    <div>
      <Analytics />
      <SpeedInsights />
      <br />
      <br />
      <br />
      <br className="d-none d-xl" />
      <br className="d-none d-xl" />
      <br className="d-none d-xl" />
      <br className="d-none d-xl" />
      <br className="d-none d-xl" />

      <div>
        <div
          id="comingSoonContainerSmall"
          className="d-flex d-xl-none justify-content-center mx-auto my-4"
        >
          <h1 className="coming">Coming</h1>
          <h1 className="soon">Soon</h1>
        </div>
        <video autoPlay muted loop id="bgVideo" className="rounded">
          <source src="./assets/backgrounds/owl (2160p).mp4" type="video/mp4" />
        </video>
        <div id="comingSoonContainerBig" className="d-none d-xl-flex flex-row">
          <h1 className="coming">Coming</h1>
          <h1 className="soon">Soon</h1>
        </div>
      </div>
    </div>
  );
}

export default More;
