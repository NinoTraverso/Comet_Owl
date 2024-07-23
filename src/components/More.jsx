import React from "react";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";

function More() {
  return (
    <div>
      <Analytics />
      <SpeedInsights />
      <div className="nav-separator"></div>

      <h1>Some other page/pages</h1>
    </div>
  );
}

export default More;
