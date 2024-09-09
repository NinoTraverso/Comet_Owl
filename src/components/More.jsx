import React from "react";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";

function More() {
  return (
    <div>
      <Analytics />
      <SpeedInsights />
      <br className="d-none d-xl-block" />
      <br className="d-none d-xl-block" />
      <br className="d-none d-xl-block" />
      <br className="d-none d-xl-block" />
      <br className="d-none d-xl-block" />
      <br className="d-none d-xl-block" />
      <br />
      <br className="d-flex d-md-none" />
      <br className="d-flex d-md-none" />

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
      <br className="d-flex d-md-none" />
      <br className="d-flex d-md-none" />
      <br className="d-flex d-md-none" />
    </div>
  );
}

export default More;
