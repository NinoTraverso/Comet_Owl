import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";

import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div id="appContainer">
      <Navbar />
      <Analytics />
      <SpeedInsights />
      <Footer />
    </div>
  );
}

export default App;
