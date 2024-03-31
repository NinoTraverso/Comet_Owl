// Example Analytics component
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { inject } from "@vercel/analytics";

inject();

function AnalyticsComponent({ pathname }) {
  return <Analytics data={{ pathname }} />;
}

export default AnalyticsComponent;
