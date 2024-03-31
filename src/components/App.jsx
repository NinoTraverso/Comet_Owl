import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Analytics from "./Analytics";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const location = useLocation();
  return (
    <div id="appContainer" pathname={location.pathname}>
      <Navbar />
      <Analytics />
      <Footer />
    </div>
  );
}

export default App;
