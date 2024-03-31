import React from "react";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";

function Articles() {
  return (
    <div>
      <Analytics />
      <SpeedInsights />
      <div className="nav-separator"></div>

      <h1>ARTICLES PAGE</h1>
    </div>
  );
}

export default Articles;
